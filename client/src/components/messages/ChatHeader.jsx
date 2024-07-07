import React from "react";
import Avatar from "@mui/material/Avatar";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: theme.spacing(2),
    borderBottom: "1px solid #ccc",
    position: "sticky",
    top: 0,
    zIndex: 1,
  },
}));

const ChatHeader = ({ fullName, profilePic }) => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar
          src={profilePic}
          alt={fullName}
          style={{ width: "40px", height: "40px", marginRight: "10px" }}
        />
        <span style={{ fontSize: "2rem", fontWeight: "bold" }}>{fullName}</span>
      </div>
    </div>
  );
};

export default ChatHeader;
