import React, {useState} from 'react';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {signinToSite} from '../../actions/loginActions';
import { useToasts } from 'react-toast-notifications'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const  SignIn = (props)=> {
  const classes = useStyles();
const [username, setusername] = useState('');
const [password, setpassword] = useState('');
const { addToast } = useToasts();
const handleSubmitForm  =(e)=>{
  e.preventDefault();  
  if(username && password && username =='manoj.navale@objectedge.com' && password =='Objectedge$10'){
    props.signinToSite(username,password);
  }
  else{
    addToast('Invalid Username/Password', {
      appearance: 'error',
      autoDismiss: true,
    })
  }  
}

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit = {handleSubmitForm}>
          <TextField
            variant="outlined"
            margin="normal"
            required = {true}
            fullWidth
            id="email"
            label="Email Address"            
            name="email"
            autoComplete="email"
            autoFocus                      
            onChange = {event =>{ setusername(event.target.value)}}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required = {true}
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"            
            onChange = {event =>{ setpassword(event.target.value)}}
          />          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>          
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

// const mapStateToProps =(state)=>({
// status  : state.status
// });

const mapDispatchToProps = (dispatch)=>({
  signinToSite : (username, password)=>dispatch (signinToSite (username, password))
});

export default connect(null,mapDispatchToProps)(SignIn);
