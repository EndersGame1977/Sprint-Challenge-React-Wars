import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import PeopleList from "../src/components/PeopleList";
import { Container, Header } from "semantic-ui-react";

const App = () => {
  const [peopleList, setPeopleList] = useState([]);

  useEffect(() => {
    const getPeopleList = () => {
      axios
        .get("https://swapi.co/api/people/")
        .then(res => {
          setPeopleList(res.data.results);
        })
        .catch(err => console.log(err));
    };
    getPeopleList();
  }, []);

  return (
    <Container
      textAlign="center"
      style={{ color: "#f9d71c", background: "black" }}
    >
      <Header as="h1" style={{ color: "#f9d71c" }}>
        React Wars
      </Header>
      <PeopleList peopleList={peopleList} />
    </Container>
  );
};
export default App;
