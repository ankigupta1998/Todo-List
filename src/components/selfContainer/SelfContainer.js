import React from "react";
import Todos from "../Todos";
import "./SelfContainer.css";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
const SelfContainer = ({
  todos,
  setTodo,
  nextBtnHandler,
  todoInprogress,
  setTodoInProgress,
  todoCompleted,
  setTodoCompleted,
}) => {
  const sortBtnHandler = (event) => {
    if (event.currentTarget.id === "1") {
      let copied = [...todoInprogress];
      copied.sort(compareTodo);
      setTodoInProgress(copied);
      return;
    }

    if (event.currentTarget.id === "2") {
      let copied = [...todoCompleted];
      copied.sort(compareTodo);
      setTodoCompleted(copied);
      return;
    }

    if (event.currentTarget.id === "0") {
      let copied = [...todos];
      copied.sort(compareTodo);
      setTodo(copied);
      return;
    }

    function compareTodo(a, b) {
      const task1 = a.todo.toUpperCase();
      const task2 = b.todo.toUpperCase();
      let comparison = 0;
      if (task1 > task2) {
        comparison = 1;
      } else if (task1 < task2) {
        comparison = -1;
      }
      return comparison;
    }
  };

  const sortBtnHandlerPri = (event) => {
    if (event.currentTarget.id === "4") {
      let copied = [...todoInprogress];
      copied.sort(compareTodo);
      setTodoInProgress(copied);
      return;
    }

    if (event.currentTarget.id === "5") {
      let copied = [...todoCompleted];
      copied.sort(compareTodo);
      setTodoCompleted(copied);
      return;
    }

    if (event.currentTarget.id === "3") {
      let copied = [...todos];
      copied.sort(compareTodo);
      setTodo(copied);
      return;
    }
    function compareTodo(a, b) {
      const task1 = a.priorityNo;
      const task2 = b.priorityNo;
      let comparison = 0;
      if (task1 < task2) {
        comparison = 1;
      } else if (task1 > task2) {
        comparison = -1;
      }
      return comparison;
    }
  };

  return (
    <>
      <div className="container-wrapper">
        <div className="newTodo">
          <div style={{ textAlign: "center" }} className="titleCon">
            <div>To-Do</div>
            <div className="sortIcons">
              <div>
                <SortByAlphaIcon
                  className="icon"
                  id="0"
                  onClick={sortBtnHandler}
                />
              </div>
              <div>
                <PriorityHighIcon
                  className="icon"
                  id="3"
                  onClick={sortBtnHandlerPri}
                />
              </div>
            </div>
          </div>
          <div>
            <Todos
              todoArray={todos}
              setArray={setTodo}
              nextBtnHandler={nextBtnHandler}
            />
          </div>
        </div>

        <div className="inProgress">
          <div style={{ textAlign: "center" }} className=" titleCon">
            <div>In-progress</div>
            <div className="sortIcons">
              <div>
                <SortByAlphaIcon
                  className="icon"
                  id="1"
                  onClick={sortBtnHandler}
                />
              </div>
              <div>
                <PriorityHighIcon
                  className="icon"
                  id="4"
                  onClick={sortBtnHandlerPri}
                />
              </div>
            </div>
          </div>
          <div>
            {todoInprogress && (
              <Todos
                todoArray={todoInprogress}
                setArray={setTodoInProgress}
                nextBtnHandler={nextBtnHandler}
              />
            )}
          </div>
        </div>

        <div className="completed">
          <div style={{ textAlign: "center" }} className=" titleCon">
            <div>Completed</div>
            <div className="sortIcons">
              <div>
                <SortByAlphaIcon
                  className="icon"
                  id="2"
                  onClick={sortBtnHandler}
                />
              </div>
              <div>
                <PriorityHighIcon
                  className="icon"
                  id="5"
                  onClick={sortBtnHandlerPri}
                />
              </div>
            </div>
          </div>
          <div>
            {todoCompleted && (
              <Todos
                todoArray={todoCompleted}
                setArray={setTodoCompleted}
                nextBtnHandler={nextBtnHandler}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SelfContainer;
