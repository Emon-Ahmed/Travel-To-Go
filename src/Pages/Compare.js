import React from "react";
import { Container } from "react-bootstrap";
import SubHeader from "../Components/SubHeader";
import useAuth from "../Hooks/useAuth";

const Compare = () => {
  const { compare } = useAuth();
  console.log(compare);
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
            {compare.map((i) => (
              <tr>
                <th scope="row">1</th>
                <td>{i.title}</td>
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
