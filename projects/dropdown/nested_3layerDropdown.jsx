"use client";
import React, { useEffect, useState } from "react";
const data = {
  Electronics: {
    Mobile: ["iPhone", "Samsung"],
    Laptop: ["MacBook", "Dell", "Lenovo"],
  },
  Clothing: {
    Men: ["Shirt", "Pant"],
    Women: ["Dress", "Top"],
  },
};
const NestedDropDown_3Layer = () => {
  const [selectCategory_01Layer, setSelectCategory_01Layer] =
    useState("");
  const [subCategory_02Layer, setSubCategory_02Layer] = useState("");
  const [selected_ItemValue, set_selectItemValue] = useState("");

  function handle_01Layer(event) {
    setSelectCategory_01Layer(event.target.value);

    // parent change then reset child value: second and third layer//
    setSubCategory_02Layer("");
    set_selectItemValue("");

    // debugging
    console.log("eventObject: ", event);
    console.log("value:", event.target.value);
  }

  function handle_subCategoryLayer(eventSub) {
    setSubCategory_02Layer(eventSub.target.value);

    // subcategory change then reset third layer
    set_selectItemValue("");
  }

  function handle_ItemValue$finalLayer(valEvent) {
    set_selectItemValue(valEvent.target.value);
  }

  function handleSubmit(e) {
    // stop reload of page due to submit button click , which prevent React state from resetting/ disappearing ...
    // console.log("before reload...")
    e.preventDefault();

    if (
      !selectCategory_01Layer ||
      !subCategory_02Layer ||
      !selected_ItemValue
    ) {
      // if select is empty: logic
      console.log("Please select all fields...!");
      return;
    }

    const form_outputData_object = {
      // also known as payload

      category: selectCategory_01Layer,
      subCategory: subCategory_02Layer,
      item: selected_ItemValue,
    };
    console.log("Form Data: ", form_outputData_object);

    // reset form drop-down//
    setSelectCategory_01Layer("");
    setSubCategory_02Layer("");
    set_selectItemValue("");
  }

  // debugging
  useEffect(() => {
    console.log(
      "Final item value:",
      selected_ItemValue ? selected_ItemValue : "reset successfully :) ;",
    );
  }, [selected_ItemValue]);

  return (
    <>
      <div>
        <h2>
          <i>Nested:3Layer</i>
          DropDown:-
        </h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          {"First layer: "}
          <select value={selectCategory_01Layer} onChange={handle_01Layer}>
            {/* <option value="">default:None</option> */}
            {Object.keys(data)?.map((itemKey, index) => {
              return (
                <option key={index} value={itemKey}>
                  {itemKey}
                </option>
              );
            })}
          </select>
          {selectCategory_01Layer && " Second Layer:"}
          {selectCategory_01Layer && (
            <select
              value={subCategory_02Layer}
              onChange={handle_subCategoryLayer}
            >
              <option value="">subCategory:none</option>
              {Object.keys(data[selectCategory_01Layer])?.map(
                (sub_itemKey, i) => {
                  return (
                    <option key={i} value={sub_itemKey}>
                      {sub_itemKey}
                    </option>
                  );
                },
              )}
            </select>
          )}

          {subCategory_02Layer && " Third/(Final) Layer: value"}
          {subCategory_02Layer && (
            <select
              value={selected_ItemValue}
              onChange={handle_ItemValue$finalLayer}
            >
              <option value="">--select item--</option>
              {data[selectCategory_01Layer]?.[subCategory_02Layer]?.map(
                (item, i) => {
                  return (
                    <option key={i} value={item}>
                      {item}
                    </option>
                  );
                },
              )}
            </select>
          )}
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
        <h1>{selected_ItemValue ? selected_ItemValue : ""}</h1>
      </form>
    </>
  );
};

export default NestedDropDown_3Layer;
