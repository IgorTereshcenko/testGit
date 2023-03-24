import { useMemo } from "react";

export const usePaginationCard = (totalCount, page) => {

    const paginationCard = useMemo(() => {
        console.log('пагинация')
        let pages = []
        for (let i = 0; i < totalCount; i++) {
            pages.push(i + 1)
        }

        return pages;
        
    },[totalCount, page])

    return paginationCard;
}