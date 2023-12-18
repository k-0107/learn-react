import React from "react";
import Icon from "@mdi/react";
import { mdiHomeCircle } from "@mdi/js";
import { mdiInformation } from "@mdi/js";
import { mdiHumanCapacityIncrease } from "@mdi/js";

class Footer extends React.Component {
  render() {
    return (
      <div className="container">
        <ul className="footer-list">
          <li>
            <Icon path={mdiHomeCircle} size={1} />
            会社概要
          </li>
          <li>
            <Icon path={mdiHumanCapacityIncrease} size={1} />
            採用
          </li>
          <li>
            {" "}
            <Icon path={mdiInformation} size={1} />
            お問い合わせ
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;
