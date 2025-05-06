import React, { useState } from 'react';
import { loginAPI, registerAPI } from '../api/authApi'; // đảm bảo đường dẫn đúng
import '../assets/Styles/SignIn.css';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/UseAuthContext';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const navigate = useNavigate();
  const {login} = useAuth();

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    try {
      if (isSignUpMode) {
        // ✅ Đăng ký
        if (password !== confirmPassword) {
          alert('Mật khẩu và xác nhận mật khẩu không khớp!');
          return;
        }

        const result = await registerAPI(email, password);
        alert('Đăng ký thành công!');
        console.log('Kết quả đăng ký:', result);

        // Chuyển sang trang đăng nhập
        setIsSignUpMode(false);
        setPassword('');
        setConfirmPassword('');
      } else {
        // Đăng nhập
        const result = await loginAPI(email, password);
        console.log('email:', email);
        console.log('password:', password);
        alert('Đăng nhập thành công!');
        console.log('Access Token:', result.accessTokenRes);
        console.log('Refresh Token:', result.refreshTokenRes);
        login(result.accessTokenRes);
        console.log('email:',localStorage.getItem('email'));
        console.log('role:',localStorage.getItem('role'));
        // navigate('/Profile');
        navigate('/Profile');

      }
    } catch (error) {
      console.error('Lỗi:', error);
      alert('Lỗi: ' + (error?.response?.data?.message || error.message));
    }
  };

  const handleGoogleLogin = () => {
    console.log('Đăng nhập bằng Google (chưa tích hợp)');
  };

  return (
    <div className="signin-container">
      <div className="signin-box">
        <img src={logo} alt="Logo" className="logoS" />

        <form onSubmit={handleSubmit} className="form-container">
          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Confirm Password (chỉ hiện khi đăng ký) */}
          {isSignUpMode && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm password:</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Enter password again"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          )}

          {/* Nút submit */}
          <button type="submit" className="login-btn">
            {isSignUpMode ? 'Sign up' : 'Sign in'}
          </button>
        </form>

        {/* Google login (placeholder) */}
        <div className="google-login">
          <button onClick={handleGoogleLogin} className="google-btn">
            {isSignUpMode ? 'Sign up with Google' : 'Sign in with Google'}
          </button>
        </div>

        {/* Chuyển chế độ / Quên mật khẩu */}
        <div className="extra-buttons">
          <button
            className="signup-btn"
            onClick={() => setIsSignUpMode(!isSignUpMode)}
          >
            {isSignUpMode ? 'Return to Sign In' : 'Register'}
          </button>

          {!isSignUpMode && (
            <button className="forget-btn">Forgot Password?</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
