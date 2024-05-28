import React from "react";
import Login from "../../components/forms/login";
import Signup from "../../components/forms/signup";
import "./style.css";
import { Button, Container, ButtonGroup } from "react-bootstrap";
import { useState } from "react";
import imgback from '../../assets/profile/background.jpeg';

function LoginPage() {
  const [activeBtn, setActiveBtn] = useState("login");
  return (
    <Container className="box-style" style={{ borderRadius: '7px ' ,border:'1px solid black',background:"white",boxShadow:"none"}}>
      <img src={imgback} style={{height:"100%", zIndex:"-10",left: "0", right:'0', top:'0',width:'100%',position:"absolute",backgroundRepeat: 'no-repeat',}}/>
      <ButtonGroup className="d-flex justify-content-center text-center mb-5">
        <Button
          variant={activeBtn === "login" ? "light" : "dark"}
          onClick={() => setActiveBtn("login")}
          style={{ boxShadow: "none" }}
        >
          Log In
        </Button>
        <Button
          variant={activeBtn === "login" ? "dark" : "light"}
          onClick={() => setActiveBtn("signup")}
          style={{ boxShadow: "none" }}
        >
          Sign Up
        </Button>
      </ButtonGroup>
      {activeBtn === "login" ? <Login /> : <Signup />}
    </Container>
  );
}

export default LoginPage;
