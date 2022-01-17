import obj from "./Paginator.module.css";
import React, {useState} from "react";

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    const [portionNumber, setPortionNumber] = useState(1);

    let Pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        Pages.push(i);
    }

    const portionPageSize = Math.ceil(pagesCount / portionSize);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={obj.pages}>
            {portionNumber > 1
                && <svg className={obj.leftArrow}
                        onClick={() => { setPortionNumber(portionNumber - 1) }}
                        width="11" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 10 11 0v20L0 10Z" fill="#8500BA"/>
            </svg>}
            {Pages.filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return (
                        <span className={ currentPage === p ? obj.selectedPage : obj.pageNumber }
                              key={p}
                              onClick={() => {
                                  onPageChanged(p)
                              }}>
                            {p}
                        </span>
                    )
            })}
            {portionPageSize > portionNumber
                && <svg className={obj.rightArrow}
                        onClick={() => { setPortionNumber(portionNumber + 1) }}
                        width="11" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 10 0 20V0l11 10Z" fill="#8500BA"/>
            </svg>}
            <div className={obj.separator}/>
        </div>
    );
}


export default Paginator;