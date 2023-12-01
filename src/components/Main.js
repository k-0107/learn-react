import React from "react";
import Button from "@mui/material/Button";
import Icon from "./images/mainvisual.jpg";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }
  render() {
    return (
      <div className="main">
        <div>
          <img className="mainimg" src={Icon} />
        </div>
        <div className="count">
          <h1>数字カウンター</h1>
          <h2>{this.state.count}</h2>
          <Button
            variant="contained"
            onClick={() => {
              this.handleClick();
            }}
          >
            +
          </Button>
        </div>
      </div>
    );
  }
}

export default Main;
