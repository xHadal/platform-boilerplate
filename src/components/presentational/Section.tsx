import { ReactNode, FC } from "react";
import styled from "styled-components";
import NavBar from "@components/NavBar";

interface SectionProps {
  children: ReactNode;
  title: string;
}

export const Section: FC<SectionProps> = ({
  children,
  title,
}: SectionProps) => {
  return (
    <StyledSection>
      <NavBar data={{ title }} />
      {children}
    </StyledSection>
  );
};

const StyledSection = styled.section`
  background-color: ${(props) => props.theme.common.background};
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;
`;
