import { useGetUser } from "@/hooks/useUser";
import ErrorPage from "@/pages/ErrorPage";
import LoaderPage from "@/pages/LoaderPage";
import { getToken } from "@/utils/utils";
import { createContext, useContext } from "react";
import { Navigate } from "react-router-dom";

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
