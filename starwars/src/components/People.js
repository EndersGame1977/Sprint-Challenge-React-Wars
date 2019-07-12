import React from "react";
import { Segment } from "semantic-ui-react";

const PeopleList = props => {
  return (
    <Segment style={{ background: "black" }}>
      <h2>{props.people.name}</h2>
      <p>Eye Color: {props.people.eye_color}</p>
      <p>Hair Color: {props.people.hair_color}</p>
      <p>Skin Color: {props.people.skin_color}</p>
      <p>Birth Year: {props.people.birth_year}</p>
      <p>Gender: {props.people.gender}</p>
      <p>Height: {props.people.height}</p>
      <p>Mass: {props.people.mass}</p>
    </Segment>
  );
};

export default PeopleList;
