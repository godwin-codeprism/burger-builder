import React from "react";

import css from "./Postcard.css";
const postcard = props => {
    return(
        <div className={css.postcard}>
            <h4>{props.title}</h4>
            <small>{props.body}</small>
            <blockquote>- {props.author}</blockquote>
        </div>
    );
};

export default postcard;