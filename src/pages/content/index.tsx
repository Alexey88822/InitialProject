import { FC } from "react";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  contentContainer: {
    width: "200px",
    height: "100px",
    background: "green",
  }
});

const Content: FC = () => {
    const classes = useStyles();

    return(
        <div className={classes.contentContainer}>
            Content
        </div>
    )
}

export default Content;