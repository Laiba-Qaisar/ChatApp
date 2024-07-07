import React, { useEffect, useState } from "react";
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
      marginBottom: "20px",
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
  const [isMessageEmpty, setIsMessageEmpty] = useState(false);
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) {
      setIsMessageEmpty(true);
      return;
    }
    await sendMessage(message);
    setMessage("");
  };

  useEffect(() => {
    setTimeout(function () {
      setIsMessageEmpty(false);
    }, 2000);
  }, [handleSubmit]);

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
          helperText={isMessageEmpty ? "Please enter a message" : ""}
          error={isMessageEmpty && message.length === 0}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
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
