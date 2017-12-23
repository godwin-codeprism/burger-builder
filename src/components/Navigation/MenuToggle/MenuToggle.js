import React from 'react';

import css from './MenuToggle.css';
const menuToggle = (props) => {
    return (
        <div className={css.MenuToggle} onClick={props.menuStateHandler}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default menuToggle;