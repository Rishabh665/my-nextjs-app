import React from 'react'

const data = [{id:1,item:"phone"},{id:2,item:"laptop"},{id:3,item:"bike"}]
const BasicDropdown= () => {
  return (
    <div>
      {"--Select Year--"}
      <select name="" id="">
        <option>none</option>
        <option>1991</option>
        <option>1993</option>
        <option>1995</option>
        <option>1997</option>
        <option>1999</option>
      </select>
      <div>
        {"--Select any item--"}
        <select>
          <option>none</option>
          {data.map((obj) => {
            return <option key={obj.id}>{obj.item}</option>;
          })}
        </select>
      </div>
    </div>
  );
}

export default BasicDropdown;