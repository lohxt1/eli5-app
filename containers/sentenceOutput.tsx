import { useCompletionStore } from "hooks/useCompletion";
import useSWR from "swr";
import LoadingDots from "@/components/shared/icons/loadingDots";
import { COMPLETIONPATH } from "@/lib/constants";
import fetcher from "@/utils/fetcher";
import { formatTimeAgo } from "@/utils/helpers";
import { cn } from "@/utils/tailwind";

const SentenceOutput = () => {
  const { output, isLoading } = useCompletionStore((state) => state);

  const { data = [], isLoading: isListLoading } = useSWR(
    COMPLETIONPATH,
    fetcher,
    {
      revalidateOnMount: true,
    },
  );

  return (
    <div className={cn("wrapper h-[80%] w-full overflow-scroll px-2")}>
      {isLoading || isListLoading ? (
        <div className="mb-10">
          <LoadingDots />
        </div>
      ) : output?.state == "error" ? (
        <div className="mb-10 text-[#fa7]">{output?.error}</div>
      ) : null}

      {[...data].map((_) => {
        return (
          <div className={cn("mb-10 border-b border-[#0002] pb-2")}>
            <div className={cn("mb-1 text-[11px] text-[#0006]")}>
              {formatTimeAgo(_.createdAt)}
            </div>
            <div className={cn("text-[14px] text-[#0009]")}>{_.text}</div>
            <div
              className={cn("mt-2 w-fit bg-sky-200")}
              dangerouslySetInnerHTML={{ __html: _.result }}
            ></div>
          </div>
        );
      })}

      <style jsx>
        {`
          .wrapper {
            overflow-y: scroll;
          }
          p {
            word-break: break-word;
          }
        `}
      </style>
    </div>
  );
};

export default SentenceOutput;
