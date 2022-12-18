import React from "react";
import "App.css";
import Sort from "sort";
import StatePractice from "useState";
// import TreeApp from "tree-node-app";

function App() {
  // const [replyBox, setShowReplyBox] = React.useState("hehe");

  // const handleClick = () => {
  //   setShowReplyBox((v) => (v === "hehe" ? "" : "hehe"));
  // };

  // console.log(replyBox);
  return (
    <div className="bg-slate-600" style={{ height: "100vh" }}>
      {/* <Sort /> */}
      <StatePractice />
      {/* <TreeApp /> */}
      {/* <button onClick={handleClick}> test</button> */}
    </div>
  );
}

export default App;
