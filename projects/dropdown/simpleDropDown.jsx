"use client";
import React, { useState } from "react";
// import DropDown from "@/projects/dropdown/test";

// const data = [
//   { id: "none", arr: ["nothing is selected"] },
//   { id: "1", arr: [10, 2, 3, 4] },
//   { id: "2", arr: [20, 4, 6, 8] },
//   { id: "3", arr: [30, 6, 9, 12] },
//   { id: "4", arr: [40, 8, 12, 16] },
// ];

const data = {
  option_01: [10, 20, 30],
  option_02: [40, 50, 60],
  option_03: [70, 80, 90],
};

const SimpleNestedDropDown = () => {
  const [selectedOption, setSelectedOption] = useState("none");

  const [selectLayer02_value, setSelectLayer02Value] = useState("");
  function handlefirstLayerSelect(e) {
    setSelectedOption(e.target.value);
    // reset second layer value
    setSelectLayer02Value("");
    // console.log(data["option_03"]);
  }

  const handleSelect02 = (e) => {
    setSelectLayer02Value(e.target.value);
    console.log(selectLayer02_value)
  };

  // adding ? after data[selectedOption]? // is safe as it checks whether the value is not undefined/(falsy)

  return (
    <>
      {console.log(
        "---------------",
        console.log(selectLayer02_value),
        "-----------------------",
        selectedOption,
      )}
      <h2>DropDown</h2>
      <p> "Hi,we are inside first wrapper div!"</p>
      <div>
        <select value={selectedOption} onChange={handlefirstLayerSelect}>
          <option value={"none"}>{"none"}</option>
          <option value={"option_01"}>{"one"}</option>
          <option value={"option_02"}>{"two"}</option>
          <option value={"option_03"}>{"three"}</option>
        </select>
        {selectedOption !== "none" ? (
          <select value={selectLayer02_value} onChange={handleSelect02}>
            <option value="">default: select value</option>
            {data[selectedOption]?.map((arrItem, i) => {
              return <option key={i} value={arrItem}>{arrItem}</option>;
            })}
          </select>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default SimpleNestedDropDown;

{
  /* <div>
  <select value={selectedOption} onChange={handlefirstLayerSelect}>
    {" "}
    // outer select
    {data.map((item) => {
      return (
        <option key={item.id} value={item}>
          Option :-{" "}
          <select>
            <option value="">{showSecondLayerOption()}</option>
          </select>
          {"inside first layer of select with option : " + item.id}
        </option>
      );
    })}
  </select>
</div>; */
}

// second approach

{
  /* <div>
  {data.map((item) => {
    return (
      <div key={item.id}>
        <select
          value={selectedOption}
          onChange={() => handlefirstLayerSelect(item.id)}
        >
          <option>{item.id}</option>
        </select>
        <div>Selected Div:{showSecondLayerOption(item.id, item.arr)}</div>
      </div>
    );
  })}
</div>; */
}
