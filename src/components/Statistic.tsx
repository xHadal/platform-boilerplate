import { FC } from "react";
import {
  AiFillDollarCircle,
  AiFillExperiment,
  AiFillTag,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
} from "react-icons/ai";
import styled from "styled-components";

interface AnalyticData {
  title: string;
  icon: JSX.Element;
  value: string;
  percentage: number;
  isIncrease: boolean;
}

interface SectionProps {
  // data: AnalyticData[];
}

const Analytic: FC<{ data: AnalyticData }> = ({ data }) => {
  return (
    <div className={`analytic color${data.title}`}>
      <div className="total">
        <h6>{data.title}</h6>
        <span className={`t${data.isIncrease ? 1 : 2}`}>
          {data.isIncrease ? "+" : "-"}
          {data.percentage}%
        </span>
        {data.isIncrease ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
      </div>
      <div className="design">
        <div className="logo">{data.icon}</div>
        <div className="content">
          <h5>{data.value}</h5>
        </div>
      </div>
    </div>
  );
};

const Statistic: React.FC<SectionProps> = () => {
  const data: AnalyticData[] = [
    {
      title: "TOTAL SALES",
      icon: <AiFillTag />,
      value: "$123,123,123",
      percentage: 18,
      isIncrease: true,
    },
    {
      title: "TOTAL EXPENSES",
      icon: <AiFillExperiment />,
      value: "$123,123,123",
      percentage: 8,
      isIncrease: false,
    },
    {
      title: "TOTAL REVENUE",
      icon: <AiFillDollarCircle />,
      value: "$123,123,123",
      percentage: 8,
      isIncrease: false,
    },
  ];

  return (
    <Section>
      {data.map((item) => (
        <Analytic key={item.title} data={item} />
      ))}
    </Section>
  );
};

export default Statistic;
const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  .color1 {
    background-color: ${(props) => props.theme.common.secondary};
  }
  .color2 {
    background-color: #fdf4f5;
  }
  .color3 {
    background-color: #fffce4;
  }
  .analytic {
    padding: 1rem 2rem;
    border-radius: 1rem;
    color: ${(props) => props.theme.palette.text.primary};
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    transition: 0.5s ease-in-out;
    cursor: pointer;
    background-color: ${(props) => props.theme.common.secondary};
    &:hover {
      background-color: #d4e0ff;
      color: black;
      svg {
        color: black;
      }
    }
    .design {
      display: flex;
      align-items: center;
      gap: 1rem;
      .logo {
        background-color: white;
        border-radius: 1rem;
        border: 1px solid #b9b9b9;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1.5rem;
        svg {
          font-size: 1.5rem;
        }
      }
    }
    .total {
      display: flex;
      align-items: center;
      gap: 1rem;
      justify-content: space-evenly;
      margin-bottom: 20px;
      .svg1 {
        color: green;
      }
      .svg2 {
        color: green;
      }
      .t1 {
        color: green;
      }
      .t2 {
        color: orange;
      }
      h6 {
        color: grey;
      }
    }
  }
`;
