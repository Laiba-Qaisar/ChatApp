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
    backgroundColor: '669bbc', // Add a background color for better contrast
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
    // height: '100%', // Ensure the sidebar takes up the full height of the content area
    borderRight: '1px solid #ddd', // Adding a border to separate sidebar and message box
    backgroundColor: '#fff', // Set background color for sidebar
    padding: '20px', // Add padding inside the sidebar
    overflowY: 'auto', // Enable scrolling if content exceeds height
    '@media (max-width: 768px)': {
      display: 'none', // Hide sidebar on smaller screens
    },
  },
  messageBox: {
    flex: 1, // MessageBox takes the remaining space
    height: '100%', // Ensure the message box takes up the full height of the content area
    backgroundColor: '#fff', // Set background color for message box
    padding: '20px', // Add padding inside the message box
    paddingBottom: '0px',
    overflowY: 'auto', // Enable scrolling if content exceeds height
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
 