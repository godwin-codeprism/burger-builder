import React from "react";

import css from "./Postbox.css";
const postbox = props => {
  const data = {
    title: "",
    body: "",
    author: ""
  };
  const changeHandler = (event, field) => {
    data[field] = event.target.value;
  };
  return (
    <div className={css.postbox}>
      <div className={css.group}>
        <input
          type="text"
          required
          onChange={e => {
            changeHandler(e, "title");
          }}
        />
        <span className={css.highlight} />
        <span className={css.bar} />
        <label>Title</label>
      </div>
      <div className={css.group}>
        <input
          type="text"
          required
          onChange={e => {
            changeHandler(e, "body");
          }}
        />
        <span className={css.highlight} />
        <span className={css.bar} />
        <label>Body</label>
      </div>
      <div className={css.group}>
        <input
          type="text"
          required
          onChange={e => {
            changeHandler(e, "author");
          }}
        />
        <span className={css.highlight} />
        <span className={css.bar} />
        <label>Author</label>
      </div>
      <div className={css.group}>
        <button
          className={css.submit}
          onClick={() => {
            props.submitPost(data);
          }}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default postbox;
