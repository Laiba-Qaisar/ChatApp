// import React from 'react'
// // import TextField from '@material-ui/core/TextField';
// import { createStyles, makeStyles } from "@mui/styles";
// // import SendIcon from '@material-ui/icons/Send';
// // import Button from '@material-ui/core/Button';


// const useStyles = makeStyles(() =>
//   createStyles({
//     wrapForm : {
//         display: "flex",
//         justifyContent: "center",
//         width: "95%",
//         margin: `${theme.spacing(0)} auto`
//     },
//     wrapText  : {
//         width: "100%"
//     },
//     button: {
//         //margin: theme.spacing(1),
//     },
//   })
// );


// export const TextInput = () => {
//     const classes = useStyles();
//     return (
//         <>
//             <form className={classes.wrapForm}  noValidate autoComplete="off">
//             <TextField
//                 id="standard-text"
//                 label="メッセージを入力"
//                 className={classes.wrapText}
//                 //margin="normal"
//             />
//             <Button variant="contained" color="primary" className={classes.button}>
//                 <SendIcon />
//             </Button>
//             </form>
//         </>
//     )
// }

// TextInput.jsx
import React from 'react';
import { createStyles, makeStyles } from "@mui/styles";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { createTheme, useTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

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

const useStyles = makeStyles((theme) =>
  createStyles({
    wrapForm: {
      display: "flex",
      alignItems: "center", // Align items vertically
      width: "95%",
      margin: `${theme.spacing(0)} auto`,
    },
    wrapText: {
      width: "100%",
    },
    button: {
      margin: theme.spacing(1),
      height: "56px", // Adjust the height to match the TextField height
 
    },
  })
);

export const TextInput = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <ThemeProvider theme={theme}>
      <form className={classes.wrapForm} noValidate autoComplete="off">
        <TextField
          id="standard-text"
          label="メッセージを入力"
          className={classes.wrapText}
          margin="normal"
          variant="outlined"
        />
        <Button variant="contained" color="primary" className={classes.button}>
          <SendIcon />
        </Button>
      </form>
    </ThemeProvider>
  );
};



