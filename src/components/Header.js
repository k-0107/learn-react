import React from "react";
import Icon from "./images/logo.svg";
import Button from "@mui/material/Button";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="headerlogo">
            <a href="">
              <img src={Icon} />
            </a>
          </div>
          <nav>
            <ul className="menu">
              <li>
                <Button variant="outlined">About</Button>
              </li>
              <li>
                <Button variant="outlined">Bicycle</Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
