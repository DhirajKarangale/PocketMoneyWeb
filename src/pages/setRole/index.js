import React from "react";
import { Button, Form, Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";
import postImg from "../../assets/profile/jobseeker.png";
import providImg from "../../assets/profile/jobprovider.png"
import backImg from "../../assets/profile/jobseekerback.png"

function SetRole() {
  return (
    <div className="text-center">
      <img src={backImg} style={{height:"100%", zIndex:"-10",left: "0", right:'0', top:'0',width:'100%',position:"absolute"}}/>
      <Container className="d-flex justify-content-center mt-5">
        <h1 style={{fontSize:"px"}}>SELECT YOUR ROLE</h1>
      </Container>
      <br />
      <br />
      <Container className="d-flex justify-content-center card-container" >
        <Link to="/post" style={{ textDecoration: 'none' }}>
          <Card
            key="dark"
            text="light"
            style={{ width: "18rem",height:"20rem",background: "rgba(0, 0, 0, 0.6)"}}
            className="mb-2 myCard"
          >
            {/* <Card.Header>Header</Card.Header> */}
            <Card.Body>
              <Card.Title style={{fontSize:"25px"}}> Job Seeker </Card.Title>
              <img src={postImg} style={{height:"100px" , borderRadius : "50%" , margin :"1rem"}}></img>
              <Card.Text>
                Apply for your desired job we are here to show you about all available jobs.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
        <Link to="/giveJob" style={{ textDecoration: 'none' }}>
          <Card
            key="dark"
            text="light"

            style={{ width: "18rem",height:"20rem", background: "rgba(0, 0, 0, 0.6)"}}
            className="mb-2 myCard"
          >
            {/* <Card.Header>Header</Card.Header> */}
            <Card.Body>
              <Card.Title style={{fontSize:"25px"}}> Job Provider </Card.Title>
              <img src={providImg} style={{height:"100px" , borderRadius : "50%" ,margin :"1rem"}}/>
              <Card.Text>
                Provide for your desired job we are here to show you about all available employees.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
        {/* <Link to="/findJob">
          <Button variant="dark">Job seeker</Button>
        </Link>
        <Link to="/giveJob">
          <Button variant="dark">Job provider</Button>
        </Link> */}
      </Container>
    </div>
  );
}

export default SetRole;
