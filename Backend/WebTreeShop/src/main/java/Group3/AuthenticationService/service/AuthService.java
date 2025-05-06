package Group3.AuthenticationService.service;

import java.time.LocalDateTime;
import java.util.UUID;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import Group3.AuthenticationService.dto.LoginResponseDTO;
import Group3.AuthenticationService.exception.EmailAlreadyExistsException;
import Group3.AuthenticationService.exception.EmailOrPasswordInvalidException;
import Group3.AuthenticationService.model.Accounts;
import Group3.AuthenticationService.model.RefreshToken;
import Group3.AuthenticationService.respository.AccountsRepository;
import Group3.AuthenticationService.respository.RefreshTKRepository;
import Group3.AuthenticationService.security.JwtUtil;
import Group3.AuthenticationService.security.PasswordEncoderUtil;
import Group3.Enum.RoleType;

@Service
public class AuthService {
	private final Logger logger = LoggerFactory.getLogger(AuthService.class);

	private AccountsRepository accRepo;
	private RefreshTKRepository refreshRepo;
	private JwtUtil jwtUtil;

	public AuthService(AccountsRepository accRepo, RefreshTKRepository refreshRepo, JwtUtil jwtUtil) {
		this.accRepo = accRepo;
		this.refreshRepo = refreshRepo;
		this.jwtUtil = jwtUtil;
	}

	public Accounts registerService(String email, String password) {
		email = email.trim().toLowerCase();

		if (accRepo.findByEmail(email).isPresent()) {
			throw new EmailAlreadyExistsException("Email already exists");
		}

		Accounts newAcc = new Accounts();
		newAcc.setEmail(email);
		newAcc.setPasswordHash(PasswordEncoderUtil.hashPassword(password));
		newAcc.setRole(RoleType.USER);
		Accounts savedAccount = accRepo.save(newAcc);
		return savedAccount;
	}

	public LoginResponseDTO loginService(String email, String password) {
		logger.info("password: {}",password);
		Accounts accounts = accRepo.findByEmail(email)
				.orElseThrow(() -> {
					return new EmailOrPasswordInvalidException("Invalid email or password");
				});

		if (!PasswordEncoderUtil.matchPassword(password, accounts.getPasswordHash())) {
			throw new EmailOrPasswordInvalidException("Invalid email or password");
		}
		logger.info("password: {}",password);
		UUID accountId = accounts.getAccountId();
		RoleType role = accounts.getRole();

		RefreshToken refreshToken = refreshRepo.findByAccount_AccountId(accountId)
				.orElseGet(() -> {
					RefreshToken newTk = new RefreshToken();
					newTk.setAccount(accounts);
					return newTk;
				});

		refreshToken.setRefreshTk(jwtUtil.generateRefreshTK(email));
		refreshToken.setCreatedAt(LocalDateTime.now());
		refreshToken.setExpriresAt(jwtUtil.generateExTime());

		refreshRepo.save(refreshToken);

		return new LoginResponseDTO(
				jwtUtil.generateAccessTK(email,role), refreshToken.getRefreshTk());
	}
}
