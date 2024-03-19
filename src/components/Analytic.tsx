import { FC } from "react";
import styled from "styled-components";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import { data } from "@data/analytic.json";

interface AnalyticProps {}

const Analytic: FC<AnalyticProps> = () => {
  return (
    <Section>
      <div className="analytics">
        <div className="analytics__details">
          <div>
            <h4>Sales Analytics</h4>
          </div>
          <div>
            <button>Switch to weekly</button>
          </div>
        </div>
        <div className="analytics__graph">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={500}
              height={400}
              data={data}
              margin={{ top: 10 }}
            >
              <defs>
                <linearGradient id="colorview11" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="30%" stopColor="#ff6666" stopOpacity={0.4} />
                  <stop offset="85%" stopColor="#ff6666" stopOpacity={0.2} />
                </linearGradient>
                <linearGradient id="colorview22" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="30%" stopColor="#ffd666" stopOpacity={0.4} />
                  <stop offset="85%" stopColor="#fffc66" stopOpacity={0.2} />
                </linearGradient>
              </defs>
              <Tooltip cursor={false} />

              <Area
                animationBegin={200}
                animationDuration={2000}
                type="monotone"
                dataKey="pv"
                stroke="#ffd666"
                fill="url(#colorview22)"
                strokeWidth={4}
              ></Area>
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Section>
  );
};

export default Analytic;
const Section = styled.section`
  .analytics {
    color: ${(props) => props.theme.palette.text.primary};
    width: 100%;
    .analytics__details {
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
        }
      }
    }
    .analytics__graph {
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
