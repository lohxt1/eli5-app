import useCompletion from "hooks/useCompletion";
import SentenceInputRoot from "@/components/sentenceInput";

const SentenceInput = () => {
  const { trigger } = useCompletion();

  const _handleSubmit = async (text) => {
    if (text.trim().length <= 0) return;

    trigger({ text: text.trim() });
  };

  return <SentenceInputRoot handleSubmit={_handleSubmit} />;
};

export default SentenceInput;
