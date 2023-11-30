import { createContext, useContext, useState } from 'react';
import { getUserDetails } from "../controller/user.controller";

const AuthContext = createContext({
  auth: false,
  setAuth: () => {},
  userId: "null",
  setUserId: () => {},
  fetchUserDetails: () => Promise.resolve(), // Placeholder function
});

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(!!sessionStorage.getItem("x-access-token"));
  const [userId, setUserId] = useState(sessionStorage.getItem("userId") !== null ? sessionStorage.getItem("userId") : null);
  const fetchUserDetails = async () => {
    try {
      console.log("Inside fetch user details: ")
      console.log("userId ", userId)
      let data = await getUserDetails(userId);
      console.log("data ", data)

      return data; 
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ 
      auth, setAuth, userId, setUserId, fetchUserDetails}}>
      {children}
    </AuthContext.Provider>
  );
};



export const useAuth = () => useContext(AuthContext);
export default AuthProvider;

