import { cn } from "@/utils/tailwind";

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main
        className={cn(
          "container relative overflow-hidden",
          "h-[calc(100%_-_8rem)] w-full",
          "max-w-[42rem]",
          "mx-auto my-auto",
          // "mx-10 my-auto",
          // "border-r border-cyan-400",
          // "shadow-xl shadow-[#0001]",
        )}
      >
        {children}
      </main>
      {/* <style jsx>
        {`
          main::after {
            content: "";
            pointer-events: none;
            user-select: none;
            position: absolute;
            inset: 0px;
            border-radius: inherit;
            padding: 1px;
            backdrop-filter: blur(5px);
            background: linear-gradient(
              rgba(0, 0, 0, 0.01),
              rgba(255, 255, 255, 0.07)
            );
            mask-mode: match-source, match-source;
            mask-repeat: repeat, repeat;
            mask-clip: content-box, border-box;
            mask-origin: content-box, border-box;
            mask-position: 0% 0%, 0% 0%;
            mask-size: auto, auto;
            mask-image: linear-gradient(black, black),
              linear-gradient(black, black);
            mask-composite: exclude;
          }
        `}
      </style> */}
    </>
  );
};

export default Main;
