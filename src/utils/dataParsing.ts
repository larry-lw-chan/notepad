import { initialPages } from "./seed";
import { PagebyId, ContentbyId } from "../Interface";

const NUM_OF_GRID = 32;

// Todo - Empty Page and Content Generation based off default Grid
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
  const dataList = initialPages;
  console.log(createEmptyContent(2));

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

function getContents() {
  const dataList = initialPages;
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
  return { allIds, byIds };
}

export { NUM_OF_GRID, getPages, getContents };
