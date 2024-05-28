import React, { useState, useEffect } from "react";
import { Card, Button, Container, Row, Col, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import officeImg from '../../assets/icons/Logo.png'

import { projectFirestore } from "../../firebase/config";
import { collection, getDocs } from 'firebase/firestore/lite';
import searchIMG from '../../assets/icons/search.png';
import postimg from '../../assets/profile/post.png'
import imgPost from '../../assets/profile/jobseeker.png';
import imgProvid from '../../assets/profile/jobprovider.png';

function FindJob() {

  const [jobs, setJobs] = useState(null)
  const [post, setPost] = useState(null)
  const [searchTerm, setSearchTerm] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();


    const colRef = collection(projectFirestore, 'jobs')
    getDocs(colRef).then((snapshot) => {
      if (snapshot.empty) {
        console.log("No jobs to load")
      }
      else {
        let result = []
        snapshot.docs.forEach(doc => {

          if (doc.data().desc.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) || doc.data().profile.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
            result.push({ id: doc.id, ...doc.data() })
          }
        })
        setJobs(result);
      }
    }).catch(err => {
      console.log(err)
    })

    const colRef2 = collection(projectFirestore, 'post')
    getDocs(colRef2).then((snapshot) => {
      if (snapshot.empty) {
        console.log("No post to load")
      }
      else {
        let result2 = []
        snapshot.docs.forEach(doc => {
          if (doc.data().desc.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) || doc.data().role.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
            result2.push({ id: doc.id, ...doc.data() })
          }
        })
        setPost(result2);
      }
    }).catch(err => {
      console.log(err)
    })

  }

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  }


  useEffect(() => {
    const colRef = collection(projectFirestore, 'jobs')
    getDocs(colRef).then((snapshot) => {
      if (snapshot.empty) {
        console.log("No jobs to load")
      }
      else {
        let result = []
        snapshot.docs.forEach(doc => {
          result.push({ id: doc.id, ...doc.data() })
        })
        setJobs(result);
      }
    }).catch(err => {
      console.log(err)
    })
  }, [])

  useEffect(() => {
    const colRef = collection(projectFirestore, 'post')
    getDocs(colRef).then((snapshot) => {
      if (snapshot.empty) {
        console.log("No post to load")
      }
      else {
        let result = []
        snapshot.docs.forEach(doc => {
          result.push({ id: doc.id, ...doc.data() })
        })
        setPost(result);
      }
    }).catch(err => {
      console.log(err)
    })
  }, [])




  return (
    <Container className="mt-4">
<div style={{display:"flex",flexDirection: "row-reverse", justifyContent:"space-between"}}>
        <div className="search" style={{    display: "flex",
    alignItems: "center",
    flexDirection: "row-reverse"}}>
          <Form onSubmit={handleSubmit} style={{display:"flex" }}>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={handleChange} value={searchTerm}  style={{borderRight:"0px",borderRadius:"6px"}}/>
            <Button type="submit" style={{background: "none" , border:"1px solid grey",borderRadius:"0px", height:"52px" , margin:"0px" , padding: "0px",width:"auto"}}><img src={searchIMG} type="submit" style={{height:"50px" , background:"#e74c94" ,filter:"invert(1)", padding:"10.5px"} }/></Button>
          </Form>
         </div>
        <div className="d-flex align-items-center mb-4 text-center"><Link to={`/user/setRole`}>
          {/* <Button variant="dark" size="lg" >
            Post
          </Button> */}
          <img src={postimg} title="Post" style={{height:"63px",width:"63px"}}/>
          </Link>
        </div>
        </div>
        <div>
      {jobs && jobs.map((job, id) => {
        return (
          <Card style={{ marginBottom: "40px" ,boxShadow:"5px 10px grey"}} key={id}>
            <Row>
              <Col md={3} className="text-center p-4">
                <Card.Img
                  variant="top"
                  src={imgProvid}
                  style={{ width: "80%"}}
                />
              </Col>
              <Col>
                <Card.Body>
                <Card.Title style={{ fontfamily: 'Robotosans-serif', fontWeight: 'bold' ,fontSize:"28px"}}>
  {job.company}, {job.profile}
</Card.Title>

                  <Card.Text style={{ fontFamily: 'Franklin Gothic Demi Cond',fontSize:"18px" }}>
  {job.desc.substring(0, 200)}....<br />
</Card.Text>
                  <Card.Text>
                    Location: {job.location}<br />
                  </Card.Text>
                  <Link to={`/jobform/${job.id}`}>
                    <Button variant="dark" style={{ backgroundColor: "green" , width:"100px" , height:"45px"}} >Apply</Button>
                  </Link>

                  <Link to={`/findJob/${job.id}`}>
                    <Button variant="dark" style={{width:"140px",height:"45px"}} >Read more</Button>
                  </Link>

                </Card.Body>
              </Col>
            </Row>
          </Card>
        );
      })}
      {post && post.map((post, id) => {
        return (
          <Card style={{ marginBottom: "40px",  boxShadow:"5px 10px grey" }} key={id}>
            <Row>
              <Col md={3} className="text-center p-4">
                <Card.Img
                  variant="top"
                  src={imgPost}
                  style={{ width: "80%" }}
                />
              </Col>
              <Col>
                <Card.Body>
                  <Card.Title style={{ fontfamily: 'Robotosans-serif', fontWeight: 'bold' ,fontSize:"28px"}}>
                    {post.name}, {post.role}
                  </Card.Title>
                  <Card.Text style={{ fontFamily: 'Franklin Gothic Demi Cond',fontSize:"18px" }}>
                    {post.desc.substring(0, 100)}<br />
                  </Card.Text>
                  <Card.Text>
                    Location: {post.location}<br />
                  </Card.Text>
                  <Link to={`/hireme/${post.id}`}>
                    <Button variant="dark" style={{ backgroundColor: "green",width:"100px",height:"45px"}}>Hire</Button>
                  </Link>
                  <Link to={`/findJob/post/${post.id}`}>
                    <Button variant="dark" style={{width:"140px",height:"45px"}} >Read more</Button>
                  </Link>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        );
      })}
      </div>
    </Container>

  );
}

export default FindJob;
