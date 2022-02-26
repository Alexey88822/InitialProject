import { FC } from "react";
import React from "react";
import { createUseStyles } from "react-jss";
import { FormattedMessage } from "react-intl";

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
            <FormattedMessage id="content-page"/>
        </div>
    )
}

export default Content;