import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { useSession } from "next-auth/react";
import { mutate } from "swr";
import { create } from "zustand";
import { COMPLETIONPATH, USERPATH } from "@/lib/constants";

type OutputTypeSuccess = {
  state: "success";
  result: string;
  createdAt: string;
  promptId: string;
  text: string;
  userId: string;
};

type OutputTypeError = {
  state: "error";
  error: string;
};

type CompletionState = {
  text: string;
  output: OutputTypeSuccess | OutputTypeError;
  isLoading: boolean;
};

export const useCompletionStore = create<CompletionState>()((set) => ({
  text: null,
  output: null,
  isLoading: false,
}));

interface UseCompletionOutput {
  data: string;
  trigger: (text: { text: string }) => Promise<void>;
  isLoading: boolean;
}

const useCompletion = (): UseCompletionOutput => {
  const [isLoading, toggleLoading] = useState(false);
  const [data, setData] = useState(null);

  const { data: session } = useSession();

  useEffect(() => {
    useCompletionStore.setState({ output: data, isLoading });
  }, [isLoading, data]);

  const _fetchOutput = async ({ text }: { text: string }) => {
    toggleLoading(true);

    const _sentence = {
      id: nanoid(),
      text,
      userId: session?.user?.id,
      promptId: "cld8dxjid0000vnyyq53of04m",
    };

    const response = await fetch(COMPLETIONPATH, {
      method: "POST",
      body: JSON.stringify({
        ..._sentence,
      }),
    });

    const _data = await response.json();

    setData(_data);
    toggleLoading(false);
    mutate(COMPLETIONPATH);
    mutate(USERPATH);
  };

  return {
    data,
    trigger: _fetchOutput,
    isLoading,
  };
};

export default useCompletion;
