import obj from "./Paginator.module.css";
import React from "react";

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let Pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        Pages.push(i);
    }

    // page display, on my own
    if (currentPage <= 5 || currentPage === "...") {
        Pages.splice(10);
        Pages.push("...");
    } else {
        Pages.splice(0, currentPage - 5, "...");
        Pages.splice(10);
        // Pages.unshift("...");
        Pages.push("...");
    }
    //

    return (
        <div className={obj.pages}>
            {Pages.map((p) => {
                return (
                    <span className={currentPage === p && obj.selected}
                          onClick={() => {
                              onPageChanged(p)
                          }}>
                        {p + " "}
                    </span>
                )
            })}
            <div className={obj.separator}/>
        </div>
    );
}


export default Paginator;