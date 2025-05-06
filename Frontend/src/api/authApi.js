import axiosInstance from "../api/axiosIterceptor";

// Đăng nhập
export const loginAPI = async (email, password) => {
  const response = await axiosInstance.post('/api/auth/login', {
    email,
    password,
  });


  const { accessTokenRes, refreshTokenRes } = response.data;
  localStorage.setItem('accessToken', accessTokenRes);
  localStorage.setItem('refreshToken', refreshTokenRes);

  return response.data;
};

// Đăng ký
export const registerAPI = async (email, password) => {
  const response = await axiosInstance.post('/api/auth/register', {
    email,
    password,
  });

  return response.data;
};
