package Group3.AuthenticationService.exception;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {
    
    private static final Logger logger = LoggerFactory.getLogger(GlobalExceptionHandler.class);

    @ExceptionHandler(EmailAlreadyExistsException.class)
    public ResponseEntity<String> handleEmailAlreadyExists(EmailAlreadyExistsException ex) {
        // Ghi log lỗi khi email đã tồn tại
        logger.error("Email đã tồn tại: {}", ex.getMessage(), ex);
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(EmailOrPasswordInvalidException.class)
    public ResponseEntity<String> handleEmailOrPasswordInvalid(EmailOrPasswordInvalidException ex) {
        // Ghi log lỗi khi email hoặc mật khẩu không hợp lệ
        logger.error("Email hoặc mật khẩu không hợp lệ: {}", ex.getMessage(), ex);
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(InternalServerErrorException.class)
    public ResponseEntity<String> handleInternalServerError(InternalServerErrorException ex) {
        // Ghi log lỗi khi xảy ra lỗi máy chủ nội bộ
        logger.error("Lỗi máy chủ nội bộ: {}", ex.getMessage(), ex);
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
