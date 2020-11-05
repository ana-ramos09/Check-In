import React from "react";
import "./style.css";
import { createList } from "../../firebaseFuncs.js";

const AddList = (props) => {
  const inputNameHandler = (e) => {
    props.setListName(e.target.value);
  };

  const inputLocationHandler = (e) => {
    props.setListlocation(e.target.value);
  };

  const callFunctions = () => {
    callCreateList();
    props.updateLists();

  }

  const callCreateList = () => {
    createList(props.listName, props.listLocation);
  };

  return (
    <div className="new-list-container">
      <p>Create a New List</p>
      <div className="create-list-container">
        <div className="new-list">
          <input
            className="new-list-name"
            onChange={inputNameHandler}
            placeholder="Name"
          ></input>
          <input
            className="new-list-location"
            onChange={inputLocationHandler}
            placeholder="City"
          ></input>
        </div>
        <div className="button-container">
          <button onClick={callFunctions} title="Create a New List"></button>
        </div>
      </div>
    </div>
  );
};

export default AddList;
