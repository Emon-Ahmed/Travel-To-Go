import React from "react";
import { Container } from "react-bootstrap";
import SubHeader from "../Components/SubHeader";
import useAuth from "../Hooks/useAuth";

const Compare = () => {
  const { compare } = useAuth();
  // alert(compare);
  return (
    <div>
      <SubHeader pageName="Compare" />
      <Container className="my-5 text-center overflow-auto">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Traveler</th>
              <th scope="col">Category</th>
              <th scope="col">Cost</th>
              <th scope="col">Rating</th>
            </tr>
          </thead>
          <tbody>
            {compare.map((i) => (
              <tr>
                <th scope="row">{i.title}</th>
                <td>{i.traveler}</td>
                <td>{i.category}</td>
                <td>{i.cost}</td>
                <td>{i.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </div>
  );
};

export default Compare;
