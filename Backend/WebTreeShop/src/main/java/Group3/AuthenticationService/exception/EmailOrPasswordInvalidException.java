package Group3.AuthenticationService.exception;

public class EmailOrPasswordInvalidException extends RuntimeException {
    public EmailOrPasswordInvalidException(String message){
        super(message);
    }
}
