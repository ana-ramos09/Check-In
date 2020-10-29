import React from "react";
import "./style.css";

const Task = (props) => (
  <div className="task-container">
    <div className="checklist-container">
      <input className="check" type="checkbox" value={props.done}></input>
      <input
        className="task"
        type="text"
        value={props.value}
        onChange={(e) =>
          props.onUpdate(props.index, props.done, e.target.value)
        }
      ></input>
    </div>
    <div className="button-container-task">
      <button
        title="Delete this task"
        onClick={() => props.onDelete(props.index)}
      ></button>
    </div>
  </div>
);

export default Task;
