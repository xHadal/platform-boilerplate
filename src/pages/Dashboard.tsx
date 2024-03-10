import styled from "styled-components";
import NavBar from "@components/NavBar";
import Statistic from "@components/Statistic";
import Analytic from "@components/Analytic";
import Orders from "@components/Orders";
import Sales from "@/components/Sales";
import Add from "@components/ui/AddButton";
import Shopping from "@components/Shopping";
import React from "react";
import { Section } from "@/components/presentational/Section";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <Section title="Dashboard">
      <StyledGrid>
        <div className="grid_1">
          <Statistic />
          <Sales />
          <Orders />
        </div>
        <div className="grid_2">
          <Analytic />
          <Shopping />
          <Add text="add" />
        </div>
      </StyledGrid>
    </Section>
  );
};

export default Dashboard;

const StyledGrid = styled.div`
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
`;
