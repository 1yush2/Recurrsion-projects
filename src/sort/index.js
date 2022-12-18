import React from "react";

const Sort = () => {
  const [text, setText] = React.useState("");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [data, setData] = React.useState([]);

  async function getData() {
    const res = await fetch("https://randomuser.me/api/?results=20");
    const data = await res.json();
    setData(data.results);
    console.log(data);
  }

  const filteredData = () => {
    return data.filter(
      (item) =>
        item.name.title.toLowerCase().includes(text.toLowerCase()) ||
        item.name.first.toLowerCase().includes(text.toLowerCase()) ||
        item.name.last.toLowerCase().includes(text.toLowerCase())
    );
  };

  return (
    <div>
      <h1 className="text-5xl text-center">Sorting</h1>
      <div className="flex flex-col gap-2">
        <button className="bg-blue-300" onClick={getData}>
          Get data
        </button>

        <input
          placeholder="Search"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      {!!Object.keys(data).length &&
        filteredData()
          .slice(0, rowsPerPage)
          .map((person, index) => (
            <h1 key={index}>
              {`NAME: ${person.name.title} ${person.name.first} ${person.name.last}`}
            </h1>
          ))}

      <select
        value={rowsPerPage}
        onChange={(e) => setRowsPerPage(e.target.value)}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
      </select>
    </div>
  );
};

export default Sort;
