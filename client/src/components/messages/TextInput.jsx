import React, { useState } from "react";
import { createStyles, makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import useSendMessage from "../../hooks/useSendMessage";

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

const useStyles = makeStyles((theme) =>
  createStyles({
    wrapForm: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      margin: `${theme.spacing(1)} auto`,
    },
    wrapText: {
      width: "100%",
    },
    button: {
      margin: theme.spacing(1),
      height: "56px",
    },
  })
);

export const TextInput = () => {
  const classes = useStyles(theme);
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <ThemeProvider theme={theme}>
      <form
        className={classes.wrapForm}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="standard-text"
          className={classes.wrapText}
          margin="normal"
          variant="outlined"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
          disabled={loading}
        >
          <SendIcon />
        </Button>
      </form>
    </ThemeProvider>
  );
};
