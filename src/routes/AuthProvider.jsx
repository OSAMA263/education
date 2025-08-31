// /* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  // const {role,name}=useLogin()

  return <AuthContext.Provider>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
