import React, {FC} from 'react';
import Content from "pages/content";
import Home from "pages/home";

interface Props {}

export const AppRoutes: FC<Props> = ({}) => {
    return(
        <div>
          <Content/>
          <Home label='Home'/>
        </div>
    )
};