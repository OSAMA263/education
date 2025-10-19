import { createContext, useContext, useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const DashboardContext = createContext();

export default function DashboardProvider({ children }) {
  const { pathname } = useLocation();
  const [currPage, setCurrPage] = useState(1);
  const itemsPerPage = 12;

  const lastInd = currPage * itemsPerPage;
  const firstInd = lastInd - itemsPerPage;
  // table data shit
  const [selectedItem, setSelectedItem] = useState({});

  // reset pagiantion on navigation
  useLayoutEffect(() => {
    setCurrPage(1);
  }, [pathname]);

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
