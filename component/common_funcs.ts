import { CiItem, CiItemList } from "../interfaces/interface";

export function ciItemConverter(jsonData: any[]): CiItemList {
  let CiItemResult: CiItemList = { comments: "hello world,", ciItems: [] };

  CiItemResult.ciItems = jsonData.map((item) => {
    let temp_Item: CiItem = {
      author: item.author,
      id: item.id + 1000,
      paragraphs: item.paragraphs,
      title: item.rhythmic,
    };

    return temp_Item;
  });

  return CiItemResult;
}
