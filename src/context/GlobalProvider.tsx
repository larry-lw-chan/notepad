import React from "react";
import { initialPages } from "../seed/seed";
import {
  IPage,
  PagebyId,
  ContentbyId,
  PagesState,
  ContentsState,
} from "../Interface";

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

export { GlobalProvider, GlobalContext, NUM_OF_GRID };

const NUM_OF_GRID = 32;

function getPages(dataList: IPage[]) {
  const allIds: string[] = [];
  const byIds: PagebyId = {};

  let cIdx = 0;
  dataList.forEach((data, i) => {
    let cLen = 0;
    allIds.push(`page${i}`);
    byIds[`page${i}`] = {
      id: `page${i}`,
      title: data.title,
      content: data.content.map((_, i) => {
        cIdx++;
        cLen++;
        return `content${i}`;
      }),
    };

    for (let j = cLen; j < NUM_OF_GRID; j++) {
      byIds[`page${i}`].content.push(`content${cIdx}`);
      cIdx++;
    }
  });

  return { byIds, allIds };
}

function getContents(dataList: IPage[]) {
  const allIds: string[] = [];
  const byIds: ContentbyId = {};

  let cIdx = 0;
  dataList.forEach((page, pIdx) => {
    let cLen = 0;
    page.content.forEach((con) => {
      allIds.push(`content${cIdx}`);
      byIds[`content${cIdx}`] = {
        id: `content${cIdx}`,
        pageId: `page${pIdx}`,
        content: con,
      };
      cIdx++;
      cLen++;
    });
    // Padding allIds and byIds here
    for (let i = cLen; i < NUM_OF_GRID; i++) {
      allIds.push(`content${cIdx}`);
      byIds[`content${cIdx}`] = {
        id: `content${cIdx}`,
        pageId: `page${pIdx}`,
        content: "",
      };
      cIdx++;
    }
  });
  // const content = { allIds, byIds };
  // console.log(content);
  return { allIds, byIds };
}
