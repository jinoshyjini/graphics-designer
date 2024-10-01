import React, { useState, useEffect, useRef } from 'react';
import { Nav, Navbar, Button, Modal, Overlay, Tooltip } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Assets/Css/Header.css';
import logo from "../Assets/Images/logo.png";
import PhoneIcon from '@mui/icons-material/Phone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { signInStatus, SignInError } from '../Redux/Actions/Design';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Designer from '../Assets/Images/jetly.jpg';

const validation = yup.object({
  username: yup.string().required("* Required"),
  password: yup.string().required("* Required").min(6, 'Password requires a minimum of 6 characters'),
})

function Header(props) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(validation)
  });
  const [activeLink, setActiveLink] = useState("home");
  const [showLog, setShowLog] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const target = useRef(null);

  const handleNavClick = (link) => {
    setActiveLink(link);
  };

  const onSubmit = (data) => {
    if (data?.username === 'jetly12' && data?.password === 'Myshyju@12') {
      props?.signInStatus(true);
      setShowLog(false);
    } else {
      props?.signInStatus(false);
      toast.error('Invalid Credential, please try again.');
      setShowLog(false)
    }
  };

  const onLogout = () => {
    alert("Do you want to logout?");
    props?.signInStatus(false);
    setShowTooltip(false);
    localStorage.setItem('status', false);
    setShowLog(false)
  };


  useEffect(() => {
    if (props?.isLogin === true) {
      localStorage.setItem('status', props?.isLogin);
      toast.success('Successfully Login!', {
        theme: "colored", position: "top-right", autoClose: 5000, hideProgressBar: false,
        closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined,
      });
    } else {
    }
  }, [props?.isLogin]);

  return (
    <>
      {!showLog && <ToastContainer />}
      <Navbar expand="md" className="header-bg">
        <div>
          <Navbar.Brand href="/graphics-designer">
            <img
              src={logo}
              alt="Graphic Designer - Jetly"
              className="logo"
            />
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="/graphics-designer"
                className={`header-text ${activeLink === 'home' ? 'active' : ''}`}
                onClick={() => handleNavClick('home')}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#about"
                className={`header-text-wt ${activeLink === 'about' ? 'active' : ''}`}
                onClick={() => handleNavClick('about')}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#resume"
                className={`header-text-wt ${activeLink === 'resume' ? 'active' : ''}`}
                onClick={() => handleNavClick('resume')}
              >
                Resume
              </Nav.Link>
              <Nav.Link
                href="/graphics-designer/portfolio"
                className={`header-text-wt ${activeLink === 'portfolio' ? 'active' : ''}`}
                onClick={() => handleNavClick('portfolio')}
              >
                Portfolio
              </Nav.Link>
              <div className="vertical-line"></div>
              <Nav.Link href="#" className='header-text'>
                <PhoneIcon className='header-icon' />+971 54 422 0855
              </Nav.Link>
            </Nav>
            <Navbar.Brand>
              {
                (localStorage.getItem('status') === 'true') ?
                  <img src={Designer} className='profile-dsgn' ref={target} onClick={() => setShowTooltip(!showTooltip)} />
                  : <AccountCircleIcon className='header-icon' onClick={() => setShowLog(true)} />
              }
              <Overlay target={target.current} show={showTooltip} placement="bottom" >
                {(props) => (
                  <Tooltip id="overlay-example" {...props} onClick={onLogout} className='cursor'>
                    logout
                  </Tooltip>
                )}
              </Overlay>
            </Navbar.Brand>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <Modal show={showLog} onHide={() => setShowLog(false)} centered>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            <label className="project-label mb-1">UserName</label>
            <TextField className="form-control input-login" autoComplete="off" name="username" type='text'
              {...register('username')} id="username" placeholder="UserName" />
            <div className="error-texts">
              {errors?.username?.message ? errors?.username?.message : props?.errorList?.username}
            </div>
            <label className="project-label mb-1">Password</label>
            <TextField
              name="password"
              type={showPassword ? 'text' : 'password'}
              {...register('password')}
              id="passwordfield"
              placeholder="Enter your password"
              className="form-control input-login"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <div className="error-texts">
              {errors?.password?.message ? errors?.password?.message : props?.errorList?.password}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" type='submit'>
              Submit
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
const mapStateToProps = ({ designData }) => {
  const { isLogin, isLoginerror } = designData;
  return { isLogin, isLoginerror };
};
export default connect(mapStateToProps, { signInStatus, SignInError })(Header);