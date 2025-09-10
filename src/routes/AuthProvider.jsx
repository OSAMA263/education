import { useGetUser } from "@/hooks/useUser";
import { createContext, useContext } from "react";

const UserContext = createContext();

export default function UserProvider({ children }) {
  const { data, isLoading, isError, error } = useGetUser();

  const userData = data?.data
    ? {
        _id: data.data._id,
        fullName: data.data.fullName,
        email: data.data.email,
        role: data.data.role,
        phoneNumber: data.data.phoneNumber,
        createdAt: data.data.createdAt,
        classLevel: data.data.classLevel,
      }
    : undefined;

  return (
    <UserContext.Provider value={{ userData, isLoading, error, isError }}>
      {children}
    </UserContext.Provider>
  );
}

export const useProfile = () => useContext(UserContext);
