import React from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Checkbox, CircularProgress } from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { Link } from "react-router-dom";
import { useState } from 'react';
import useSignup from "../hooks/useSignup";

const Signup = () => {
    const paperStyle = { padding: '30px 20px', width: 500, margin: "20px auto",align:"center" };
    const headerStyle = { margin: 0 };
    const avatarStyle = { backgroundColor: '#1bbd7e' };
    const marginTop = { marginTop: 5 };
 const [inputs,setInputs]=useState({
    
		fullName: "",
		username: "",
        email: "",
		password: "",
		confirmPassword: "",
		gender: "",
 
 });

const { loading, signup } = useSignup();
const handleSubmit = async (e) => {
    console.log(inputs)
    e.preventDefault();
    await signup(inputs);
};
    return (
        <Grid container justifyContent="center" >
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account!</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='Name' placeholder="Enter your name" margin="normal" 
                    value={inputs.fullName}
                    onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}/>
                    <TextField fullWidth label='Email' placeholder="Enter your email" margin="normal"
                     
                     value={inputs.email}
                    onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                     
                     />
                    <TextField fullWidth label='Username' placeholder="Enter your username" margin="normal"
                    value={inputs.username}
                    onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                    />
                   <FormControl component="fieldset" style={marginTop} margin="normal">
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup
                            aria-label="gender"
                            name="gender"
                            row
                            value={inputs.gender}
                            onChange={(e) => setInputs({ ...inputs, gender: e.target.value })}
                        
                        
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>
                    
                    <TextField fullWidth label='Password' placeholder="Enter your password" type="password" margin="normal" 
                    
                    value={inputs.password}
                    onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                    />
                    <TextField fullWidth label='Confirm Password' placeholder="Confirm your password" type="password" margin="normal" 
                    
                    value={inputs.confirmPassword}
                    onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                    />
                    {/* <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                        margin="normal"
                    /> */}
                  
                  <Typography variant='body2'  style={{ margin: '8px'}}>
                    Already have an account? 
                    <Link to="/login" style={{  marginLeft: '5px', textDecoration: 'none', color: '#1bbd7e', fontWeight: 'bold' }}>
                        Sign in here
                    </Link>
                </Typography>
                    <Button type='submit' variant='contained' color='primary' fullWidth  onClick={handleSubmit} disabled={loading} >
                   
							{loading ?   <CircularProgress/>: "Sign Up"}
                            </Button>
                </form>
            </Paper>
        </Grid>
    );
}

export default Signup;




 