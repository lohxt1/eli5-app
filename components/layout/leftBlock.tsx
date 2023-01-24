import React, { ReactNode } from "react";
import { cn } from "@/utils/tailwind";

type Props = {
  children: ReactNode;
};

const LeftBlock: React.FC<Props> = (props) => (
  <div className={cn("h-screen w-[70%]", "pr-10", "border-r border-cyan-400")}>
    {props.children}
  </div>
);

export default LeftBlock;
