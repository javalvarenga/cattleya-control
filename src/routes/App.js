import React from "react";

import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "../views/Home";
import AddClient from "../views/AddClient";
import NotFound from "../views/NotFound";
import Layout from "../components/Layout";
import Listado from "../views/Listado";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/listado" component={Listado} />
          <Route exact path="/addclient" component={AddClient} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
export default App;
