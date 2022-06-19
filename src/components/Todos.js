import React, { useState } from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";
import "./Todos.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Todos = ({ todoArray, setArray, nextBtnHandler }) => {
  const [open, setOpen] = useState(false);
  const [testId, setTestId] = useState();
  const handleClose = () => setOpen(false);
  const deleteBtnHandler = (id) => {
    let filteredArray = todoArray.filter((item) => {
      return item.id !== id;
    });
    setArray(filteredArray);
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
            Are you sure, you want to delete ?
          </Typography>
          <Box>
            <Button type="danger" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button
              type="primary"
              onClick={() => {
                deleteBtnHandler(testId);
                setOpen(false);
              }}
            >
              Yes
            </Button>
          </Box>
        </Box>
      </Modal>

      <div className="todosContainer">
        {todoArray.map((item) => {
          return (
            <div
              key={item.id}
              className="singleTodoCon"
              style={{ borderTop: `3px solid ${item.color[0].color}` }}
            >
              <div className="todoTitle">
                <FiberManualRecordOutlinedIcon
                  style={{ color: item.color[0].color }}
                  fontSize="small"
                  className="svg"
                />
                <div style={{ width: "100%" }}> {item.todo} </div>
                <div
                  className="todoPriority"
                  style={{ color: item.color[0].color }}
                >
                  {item.priority}
                </div>
              </div>

              <div className="footer">
                <div className="dtCon">
                  <div className="todoDate">{item.date} </div>
                  <div className="todoDate todoTime">{item.time} </div>
                </div>
                <div className="test">
                  <div className="nextIconCon">
                    <ArrowForwardIosRoundedIcon
                      className="nextIcon"
                      onClick={() => nextBtnHandler(item.id)}
                    />
                  </div>
                  <div>
                    <IconButton
                      id="deleteBtnCon"
                      aria-label="delete"
                      // onClick={() => deleteBtnHandler(item.id)}
                      onClick={() => {
                        setTestId(item.id);
                        setOpen(true);
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Todos;
