import React from "react";
import { initialPages } from "../seed/seed";
import { IPage } from "../Interface";

interface NoteProviderProps {
  children: React.ReactNode;
}
interface NoteContextType {
  isEditting: boolean;
  setIsEditting: React.Dispatch<React.SetStateAction<boolean>>;
  pages: IPage[];
  setPages: React.Dispatch<React.SetStateAction<IPage[]>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const GlobalContext = React.createContext<NoteContextType>(
  {} as NoteContextType
);

function GlobalProvider({ children }: NoteProviderProps) {
  // Global - Editting state allow user to only edit one thing at a time
  const [isEditting, setIsEditting] = React.useState(false);

  // Global -
  const [pages, setPages] = React.useState(initialPages);
  const [currentPage, setCurrentPage] = React.useState(0);

  // Enter and escape keys disable the editing state
  React.useEffect(
    function () {
      document.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === "Escape") {
          setIsEditting(false);
        }
      });
    },
    [setIsEditting]
  );

  const value = {
    isEditting,
    setIsEditting,
    pages,
    setPages,
    currentPage,
    setCurrentPage,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}

export { GlobalProvider, GlobalContext };
