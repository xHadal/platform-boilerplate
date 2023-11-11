import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import Statistic from "./Statistic";
import Analytic from "./Analytic";
import Orders from "./Orders";
import Sales from "./Sales";
import Add from "./Add";
import Shopping from "./Shopping";
function Dashboard() {
  return (
    <Section>
      <NavBar />
      <div className="grid">
        <div className="grid_1">
          <Statistic />
          <Sales />
          <Orders />
        </div>
        <div className="grid_2">
          <Analytic />
          <Shopping />
          <Add />
        </div>
      </div>
    </Section>
  );
}

export default Dashboard;

const Section = styled.section`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;
  .grid {
    display: grid;
    grid-template-columns: 70% 28%;
    gap: 2rem;
    margin-top: 2rem;
    .grid_1 {
      z-index: 1;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .grid_2 {
      z-index: 1;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
`;
