import React from 'react';
import css from './NavigationItem.css'
const navigationItem = (props) => {
    return (
        <li className={css.NavigationItem}>
            <a href={props.link} className={props.active ? css.active : null}>{props.children}</a>
        </li>
    )
}

export default navigationItem;