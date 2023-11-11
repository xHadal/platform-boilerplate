import React from "react";
import styled from "styled-components";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import { AiOutlineCaretDown } from "react-icons/ai";

function Sales() {
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
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Section>
  );
}

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

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page H",
    uv: 0,
    pv: 4300,
    amt: 2100,
  },
];
