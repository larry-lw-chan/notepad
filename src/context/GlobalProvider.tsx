import React from "react";
import { initialPages } from "../seed/seed";
import { IPage } from "../Interface";

interface NoteProviderProps {
  children: React.ReactNode;
}

interface PagebyId {
  [key: string]: { id: string; title: string; content: string[] };
}

interface ContentbyId {
  [key: string]: {
    id: string;
    pageId: string;
    content: string;
  };
}

interface PagesState {
  allIds: string[];
  byIds: PagebyId;
}

interface ContentsState {
  allIds: string[];
  byIds: ContentbyId;
}

interface NoteContextType {
  isEditting: boolean;
  setIsEditting: React.Dispatch<React.SetStateAction<boolean>>;
  pages: PagesState;
  setPages: React.Dispatch<React.SetStateAction<PagesState>>;
  contents: ContentsState;
  setContents: React.Dispatch<React.SetStateAction<ContentsState>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
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

function getPages(dataList: IPage[]) {
  const allIds: string[] = [];
  const byIds: PagebyId = {};

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

function getContents(dataList: IPage[]) {
  const allIds: string[] = [];
  const byIds: ContentbyId = {};

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
