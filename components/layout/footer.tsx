import { cn } from "@/utils/tailwind";

const Footer = () => {
  return (
    <div
      className={cn(
        "absolute left-0 right-0 bottom-5 flex h-5 w-fit",
        "border border-cyan-300",
        "mx-auto",
      )}
    >
      hey@lohxt.space
    </div>
  );
};

export default Footer;
