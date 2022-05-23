import React from "react";

function Task(props) {



    return (
        <div className={`todo-item ${props.taskItem.completed === true ? "complete" : ""} `}>
            <div className="checker"><span className=""><input type="checkbox" onClick={() => props.check(props.taskItem)} /></span></div>
            <span>{props.taskItem.task}</span>
            <a href="" className="float-right remove-todo-item"><i className="icon-close"></i></a>
        </div>
    )
}

export default Task;
