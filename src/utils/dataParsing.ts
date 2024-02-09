import { initialPages } from "./seed";
import { PagebyId, ContentbyId } from "../Interface";

const NUM_OF_GRID = 32;

function createEmptyPage(numOfPages: number) {
  const allIds: string[] = [];
  const byIds: PagebyId = {};

  for (let pIdx = 0; pIdx < numOfPages; pIdx++) {
    allIds.push(`page${pIdx}`);
    byIds[`page${pIdx}`] = {
      id: `page${pIdx}`,
      title: "",
      content: Array.from(
        { length: NUM_OF_GRID },
        (_, cIdx) => `content${NUM_OF_GRID * pIdx + cIdx}`
      ),
    };
  }

  return { allIds, byIds };
}

function createEmptyContent(numOfPages: number) {
  const allIds: string[] = [];
  const byIds: ContentbyId = {};

  for (let pIdx = 0; pIdx < numOfPages; pIdx++) {
    for (
      let cIdx = NUM_OF_GRID * pIdx;
      cIdx < NUM_OF_GRID * (pIdx + 1);
      cIdx++
    ) {
      allIds.push(`content${cIdx}`);
      byIds[`content${cIdx}`] = {
        id: `content${cIdx}`,
        pageId: `page${pIdx}`,
        content: "",
      };
    }
  }

  return { allIds, byIds };
}

function getPages() {
  // Get empty padded pages
  const pages = createEmptyPage(initialPages.length);
  // Populate page with seed data
  initialPages.forEach((page, i) => {
    pages.byIds[`page${i}`].title = page.title;
  });
  // Return populated pages
  return pages;
}

function getContents() {
  // Get empty padded content
  const contents = createEmptyContent(initialPages.length);
  // Populate contents with seed data
  initialPages.forEach((page, pIdx) => {
    page.content.forEach((content, cIdx) => {
      const cId = NUM_OF_GRID * pIdx + cIdx;
      contents.byIds[`content${cId}`].content = content;
    });
  });
  // Return populated contents
  return contents;
}

export { NUM_OF_GRID, getPages, getContents };
