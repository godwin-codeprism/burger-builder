import React from 'react';

import classes from './Modal.css'
const modal = (props) => {
    console.log(classes);
    return (<div className={classes.Modal + " " + classes.show + " " + classes.fadeIn}>
        {props.children}
    </div>);
}

export default modal;