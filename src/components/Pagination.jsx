import { usePaginationCard } from "../hooks/usePagination";
import '../style/pagination.scss';

const Pagination = ({page,changePage,totalCount,text}) => {

    let pagesArray = usePaginationCard(totalCount,page)
    console.log(pagesArray)

    return (
        <div className='page'>
            {pagesArray.length <= 1000 ? pagesArray.map(p =>
                <span 
                    key={p}
                    onClick={() => changePage(text,p)} 
                    className={page === p ? 'page__item page__item_active' : 'page__item'}>
                        {p}
                </span>) : <h2>Слишком много страниц для отображения</h2>
            } 
        </div>
    )
}

export default Pagination;