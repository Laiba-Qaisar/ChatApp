import React from 'react';
import AppSidebar from '../Components/Sidebar';
import MessageBox from '../Components/messages/messageBox';
import { makeStyles, ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

// Theme configuration
const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#f44336',
    },
  },
});

// Styles for ChatScreen
const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    backgroundColor: '#f0f0f0', // Add a background color for better contrast
  },
  header: {
    height: '10vh',
    backgroundColor: '#c2e2f0', // Adjust header background color
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    display: 'flex',
    height: '80vh',
    overflow: 'hidden', // Prevent content overflow
  },
  footer: {
    height: '10vh',
    backgroundColor: '#c2e2f0', // Adjust footer background color
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sidebar: {
    width: '25%', // Sidebar takes 1/4 of the screen
    height: '100%', // Ensure the sidebar takes up the full height of the content area
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRight: '1px solid #ddd', // Adding a border to separate sidebar and message box
  },
  messageBox: {
    flex: 1, // MessageBox takes the remaining space
    height: '100%', // Ensure the message box takes up the full height of the content area
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <div className={classes.header}>
          <h1>Chat Application</h1>
        </div>
        <div className={classes.content}>
          <div className={classes.sidebar}>
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
