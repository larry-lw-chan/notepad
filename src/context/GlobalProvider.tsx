import React from "react";
import { PagesState, ContentsState } from "../Interface";
import { getPages, getContents } from "../utils/dataParsing";

interface NoteProviderProps {
  children: React.ReactNode;
}

interface NoteContextType {
  isEditting: boolean;
  setIsEditting: React.Dispatch<React.SetStateAction<boolean>>;
  pages: PagesState;
  setPages: React.Dispatch<React.SetStateAction<PagesState>>;
  contents: ContentsState;
  setContents: React.Dispatch<React.SetStateAction<ContentsState>>;
  currentPage: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

const GlobalContext = React.createContext<NoteContextType>(
  {} as NoteContextType
);

function GlobalProvider({ children }: NoteProviderProps) {
  // Get Parsed Seed Data
  const pagesData = getPages();
  const contentsData = getContents();

  // Global - Editting state allow user to only edit one thing at a time
  const [isEditting, setIsEditting] = React.useState(false);

  // Global -
  const [pages, setPages] = React.useState(pagesData);
  const [contents, setContents] = React.useState(contentsData);
  const [currentPage, setCurrentPage] = React.useState(pagesData.allIds[0]);

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
    contents,
    setContents,
    currentPage,
    setCurrentPage,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}

export { GlobalProvider, GlobalContext };
