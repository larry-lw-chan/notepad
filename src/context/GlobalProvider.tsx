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
  // Get Parsed Seed Data
  const pagesData = getPages(initialPages);
  const contentsData = getContents(initialPages);

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

interface pageKey {
  [key: string]: { id: string; title: string; content: string[] };
}

function getPages(dataList: IPage[]) {
  const allIds: string[] = [];
  const byIds: pageKey = {};

  dataList.forEach((data, i) => {
    allIds.push(`page${i}`);
    byIds[`page${i}`] = {
      id: `page${i}`,
      title: data.title,
      content: data.content.map((_, i) => `content${i}`),
    };
  });

  return { byIds, allIds };
}

interface getContentbyId {
  [key: string]: {
    id: string;
    pageId: string;
    content: string;
  };
}

function getContents(dataList: IPage[]) {
  const allIds: string[] = [];
  const byIds: getContentbyId = {};

  dataList.forEach((page, pIdx) => {
    page.content.forEach((con, cIdx) => {
      allIds.push(`content${cIdx}`);
      byIds[`content${cIdx}`] = {
        id: `content${cIdx}`,
        pageId: `page${pIdx}`,
        content: con,
      };
    });
  });

  return { allIds, byIds };
}
