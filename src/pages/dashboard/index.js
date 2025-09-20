import React from "react";
import { Row, Col, Button, Card, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import websiteIcon from "../../assets/icons/WebSiteLogo.png";
import profileIcon from "../../assets/icons/ProfileIcon.png";
import profilePic from "../../assets/profile/logo512.png";
import cardImg from '../../assets/profile/office.jpeg'
import "./style.css";
import { useState } from "react";
import { useEffect } from "react";
import { auth } from '../../firebase/config'

import { projectFirestore } from "../../firebase/config";
import { collection, getDocs } from 'firebase/firestore/lite';


function Dashboard() {

  const [usersData, setData] = useState(null)
  var index = 0;

  const anchorStyles = {
    color: "black",
  };
  const user = auth.currentUser;
  console.log(user)



  useEffect(() => {
    const colRef = collection(projectFirestore, 'user')
    getDocs(colRef).then((snapshot) => {
      if (snapshot.empty) {
        console.log("No Data to load")
      }
      else {
        let result = []
        snapshot.docs.forEach(doc => {
          result.push({ id: doc.id, ...doc.data() })
        })
        setData(result);
      }
    }).catch(err => {
      console.log(err)
    })
  }, [])


  if(usersData === null)
  {
    return (
      <Container>
        <div style={{ marginBottom: "40px", marginTop: "40px" }}>
          <Row>
            <Col md={4}>
              <div className="text-center">
                <img
                  src={profilePic}
                  width={"60%"}
                  height={"250px"}
                  style={{ borderRadius: "50%" }}
                />
              </div>
            </Col>
            <Col md={8}>
              {" "}
              <br />
              <h3>Dhiraj Karangale</h3>
              <p>
                Third year computer engineering student at SCOE. Have a two years to experiance as a game Developer.
                Also have a knowladge of C#, C++ programing language, use C++ as a primary language for DSA.
                Have a knowladge of Data Structure and Algorithm.
                Currently working as a Developer in GodSpeed games.
              </p>
              <span style={{ fontWeight: "lighter" }}>Pune, Maharashtra</span>
              <Row className="mt-2">
                <Row>
                  <Col md={1} className="text-center">
                    <Image src={websiteIcon} width={"90%"} />
                  </Col>
                  <Col md={5} className="mt-1">
                    <a
                      style={anchorStyles}
                      href="https://dksoftware.netlify.app/"
                    >
                      https://dksoftware.netlify.app/
                    </a>
                  </Col>
                  <Col md={1}>
                    <Image src={profileIcon} width={"90%"} />
                  </Col>
                  <Col md={5}>
                    <a
                      style={anchorStyles}
                      href="https://playvalorant.com/en-us/"
                    >
                      DKode (Valorant)
                    </a>
                  </Col>
                </Row>
                <Row className="mt-2">
                </Row>
              </Row>
            </Col>
          </Row>
        </div>
        <br />
      </Container>
    );
  }


  return (
    <Container>
      <div style={{ marginBottom: "40px", marginTop: "40px" }}>
        <Row>
          <Col md={4}>
            <div className="text-center">
              <img
                src={profilePic}
                width={"60%"}
                height={"250px"}
                style={{ borderRadius: "50%" }}
              />
            </div>
          </Col>
          <Col md={8}>
            <h3>{usersData[index].name}</h3>
            <br />
            <p>
              {usersData[index].about}
            </p>
            <span style={{ fontWeight: "lighter" }}>Pune, Maharashtra</span>
            <Row className="mt-2">
              <Row>
                <Col md={1} className="text-center">
                  <Image src={websiteIcon} width={"90%"} />
                </Col>
                <Col md={5} className="mt-1">
                  <a
                    style={anchorStyles}
                    href="{usersData[index].linkedin}"
                  >
                    {usersData[index].linkedin}
                  </a>
                </Col>
                <Col md={1}>
                  <Image src={profileIcon} width={"90%"} />
                </Col>
                <Col md={5}>
                  <a
                    style={anchorStyles}
                    href=" {usersData[index].github}"
                  >
                    {usersData[index].github}
                  </a>
                </Col>
              </Row>
              <Row className="mt-2">
              </Row>
            </Row>
          </Col>
        </Row>
      </div>
      <br />
    </Container>
  );
}

export default Dashboard;
