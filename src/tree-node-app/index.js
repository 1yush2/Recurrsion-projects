import React from "react";
import Tree from "./Tree";
import { treeData } from "./treedata";

const index = () => {
  return (
    <div className="bg-gray-400 h-screen">
      <h1 className="text-center text-3xl text-">Document Viewer</h1>
      <Tree data={treeData} />
    </div>
  );
};

export default index;
