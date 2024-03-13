import styled from "styled-components";
import NavBar from "@components/NavBar";
import Statistic from "@components/Statistic";
import Analytic from "@components/Analytic";
import Orders from "@components/Orders";
import Sales from "@/components/Sales";
import Add from "@components/ui/AddButton";
import Shopping from "@components/Shopping";
import React from "react";
import { data as orders } from "@data/orders.json";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <Section>
      <NavBar data={{ title: "Dashboard" }} />
      <div className="grid">
        <div className="grid_1">
          <Statistic />
          <Sales />
          <Orders data={orders} />
        </div>
        <div className="grid_2">
          <Analytic />
          <Shopping />
          <Add text="add" />
        </div>
      </div>
    </Section>
  );
};

export default Dashboard;

const Section = styled.section`
  background-color: ${(props) => props.theme.common.background};
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;
  position: fixed;
  overflow-y: scroll;
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
