import React, { useState } from "react";

const StatePractice = () => {
  const [data, setData] = useState({
    oldPass: false,
    pass: false,
    newPass: false,
  });

  // const newData = Object.keys(data);
  // const [oldPass] = newData;
  // console.log(oldPass);

  return (
    <div>
      <div>
        <input
          name="oldPass"
          type={data.oldPass ? "password" : "text"}
          // value={data.oldPass}
        />

        <button onClick={(e) => setData({ ...data, oldPass: !data.oldPass })}>
          visibility
        </button>
      </div>

      <input
        placeholder="lastName"
        name="address"
        onChange={(e) =>
          console.log({ ...data, [e.target.name]: e.target.value })
        }
      />
    </div>
  );
};

export default StatePractice;
