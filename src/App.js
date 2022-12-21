import React from "react";
import "App.css";
// import Sort from "sort";
// import StatePractice from "useState";
// import TreeApp from "tree-node-app";
import Form from "./hookFormPractice";

function App() {
  // const [replyBox, setShowReplyBox] = React.useState("hehe");

  // const handleClick = () => {
  //   setShowReplyBox((v) => (v === "hehe" ? "" : "hehe"));
  // };

  // console.log(replyBox);
  return (
    <div
      style={{
        height: "100vh",
        // background: "#de9d41"
        // background: "#212123",
      }}
      className="bg-gray-200"
    >
      {/* <Sort /> */}
      {/* <StatePractice /> */}
      {/* <TreeApp /> */}
      {/* <button onClick={handleClick}> test</button> */}
      <Form />
    </div>
  );
}

export default App;
