import React, { FC } from "react";
import { createUseStyles } from "react-jss";
import { Image } from "antd";

import Logo from "assets/logo/lebrain_logo_without_background_1920.png";
import Navigation from "./Navigation";
import User from "./user";


const useStyles = createUseStyles({
    header: {
      display: "flex",
      alignContent: "center",
      justifyContent: "space-between",
      width: "auto",
      height: "78px",
      background: "#f0f2f5",
    },
    logo: {
        width: "300px",
    },
    user: {
        width: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
  });

interface Props {}

const Header: FC<Props> = () => {
    const classes = useStyles();

    return(
        <>
          <div className={classes.header}>
            <Image className={classes.logo} src={Logo} preview={false} />
            <User className={classes.user} />
          </div>
          <Navigation />
        </>
    )
}

export default Header;