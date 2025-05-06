package Group3.AuthenticationService.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Group3.AuthenticationService.dto.LoginRequestDTO;
import Group3.AuthenticationService.dto.LoginResponseDTO;
import Group3.AuthenticationService.dto.RegisterRequestDTO;
import Group3.AuthenticationService.service.AuthService;

import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final AuthService authService;
    private final org.slf4j.Logger logger = LoggerFactory.getLogger(AuthController.class);
    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDTO> loginAPI(@RequestBody LoginRequestDTO loginRq) {
        try {
            logger.info("LoginRequestDTO: {}", loginRq);
            logger.info("Password: {}", loginRq.getPassword());
            LoginResponseDTO loginRp = authService.loginService(loginRq.getEmail(), loginRq.getPassword());
            return ResponseEntity.ok(loginRp);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }
    @PostMapping("/register")
    public ResponseEntity<String> registerAPI(@RequestBody RegisterRequestDTO registerRq) {
        try {
            authService.registerService(registerRq.getEmail(), registerRq.getPassword());
            return new ResponseEntity<>("Register successful", HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>("Registration failed", HttpStatus.BAD_REQUEST);
        }
    }
}
