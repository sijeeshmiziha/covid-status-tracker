import React from "react";
import States from "./States";
import Card from 'react-bootstrap/Card'
import {useState,useEffect} from "react"
function India() {
 const [india,setIndia]=useState([]);
 useEffect(()=>{
   fetch("https://corona.lmao.ninja/v2/countries/india")
   .then((response)=>response.json())
   .then((data)=>setIndia(data));
 },[]);
/*console.log(india);
console.log(india.cases);
console.log(india.recovered);*/
  return (
    <div className="row">
      <div className="col-md-12">
        <img src="https://www.countryflags.io/IN/shiny/64.png" alt="INDIA" />
        <h2>INDIA</h2>
      </div>
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-3">
            <Card style={{ width: "18rem" }} bg="primary" text="white">
              <Card.Body>
                <Card.Title>TOTAL CASES</Card.Title>
                <h3>{india.cases}</h3>
               
              </Card.Body>
            </Card>{" "}
          </div>
          <div className="col-md-3">
            <Card style={{ width: "18rem" }} bg="warning" text="white">
              <Card.Body>
                <Card.Title>ACTIVE CASES</Card.Title>
                <h3>{india.active}</h3>
                
              </Card.Body>
            </Card>{" "}
          </div>
          <div className="col-md-3">
            <Card style={{ width: "18rem" }} bg="success" text="white">
              <Card.Body>
                <Card.Title>RECOVERED</Card.Title>
                <h3>{india.recovered}</h3>
               
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-3">
            <Card style={{ width: "18rem" }} bg="dark" text="white">
              <Card.Body>
                <Card.Title>DEATHS</Card.Title>
                <h3>{india.deaths}</h3>
                
              </Card.Body>
            </Card>{" "}
          </div><br/>
          <div className="col-md-3">
            <Card style={{ width: "18rem" }} bg="danger" text="white">
              <Card.Body>
                <Card.Title>CRITICAL</Card.Title>
                <h3>{india.critical}</h3>
                
              </Card.Body>
            </Card>{" "}
          </div>
          <div className="col-md-3">
            <Card style={{ width: "18rem" }} bg="success" text="white">
              <Card.Body>
                <Card.Title>TOTAL POPULATION</Card.Title>
                <h3>{india.population}</h3>
                
              </Card.Body>
            </Card>{" "}
          </div>
          <div className="col-md-12">
          <States />
          </div>
        </div>
      </div>
    </div>
  );
}

export default India;
