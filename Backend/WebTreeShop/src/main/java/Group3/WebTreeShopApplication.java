package Group3;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = "Group3")
@EnableJpaRepositories("Group3.AuthenticationService.respository")
public class WebTreeShopApplication {

	public static void main(String[] args) {
		SpringApplication.run(WebTreeShopApplication.class, args);
	}

}
