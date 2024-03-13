import { FC } from "react";
import { AiOutlineShoppingCart, AiFillCaretUp } from "react-icons/ai";
import styled from "styled-components";

interface OrderData {
  title: string;
  icon: JSX.Element;
  total: number;
  color: number;
  percentage: number;
  percentageIcon: JSX.Element;
}

const Order: FC<{ data: OrderData }> = ({ data }) => {
  return (
    <StyledOrder>
      <div className="design">
        <div className={`logo img${data.color}`}>{data.icon}</div>
      </div>
      <div className="total">
        <h6>{data.title}</h6>
      </div>
      <div className="number">
        <h6>{data.total}</h6>
        <AiFillCaretUp className="svg1" />
        <span className="t1">{data.percentage}</span>
      </div>
    </StyledOrder>
  );
};

interface SectionProps {
  //data: OrderData[];
}

const Shopping: React.FC<SectionProps> = () => {
  const data: OrderData[] = [
    {
      title: "ONLINE ORDERS",
      icon: <AiOutlineShoppingCart />,
      total: 12345,
      percentage: 23,
      color: 1,
      percentageIcon: <AiFillCaretUp />,
    },
    {
      title: "ONLINE ORDERS",
      icon: <AiOutlineShoppingCart />,
      total: 12345,
      color: 2,
      percentage: 23,
      percentageIcon: <AiFillCaretUp />,
    },
    {
      title: "ONLINE ORDERS",
      icon: <AiOutlineShoppingCart />,
      total: 12345,
      color: 3,
      percentage: 23,
      percentageIcon: <AiFillCaretUp />,
    },
    {
      title: "ONLINE ORDERS",
      icon: <AiOutlineShoppingCart />,
      total: 12345,
      color: 4,
      percentage: 23,
      percentageIcon: <AiFillCaretUp />,
    },
  ];

  return (
    <Section>
      {data.map((item, i) => (
        <Order key={i} data={item} />
      ))}
    </Section>
  );
};

export default Shopping;
const StyledOrder = styled.div`
  padding: 0.5rem;
  border-radius: 1rem;
  color: #333;
  background-color: ${(props) => props.theme.common.secondary};
  justify-content: space-evenly;
  align-items: center;
  gap: 0.5rem;
  transition: 0.5s ease-in-out;
  &:hover {
    background-color: #d4e0ff;
    color: #333;
    svg {
      color: #333;
    }
  }
  .design {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    .img1 {
      background-color: #668dff;
    }
    .img2 {
      background-color: #ffb2c3;
    }
    .img3 {
      background-color: #ffdd00;
    }
    .img4 {
      background-color: #030303;
    }
    .logo {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      justify-content: space-evenly;
      margin: 10px 0;
      padding: 1rem;
      border-radius: 15px;
      svg {
        font-size: 2rem;
        color: #fff;
      }
    }
  }
  .total {
    text-align: center;
    color: grey;
  }
  .number {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: space-evenly;
    margin-top: 10px;
    .svg1 {
      color: green;
    }
    .t1 {
      color: green;
    }
    h6 {
      color: #333;
    }
  }
`;

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  .shopping {
    padding: 0.5rem;
    border-radius: 1rem;
    color: #333;
    background-color: ${(props) => props.theme.common.secondary};
    justify-content: space-evenly;
    align-items: center;
    gap: 0.5rem;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: #d4e0ff;
      color: #333;
      svg {
        color: #333;
      }
    }
  }
`;
