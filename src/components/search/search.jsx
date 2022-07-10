import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./search.css";
export default function Search(props) {
  return (
    <div className="search d-flex mb-1 p-2">
      <AiOutlineSearch/>
      <input onChange={(event)=>props.handleSearchNote(event.target.value)}ype='text'placeholder="search..."/>
    </div>
  );
}
