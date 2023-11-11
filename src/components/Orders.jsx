import React from "react";
import styled from "styled-components";
import { AiFillCodeSandboxCircle } from "react-icons/ai";
function Orders() {
  return (
    <Section>
      <div className="orders">
        <div className="orders__details">
          <div>
            <h4>Recent Order</h4>
          </div>
          <div>
            <button>SEE ALL</button>
          </div>
        </div>

        <div className="orders__table">
          <table>
            <tr>
              <th>Tracking ID</th>
              <th>Product name</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>#9876431</td>
              <td>
                <AiFillCodeSandboxCircle />
                <span>Jane Doe</span>
              </td>
              <td>Jul 29, 2021</td>
              <td>$329</td>
              <td>
                <button>Complete</button>
              </td>
            </tr>
            <tr>
              <td>#9876431</td>
              <td>
                <AiFillCodeSandboxCircle />
                <span>Jane Doe</span>
              </td>
              <td>Jul 29, 2021</td>
              <td>$329</td>
              <td>
                <button>Complete</button>
              </td>
            </tr>
            <tr>
              <td>#9876431</td>
              <td>
                <AiFillCodeSandboxCircle />
                <span>Jane Doe</span>
              </td>
              <td>Jul 29, 2021</td>
              <td>$329</td>
              <td>
                <button>Complete</button>
              </td>
            </tr>
            <tr>
              <td>#9876431</td>
              <td>
                <AiFillCodeSandboxCircle />
                <span>Jane Doe</span>
              </td>
              <td>Jul 29, 2021</td>
              <td>$329</td>
              <td>
                <button>Complete</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </Section>
  );
}

export default Orders;
const Section = styled.section`
  .orders {
    color: black;
    width: 100%;
    .orders__details {
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
    }
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
  }
`;
