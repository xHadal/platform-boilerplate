import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { AiFillCodeSandboxCircle } from "react-icons/ai";
import { data } from "@data/orders.json";
interface Order {
  trackingId: string;
  productName: string;
  date: string;
  price: number;
  status: string;
}

interface OrdersProps {
  //orders: Order[];
}

const Orders: FC<OrdersProps> = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  useEffect(() => {
    setOrders(data);
  }, []);
  return (
    <StyledOrdersSection>
      <StyledOrdersDetail>
        <div>
          <h4>Recent Order</h4>
        </div>
        <div>
          <button>SEE ALL</button>
        </div>
      </StyledOrdersDetail>

      <div className="orders__table">
        <table>
          <thead>
            <tr>
              <th>Tracking ID</th>
              <th>Product name</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => (
              <tr key={i}>
                <td>{order.trackingId}</td>
                <td>
                  <AiFillCodeSandboxCircle />
                  <span>{order.productName}</span>
                </td>
                <td>{order.date}</td>
                <td>{order.price}</td>
                <td>
                  <button>{order.status}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </StyledOrdersSection>
  );
};

export default Orders;

const StyledOrdersSection = styled.section`
  color: black;
  width: 100%;
  .orders__table {
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
    table {
      border-collapse: collapse;
      width: 100%;
      tr {
        background-color: #eef4ff;
        border-bottom: 5px solid white;
        border-radius: 15px;
        transition: 0.2s ease-in-out;
        &:hover {
          background-color: #d4e0ff;
        }
      }
      th {
        background-color: white;
      }
      th,
      td {
        &:first-child {
          border-top-left-radius: 15px;
          border-bottom-left-radius: 15px;
        }
        &:last-child {
          border-top-right-radius: 15px;
          border-bottom-right-radius: 15px;
        }
        text-align: center;
        padding: 5px;
        justify-content: space-evenly;
        img {
          height: 2rem;
          width: 2rem;
        }
        span {
          margin-top: 0.2rem;
        }
      }
      .img {
        display: flex;
        justify-content: center;
      }
    }
  }
`;

const StyledOrdersDetail = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  div {
    display: flex;
    gap: 1rem;
    button {
      padding: 0.4rem 1rem;
      border: none;
      cursor: pointer;
      background-color: white;
      color: #668dff;
      font-weight: bold;
    }
  }
`;
