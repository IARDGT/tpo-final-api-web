import { createContext, useContext, useState } from 'react';

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(!!sessionStorage.getItem("x"));
  const [user, setUser] = useState(!!sessionStorage.getItem("name"));

  return (
    <AuthContext.Provider value={{ auth, setAuth, user, setUser}}>
      {children}
    </AuthContext.Provider>
  );
};

const AuthContext = createContext({
  auth: false,
  setAuth: () => {},
  user: "null",
  setUser: () => {},
});

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;

