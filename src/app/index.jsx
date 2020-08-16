import { Route, Switch } from "react-router-dom";

import React from 'react';
import getRoutes from "./routes"

export default (props) => {

  return <div>
        <Switch>
        {
            getRoutes(props.topics).map(route => {
                return <Route {...route} />;
                })
        }
        </Switch>
        
      </div>;
};