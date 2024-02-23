import { FC } from "react";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

import { ThemeContextProvider } from "@context/Theme";

const App: FC = () => {
  return (
    <ThemeContextProvider>
      <Div>
        <Sidebar />
        <Dashboard />
      </Div>
    </ThemeContextProvider>
  );
};

export default App;
const Div = styled.div`
  position: relative;
`;
