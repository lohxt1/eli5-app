import { useState } from "react";
import { cn } from "@/utils/tailwind";

const SentenceInputRoot = ({
  handleSubmit,
}: {
  handleSubmit: (text: string) => Promise<void>;
}) => {
  const [text, setText] = useState("");

  const _handleSubmit = (e) => {
    e.preventDefault();
    setText("");
    handleSubmit(text);
  };

  return (
    <form
      onSubmit={_handleSubmit}
      className={cn(
        "relative mb-5 flex items-center pt-5",
        "border-b border-cyan-500",
      )}
    >
      <input
        placeholder="Enter some text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className={cn("h-12 w-full bg-[#fff0]", "px-2", "focus:outline-none")}
      />
      <button
        className={cn(
          "flex items-center justify-center",
          "h-12 w-12",
          text.trim().length > 0 && "hover:border-cyan-300 hover:text-gray-700",
          text.trim().length > 0 &&
            "peer-focus:border-gray-700 peer-focus:text-gray-700",
          "inset-y-0 right-0",
          "border border-gray-100",
          "font-sans text-lg font-medium text-gray-700",
          text.trim().length <= 0 && "bg-[#fff5] text-gray-300",
          text.trim().length <= 0 && "cursor-not-allowed",
        )}
      >
        →
      </button>
    </form>
  );
};

export default SentenceInputRoot;
