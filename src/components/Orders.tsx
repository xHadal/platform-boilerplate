import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { AiFillCodeSandboxCircle } from "react-icons/ai";
import Autocomplete from "@components/ui/AutoComplete";
interface Order {
  trackingId: string;
  productName: string;
  date: string;
  price: number;
  status: string;
}

interface OrdersProps {
  data: Order[];
}

const Orders: FC<OrdersProps> = ({ data }) => {
  const [orders, setOrders] = useState<Order[]>([]);
  const ordersName = orders.map((order) => order.productName);
  useEffect(() => {
    setOrders(data);
  }, []);

  const onFilter = (value: string) => {
    const filteredOrders = data.filter((order) =>
      order.productName.toLowerCase().includes(value.toLowerCase())
    );
    setOrders(filteredOrders);
  };
  return (
    <StyledOrdersSection>
      <StyledOrdersDetail>
        <div>
          <h2>Recent Orders</h2>
        </div>
        <div>
          <Autocomplete data={ordersName} onFilter={onFilter}></Autocomplete>
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
  color: ${(props) => props.theme.palette.text.primary};
  width: 100%;
  .orders__table {
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
    table {
      border-collapse: collapse;
      width: 100%;
      tr {
        background-color: ${(props) => props.theme.common.secondary};
        border-bottom: 5px solid ${(props) => props.theme.common.background};
        border-radius: 15px;
        transition: 0.2s ease-in-out;
        &:hover {
          background-color: ${(props) => props.theme.common.secondaryHover};
        }
      }
      th {
        background-color: ${(props) => props.theme.common.secondary};
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
  }
`;
