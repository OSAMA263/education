import { useGetUser } from "@/hooks/useUser";
import { createContext, useContext } from "react";

const UserContext = createContext();

export default function UserProvider({ children }) {
  const { data, isLoading, isError, error } = useGetUser();
  const profile = data?.data;

  return (
    <UserContext.Provider value={{ profile, isLoading, error, isError }}>
      {children}
    </UserContext.Provider>
  );
}

export const useProfile = () => useContext(UserContext);
