import * as React from 'react';
import Button from '../Components/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "../styles/login.css"
import { Link } from 'react-router-dom';
import axios from 'axios';
import { LoginUsers } from '../redux/user/UserSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks/Hooks';




// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

// const dispatch = useAppDispatch


// const user = useAppSelector(state => state.user)
// const dispatch = useAppDispatch()
// React.useEffect(() => {
//     dispatch(loginUsers(user))
// }, [])

type loginprops = {
    username: string
    password: string
    handleClick: (event: React.FormEvent<HTMLElement>) => void
}

export default function SignIn() {
    const user = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()
    const [email, setemail] = React.useState<String>('')
    const [password, setpassword] = React.useState<String>('')

    const signdetails = {
        email, password
    }
    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        dispatch(LoginUsers(signdetails))
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            {/* <Container component="main" maxWidth="xs"> */}
            <div className='login-containers'>
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 5,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    {/* login page */}
                    <div className=''>
                        <h1 className='header1'>Login into your account</h1>
                        <h3>Welcome back! Please enter your email address</h3>
                    </div>
                    <Box component="form" noValidate sx={{ mt: 0 }}>
                        <TextField
                            margin="normal"
                            // required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setemail(e.target.value)}
                        // autoComplete="email"
                        // autoFocus
                        />
                        <TextField
                            margin="normal"
                            // required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setpassword(e.target.value)}
                        // autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <button className="btnWraps" onClick={handleSubmit}>Login</button>
                        <div className='signcon'>
                            <p>
                                <Link to='/'>Forgot Password</Link>
                            </p>
                            <p><Link className='signup-link' to="/signup">Don't have an account?Signup</Link> </p>
                        </div>
                    </Box>
                </Box>
            </div>
            {/* </Container> */}
        </ThemeProvider>
    );
}