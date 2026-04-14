"use client"

import React, { useState } from "react";
// static data
const accordionData = [
  { id: 1, title: "HTML", content: "Structure of a website" },
  { id: 2, title: "CSS", content: "Styling of a website" },
  { id: 3, title: "JavaScript", content: "Functional behaviour of a website" }
];
export default function MyAccordion2(){
    const [openItemsIds, setOpenItems] = useState([]);

    const handleOpenStateToggleFunction =(id)=>{
        if(openItemsIds.includes(id)){
            setOpenItems(openItemsIds.filter((key) => id !== key));
        }else{
            setOpenItems([...openItemsIds, id]);
        }
    }
    return(
        <div>
           { accordionData.map((item,index)=>{
                return (
                  <div key={index}>
                    <p onClick={() => handleOpenStateToggleFunction(item.id)}>
                      <button>
                        {index + 1 + ". "}
                        {item.title + " ?"}
                      </button>
                    </p>
                    {openItemsIds.includes(item.id) && (
                      <div>{"Used for " + item.content}</div>
                    )}
                  </div>
                );
             }) 
           }
        </div>
    )

};