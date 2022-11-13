import React from "react";
import { TreeNode } from "./TreeNode";

const Tree = ({ data = [] }) => {
  return (
    <ul className="flex flex-col gap-1 ml-2">
      {data.map((node) => {
        return <TreeNode node={node} key={node.key} />;
      })}
    </ul>
  );
};

export default Tree;
