interface PagesState {
  allIds: string[];
  byIds: PagebyId;
}

interface PagebyId {
  [key: string]: IPage;
}

interface IPage {
  id: string;
  title: string;
  content: string[];
}

interface ContentsState {
  allIds: string[];
  byIds: ContentbyId;
}

interface ContentbyId {
  [key: string]: IContent;
}

interface IContent {
  id: string;
  pageId: string;
  content: string;
}

export type {
  IPage,
  IContent,
  PagebyId,
  ContentbyId,
  PagesState,
  ContentsState,
};
