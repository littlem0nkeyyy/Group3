package Group3.AuthenticationService.respository;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import Group3.AuthenticationService.model.RefreshToken;

@Repository
public interface RefreshTKRepository extends JpaRepository<RefreshToken,UUID> {
    Optional<RefreshToken> findByAccount_AccountId(UUID accountId);
}
