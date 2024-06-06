import { CardData } from "./data";

export const paginate = (items : CardData[], pageNumber : number, pageSize : number) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return items.slice(startIndex, startIndex + pageSize);
   };