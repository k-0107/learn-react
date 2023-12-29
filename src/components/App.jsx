import React from "react";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import Test from "./Test.jsx";
import Sample from "./Sample.jsx";
import FileTest from "./FileTest.jsx";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
        <Test />
        <Sample />
        <FileTest />
      </div>
    );
  }
}

export default App;
