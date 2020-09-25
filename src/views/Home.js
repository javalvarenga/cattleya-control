import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Home.scss";
import Button from "../components/Button";
import LastClient from "../components/LastClient";
const Home = () => {
  return (
    <div className="Home">
      <h3>Clientes</h3>

      <div className="menu-options col-12">
        <Link to="/addclient">
          <Button texto="add Client" id="1"></Button>
        </Link>
        <Link to="/listado">
          <Button texto="Listado" id="2"></Button>
        </Link>
      </div>
      <div className="last-client col-12">
        <LastClient></LastClient>
      </div>
    </div>
  );
};

export default Home;
