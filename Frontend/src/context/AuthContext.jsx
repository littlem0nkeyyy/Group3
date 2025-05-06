import React, { createContext, useState, useEffect} from 'react';
import {jwtDecode} from 'jwt-decode';
const AuthContext = createContext();

export const AuthProvider =({children}) =>{
    const [user,setUser] = useState(null)

    useEffect(()=>{
        const accessTokenRes = localStorage.getItem('accessTokenRes');
        if(accessTokenRes) {try {
            const decodeJWTAc = jwtDecode(accessTokenRes);
            setUser(decodeJWTAc);
        } catch (error) {
            console.log("token không hợp lệ",error)
        }
    }
    },[])

    const login = (accessTokenRes) => {
        localStorage.setItem('accessTokenRes', accessTokenRes); // Lưu token vào localStorage
        const decodedUser = jwtDecode(accessTokenRes);
        setUser(decodedUser);
        localStorage.setItem('email',decodedUser.sub);
        localStorage.setItem('role',decodedUser.role);
      };
      
      const logout = () => {
        localStorage.removeItem('accessTokenRes'); // Xóa token khi đăng xuất
        localStorage.removeItem('refreshTokenRes');
        setUser(null);
      };

      return (
        <AuthContext.Provider value ={{user, login, logout}}>
        {children}
        </AuthContext.Provider>
    );
}

export default AuthContext