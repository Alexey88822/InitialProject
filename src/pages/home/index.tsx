import React, { FC, useState } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  label: {
    fontSize: "20px",
    color: "red"
  }
}, {name: "Home"});

interface Props {
    label: string;
}

const Home: FC<Props> = ({ label }) => {
    const [country, setCountry] = useState<string>('United States of America');

    const classes = useStyles();
    return(
        <div>
            <span className={classes.label}>{label}</span>
            <span>Country: {country}</span>
            <button className="buttonCase" onClick={() => setCountry("JEST")}>Change country</button>
        </div>
    )
}

export default Home;