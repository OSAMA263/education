import { createContext, useContext, useState } from "react";

export const DashboardContext = createContext();

export default function DashboardProvider({ children }) {
  const [currPage, setCurrPage] = useState(1);
  const itemsPerPage = 12;

  const lastInd = currPage * itemsPerPage;
  const firstInd = lastInd - itemsPerPage;
  // table data shit
  const [selectedItem, setSelectedItem] = useState({});

  return (
    <DashboardContext.Provider
      value={{
        currPage,
        setCurrPage,
        lastInd,
        firstInd,
        selectedItem,
        setSelectedItem,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export const usePagination = () => useContext(DashboardContext);
