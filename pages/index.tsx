import { NextPage } from "next";
import Router from "next/router";
import { cn } from "@/utils/tailwind";

const Home: NextPage = () => {
  const _handleRedirect = (e) => {
    e.preventDefault();
    Router.push("/login");
  };

  return (
    <div
      className={cn(
        "flex flex-col",
        "container relative overflow-hidden",
        "h-[calc(100%_-_8rem)] w-full",
        "max-w-[42rem]",
        "mx-auto my-auto",
      )}
    >
      <label
        className={cn(
          "w-fit text-center font-bold ",
          "bg-gradient-to-br from-[#000] to-[#0007]",
          "text-[80px] text-[#0000]",
          "bg-clip-text bg-origin-padding",
          "mx-auto mt-10",
        )}
      >
        ELI5 app
      </label>
      <label
        className={cn(
          "w-fit text-center font-bold",
          "text-[13px] text-cyan-800",
          "mx-auto mb-2",
        )}
      >
        (Explain like I'm Five)
      </label>
      <label
        className={cn(
          "w-fit text-center font-bold",
          "text-[22px] text-cyan-800",
          "my-2 mx-auto",
          "underline decoration-sky-500 decoration-dashed",
        )}
      >
        Get a simple explaination for any sort of complex text.
      </label>
      <button
        onClick={_handleRedirect}
        className={cn(
          "w-fit",
          "rounded-[5px] border border-cyan-300",
          "mx-auto mt-5 px-2 py-2",
        )}
      >
        Get started →
      </button>
      <div
        className={cn("mt-12 px-4 py-4", "rounded-sm border border-cyan-300")}
      >
        <div className={cn("text-[14px] text-[#0009]")}>
          We've been half right about a lot of things, but there's something
          missing from our theories, something whose nature we haven't even
          guessed yet. If we don't learn to understand it, it will kill us.
        </div>
        <div
          className={cn(
            "w-full text-center",
            "text-[20px] text-[#000]",
            "mx-auto my-auto",
          )}
        >
          ↓
        </div>
        <div className={cn("mt-2 w-fit bg-sky-200")}>
          <p>
            It's like a <span style={{ fontWeight: "bold" }}>mouse</span> who
            knows the way around the kitchen, but doesn't know about the
            <span style={{ fontWeight: "bold" }}>cat</span>[
            <span style={{ fontStyle: "italic" }}>
              something whose nature we haven't even guessed yet
            </span>
            ]. If the mouse doesn't learn to understand the cat, it will get
            eaten.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
