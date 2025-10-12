import { useGetUser } from "@/hooks/useUser";
import { createContext, useContext } from "react";

const UserContext = createContext();

export default function UserProvider({ children }) {
  const { data: profile, isLoading, error } = useGetUser();

  return (
    <UserContext.Provider value={{ profile, isLoading, error }}>
      {children}
    </UserContext.Provider>
  );
}

export const useAuthData = () => useContext(UserContext);
