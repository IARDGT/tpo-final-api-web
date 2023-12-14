import { createContext, useContext, useState } from 'react';
import { getUserDetails } from "../controller/user.controller";

const AuthContext = createContext({
  auth: false,
  setAuth: () => {},
  token: "null",
  setToken: () => {},
  userId: "null",
  setUserId: () => {},
  fetchUserDetails: () => Promise.resolve(), // Placeholder function
});

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(!!sessionStorage.getItem("x-access-token"));
  const [token, setToken] = useState(sessionStorage.getItem("x-access-token") !== null ? sessionStorage.getItem("x-access-token") : null);
  const [userId, setUserId] = useState(sessionStorage.getItem("userId") !== null ? sessionStorage.getItem("userId") : null);
  const fetchUserDetails = async () => {
    try {
      console.log("Inside fetch user details: ")
      console.log("userId ", userId)
      let data = await getUserDetails(userId, token);
      console.log("data ", data)

      return data; 
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ 
      auth, setAuth, token, setToken, userId, setUserId, fetchUserDetails}}>
      {children}
    </AuthContext.Provider>
  );
};



export const useAuth = () => useContext(AuthContext);
export default AuthProvider;

