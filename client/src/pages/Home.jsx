import React from "react";
import AppSidebar from "../components/Sidebar";
import MessageBox from "../components/messages/MessageBox";
import { makeStyles, ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

// Theme configuration
const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: "#f44336",
    },
  },
});

// Styles for ChatScreen
const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "669bbc",
  },
  header: {
    height: "10vh",
    backgroundColor: "#c2e2f0",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    display: "flex",
    height: "80vh",
    overflow: "hidden",
  },
  footer: {
    height: "10vh",
    backgroundColor: "#c2e2f0",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  sidebar: {
    width: "25%",
    borderRight: "1px solid #ddd",
    backgroundColor: "#fff",
    padding: "20px",
    overflowY: "auto",
    "@media (max-width: 768px)": {
      display: "none", // Hide sidebar on smaller screens
    },
  },
  messageBox: {
    flex: 1,
    height: "100%",
    backgroundColor: "#fff",
    padding: "20px",
    paddingBottom: "0px",
    overflowY: "auto",
  },
}));
const Home = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <div className={classes.header}>
          <h1>Bit Chat</h1>
        </div>
        <div className={classes.content}>
          <div className={`${classes.sidebar} sidebar-container`}>
            <AppSidebar />
          </div>
          <div className={classes.messageBox}>
            <MessageBox />
          </div>
        </div>
        <div className={classes.footer}>
          <p>&copy; 2024 Chat Application</p>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Home;
