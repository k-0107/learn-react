import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Test from "./Test";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
        <Test />
      </div>
    );
  }
}

export default App;
