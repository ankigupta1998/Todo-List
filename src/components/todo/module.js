const style = {
    position: "absolute",
    border: "2px solid yellow",
    borderRadius: "15px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    boxShadow: 24,
    p: 4,
    bgcolor: "background.paper",
  };
  const Priority = [
    {
      value: "Low",
      label: "Low",
      color: "green",
      priorityNo: 0,
    },
    {
      value: "Medium",
      label: "Med",
      color: "#8B8000",
      priorityNo: 1,
    },
    {
      value: "High",
      label: "High",
      color: "#FF8C00",
      priorityNo: 2,
    },
    {
      value: "Urgent",
      label: "Urg",
      color: "red",
      priorityNo: 3,
    },
  ];

  export {style,Priority};