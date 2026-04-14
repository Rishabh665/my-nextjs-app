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
const NestedDropDown = () => {
  const [dropdownRenderBtn, setDropdownRenderBtn] = useState(false);
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [itemValue, setItemValue] = useState("");

  function handleCategoryChange(event) {
    setCategory(event.target.value);

    // parent change then reset child value: second and third layer//
    setSubCategory("");
    setItemValue("");

    // debugging
    console.log("eventObject: ", event);
    console.log("value:", event.target.value);
  }

  function handleSubCategoryChange(eventSub) {
    setSubCategory(eventSub.target.value);

    // subcategory change then reset third layer
    setItemValue("");
  }

  function handleItemValueChange(valEvent) {
    setItemValue(valEvent.target.value);
  }

  function handleDropdownRenderBtnClick() {
    setDropdownRenderBtn((prev) => (prev ? false : true));
    // setCategory("");
    // setSubCategory("");
  }

  function handleSubmit(e) {
    // stop reload of page due to submit button click , which prevent React state from resetting/ disappearing ...
    // console.log("before reload...")
    e.preventDefault();

    if (!category || !subCategory || !itemValue) {
      // if select is empty: logic
      console.log("Please select all fields...!");
      window.alert("Please selection all fields...");
      return;
    }

    const formDataObject = {
      // also known as payload

      category: category,
      subCategory: subCategory,
      item: itemValue,
    };
    console.log("Form Data: ", formDataObject);
    // reset form drop-down//
    setCategory("");
    setSubCategory("");
    setItemValue("");
    setDropdownRenderBtn(false);
  }

  // debugging
  useEffect(() => {
    console.log(
      "Final item value:",
      itemValue ? itemValue : "reset successfully :) ;",
    );
  }, [itemValue]);

  return (
    <>
      <div>
        <h2>
          <i>Nested:3Layer</i>
          DropDown:-
        </h2>
      </div>
      <div className="wrapper-div">
        <div>
          <button onClick={handleDropdownRenderBtnClick}>
            {dropdownRenderBtn ? "click to hide" : " click here!"}
          </button>
          <p></p>
          {dropdownRenderBtn && "First Layer:"}
          {dropdownRenderBtn && (
            <select
              value={category}
              onChange={handleCategoryChange}
              style={{ width: category ? "fit-content" : "3%" }}
            >
              {<option hidden disabled value=""></option>}
              {Object.keys(data)?.map((itemKey, index) => {
                return (
                  <option key={index} value={itemKey}>
                    {itemKey}
                  </option>
                );
              })}
            </select>
          )}
          <div>
            {dropdownRenderBtn ? category && " Second Layer:" : ""}
            {dropdownRenderBtn
              ? category && (
                  <select
                    value={subCategory}
                    onChange={handleSubCategoryChange}
                    style={{ width: subCategory ? "fit-content" : "3%" }}
                  >
                    {Object.keys(data[category])?.map((subItemKey, i) => {
                      return (
                        <option key={i} value={subItemKey}>
                          {subItemKey}
                        </option>
                      );
                    })}
                    <option disabled hidden value=""></option>
                  </select>
                )
              : ""}
          </div>

          <div>
            {dropdownRenderBtn ? subCategory && " Third Layer:" : ""}

            {dropdownRenderBtn
              ? subCategory && (
                  <select
                    value={itemValue}
                    onChange={handleItemValueChange}
                    style={{ width: itemValue ? "fit-content" : "3%" }}
                  >
                    {data[category]?.[subCategory]?.map((item, i) => {
                      return (
                        <option key={i} value={item}>
                          {item}
                        </option>
                      );
                    })}
                    <option hidden disabled value=""></option>
                  </select>
                )
              : ""}
          </div>
        </div>
        <p></p>
        <form onSubmit={handleSubmit}>
          <button type="submit">Submit</button>
        </form>
        {itemValue && (
          <h1>
            <i>product</i>: {itemValue ? itemValue : ""}
          </h1>
        )}
      </div>
    </>
  );
};

export default NestedDropDown;


// enter + shift

// display :none DOM par kam kartega, ye css property hai;  
// hidden attribute html ka hai jo browser native ui handle karta hai <select> ke <option></option> mein</select> 
// visiblity : hidden, ye property hai css ;
// disabled attribute option ka hai

// fit-content and max-content dono hi yaha kaam kar rahen hai

// conditional rendering using {state1?state2 && (<> element </>) :  "" };