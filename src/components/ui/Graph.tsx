import { FC } from "react";

interface GraphProps {
  width: number;
  height: number;
  data: [];
  colors?: string[];
}

const Graph: FC<GraphProps> = () => {
  return <div>graph</div>;
};

export default Graph;
