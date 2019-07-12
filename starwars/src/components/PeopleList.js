import React from "react";
import People from "./People";
import { Grid } from "semantic-ui-react";

const PeopleList = props => {
  return (
    <Grid columns={4} container doubling stackable>
      {props.peopleList.map(people => {
        return (
          <Grid.Column key={people.name}>
            <People people={people} />
          </Grid.Column>
        );
      })}
    </Grid>
  );
};

export default PeopleList;
