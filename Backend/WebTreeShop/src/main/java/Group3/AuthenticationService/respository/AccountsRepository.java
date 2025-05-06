package Group3.AuthenticationService.respository;
import java.util.Optional;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import Group3.AuthenticationService.model.Accounts;

@Repository
public interface AccountsRepository extends JpaRepository<Accounts, UUID>{
    Optional<Accounts> findByName(String name); 
     
    Optional<Accounts> findByEmail(String email);
    
}
