import React from "react";
import { Container } from "react-bootstrap";
import SubHeader from "../Components/SubHeader";

const Compare = () => {
  return (
    <div>
      <SubHeader pageName="Compare" />
      <Container className="py-5 text-center">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Blog Name1</th>
              <th scope="col">Blog Name2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
            </tr>
          </tbody>
        </table>
      </Container>
    </div>
  );
};

export default Compare;
