import { useGetUser } from "@/hooks/useUser";
import { createContext, useContext } from "react";

const UserContext = createContext();

export default function UserProvider({ children }) {
  const { data, isLoading, isError, error } = useGetUser();

  return (
    <UserContext.Provider value={{ data, isLoading, error, isError }}>
      {children}
    </UserContext.Provider>
  );
}

export const useProfile = () => useContext(UserContext);
