import React from "react";
import { Card, CardColumns } from "react-bootstrap";

export default props => {
  const { data } = props;
  return (
    <CardColumns>
      {data &&
        data.map((item, i) => (
          <Card
            key={i}
            bg="secondary"
            border="success"
            text="white"
            style={{ width: "18rem", marginBottom: 10 }}
          >
            <Card.Header>{item.name}</Card.Header>
            <Card.Img variant="top" src={item.flag} />
            <Card.Body>
              <Card.Title>{`Details of ${item.name}`}</Card.Title>
              <Card.Text>{`Capital: ${item.capital}`}</Card.Text>
              <Card.Text>{`Currency: ${item.currencies}`}</Card.Text>
              <Card.Text>{`Time Zone: ${item.timezones}`}</Card.Text>
            </Card.Body>
          </Card>
        ))}
    </CardColumns>
  );
};
