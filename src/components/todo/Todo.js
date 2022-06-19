import { MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";
import SelfContainer from "../selfContainer/SelfContainer";
import FiberManualRecordTwoToneIcon from "@mui/icons-material/FiberManualRecordTwoTone";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Todo.css";
import { style,Priority } from "./module";


const Todo = () => {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const [duplicateText, setDuplicateText] = useState(false);
  const [selectPri, setSelectPri] = useState("Low");
  const [todos, setTodo] = useState([
    {
      id: 1,
      todo: "Policy-Bazaar",
      date: "Jun 18, 2022",
      priority: "Low",
      priorityNo: 0,
      time: "12:12:12",
      color: [{ color: "green" }],
    },
  ]);
  const [todoInprogress, setTodoInProgress] = useState([]);
  const [todoCompleted, setTodoCompleted] = useState([]);

  const handleClose = () => setOpen(false);

  const formSubmitHandler = (event) => {
    event.preventDefault();
  };

  const submitHandler = (event) => {
    let dupliate = false;
    setText(event.target.value);

    let temp = [...todos, ...todoInprogress, ...todoCompleted];
    temp.filter((item) => {
      if (item.todo === text) {
        dupliate = true;
        setDuplicateText(true);
      }
    });

    if (!dupliate && text) {
      let copy = [...todos];
      let copy0bj = {
        id: Math.floor(Math.random() * 20000),
        todo: text,
        //   date: new Date().toLocaleDateString(),
        date: new Date().toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
        time: new Date().toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }),
        priorityNo:
          selectPri === "Low"
            ? 0
            : selectPri === "Medium"
            ? 1
            : selectPri === "High"
            ? 2
            : 3,
        priority: selectPri,
        color: Priority.filter((item) => item.value === selectPri),
      };
      copy.push(copy0bj);
      setTodo(copy);
    } else if (!text) {
      setDuplicateText(false);
      setOpen(true);
    } else {
      setOpen(true);
    }
  };

  const nextBtnHandler = (id) => {
    let inProgressArray = todos.filter((item) => item.id === id);
    let completedArray = todoInprogress.filter((item) => item.id === id);
    if (completedArray[0]?.status === 1) {
      setTodoCompleted(completedArray.concat(todoCompleted));
      setTodoInProgress(todoInprogress.filter((item) => item.id !== id));
    } else {
      inProgressArray[0].status = 1;
      setTodo(todos.filter((item) => item.id !== id));
      setTodoInProgress(inProgressArray.concat(todoInprogress));
    }
  };

  

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {duplicateText
              ? "Plz add the unique Task !"
              : "Please enter valid input !"}
          </Typography>
          <Box>
            <Button
              sx={{ position: "absolute", bottom: "5px", right: "10px" }}
              type="primary"
              onClick={() => {
                setOpen(false);
              }}
            >
              Ok
            </Button>
          </Box>
        </Box>
      </Modal>

      <div className="title">Todo</div>
      <div>
        <form onSubmit={formSubmitHandler}>
          <div className="searchInput">
            <div className="search">
              <TextField
                id="outlined-basic"
                label="AddTodo"
                variant="outlined"
                value={text}
                onChange={(event) => setText(event.target.value)}
              />
            </div>
            <div className="priSelect">
              <TextField
                id="outlined-select-currency"
                select
                label="Priority"
                value={selectPri}
                onChange={(event) => setSelectPri(event.target.value)}
                helperText="Please select your Priority"
              >
                {Priority.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    <div style={{ display: "flex" }}>
                      <FiberManualRecordTwoToneIcon
                        fontSize="small"
                        style={{ color: option.color }}
                      />
                      <div style={{ marginLeft: "10px" }}>{option.label}</div>
                    </div>
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className="searchBtn">
              <Button type="submit" variant="contained" onClick={submitHandler}>
                Add
              </Button>
            </div>
          </div>
        </form>
      </div>
      <SelfContainer
        todos={todos}
        setTodo={setTodo}
        nextBtnHandler={nextBtnHandler}
        todoInprogress={todoInprogress}
        setTodoInProgress={setTodoInProgress}
        todoCompleted={todoCompleted}
        setTodoCompleted={setTodoCompleted}
      />
    </>
  );
};

export default Todo;
