import { FC } from "react";
import styled from "styled-components";
import {
  AreaChart,
  Area,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";
import { AiOutlineCaretDown } from "react-icons/ai";
import { data } from "@data/sales.json";

const Sales: FC = () => {
  return (
    <Section>
      <div className="sales">
        <div className="sales__details">
          <div>
            <h4>Sales Overview</h4>
          </div>
          <div>
            <button>
              Monthly
              <AiOutlineCaretDown />
            </button>
          </div>
        </div>
        <div className="sales__graph">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={500}
              height={500}
              data={data}
              margin={{ top: 10 }}
            >
              <defs>
                <linearGradient id="colorview1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="30%" stopColor="#668DFF" stopOpacity={0.4} />
                  <stop offset="85%" stopColor="#bbc3da" stopOpacity={0.2} />
                </linearGradient>
                <linearGradient id="colorview2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="30%" stopColor="#66ff73" stopOpacity={0.4} />
                  <stop offset="85%" stopColor="#bbc3da" stopOpacity={0.2} />
                </linearGradient>
              </defs>
              <Tooltip cursor={false} />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#668dff"
                fill="url(#colorview1)"
              ></Area>
              <Area
                type="monotone"
                dataKey="pv"
                stroke="#66ff73"
                fill="url(#colorview2)"
              ></Area>
              <XAxis dataKey="name" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <CartesianGrid strokeDasharray="3 3" opacity={0.5} />
              <Legend />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Section>
  );
};

export default Sales;

const Section = styled.section`
  .sales {
    color: black;
    width: 100%;
    .sales__details {
      display: flex;
      justify-content: space-between;
      margin: 1rem 0;
      div {
        display: flex;
        gap: 1rem;
        button {
          border-radius: 0.5rem;
          padding: 0.4rem 1rem;
          border: none;
          cursor: pointer;
          background-color: #eef4ff;
          color: black;
          svg {
            font-size: 0.6rem;
          }
        }
      }
    }

    .sales__graph {
      height: 10rem;
      width: 100%;
      .recharts-default-tooltip {
        background-color: #333 !important;
        border-color: #333 !important;
        color: #eee !important;
      }
    }
  }
`;
