import React from "react";
import "../styles/ButtonsNav.scss";

function ButtonsNav({pageNum, changePage}) {
    return (
        <div className="ButtonsNav">
            <button onClick={() => changePage(-1)} disabled={pageNum <= 1}>Back</button>
            <button onClick={() => changePage(1)}>Next</button>
        </div>
    );
}

export default ButtonsNav;