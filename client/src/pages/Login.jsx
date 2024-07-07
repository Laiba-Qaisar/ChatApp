import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";
import { useState } from "react";
import useLogin from "../hooks/useLogin";
const Login = () => {
  const paperStyle = {
    padding: "30px 20px",
    width: 500,
    margin: "20px auto",
    align: "center",
  };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };
  return (
    <Grid container justifyContent="center">
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <h2 style={headerStyle}>Login</h2>
          <Typography variant="caption" gutterBottom>
            Login your account!!
          </Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Username"
            placeholder="Enter your username"
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <TextField
            fullWidth
            label="Password"
            placeholder="Enter your password"
            type="password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Typography variant="body2" style={{ margin: "8px" }}>
            Do not have an account?
            <Link
              to="/signup"
              style={{
                marginLeft: "5px",
                textDecoration: "none",
                color: "#1bbd7e",
                fontWeight: "bold",
              }}
            >
              Create your account !!
            </Link>
          </Typography>
          {/* <Button type='submit' variant='contained' color='primary' fullWidth>Login </Button> */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={loading}
          >
            {loading ? <CircularProgress /> : "Login"}
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Login;
