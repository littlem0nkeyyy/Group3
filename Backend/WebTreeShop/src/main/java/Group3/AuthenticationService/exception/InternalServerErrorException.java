package Group3.AuthenticationService.exception;

public class InternalServerErrorException extends RuntimeException {
    public InternalServerErrorException(String message){
        super(message);
    }
}
