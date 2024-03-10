import { FC } from "react";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter } from "react-router-dom";

import { ThemeContextProvider } from "@context/Theme";

const App: FC = () => {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <Div>
          <Sidebar />
          <Dashboard />
        </Div>
      </BrowserRouter>
    </ThemeContextProvider>
  );
};

export default App;
const Div = styled.div`
  position: relative;
`;
