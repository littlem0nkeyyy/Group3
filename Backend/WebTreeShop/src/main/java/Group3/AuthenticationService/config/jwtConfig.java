package Group3.AuthenticationService.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Component
@ConfigurationProperties(prefix = "jwt")
public class jwtConfig {
    private String secretKey;
    private long exAccessTk;
    private long exRefreshTk;
}
