import Router from "next/router";
import React, { ReactNode } from "react";
import useSWR from "swr";
import { USERPATH } from "@/lib/constants";
import fetcher from "@/utils/fetcher";
import { cn } from "@/utils/tailwind";
import LoadingDots from "../shared/icons/loadingDots";

const HeaderBar = () => {
  return (
    <>
      <div
        className={cn(
          "align-center container relative flex items-center justify-between overflow-hidden",
          "h-8 w-full",
          "max-w-[42rem]",
          "mx-auto my-auto px-2",
          "border-b border-cyan-300",
          "text-sm text-[#0007]",
        )}
      >
        <div className={cn("flex flex-row")}>
          {/* <label className={cn("mr-4", "text-sm text-[#0007]")}>Home</label> */}
          <HomeButton />
          <SettingsButton />
        </div>
        <UsageStats />
      </div>
      <style jsx>{``}</style>
    </>
  );
};

export default HeaderBar;

const HomeButton = () => {
  const _handleHomeRedirect = (e) => {
    Router.push("/");
  };

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("mr-2 cursor-pointer")}
      onClick={_handleHomeRedirect}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.717 3.795a1.26 1.26 0 0 0-1.434 0l-7.14 4.917c-.333.23-.536.6-.55.996-.052 1.372-.107 3.774.044 5.48.113 1.286.416 2.987.662 4.238a1.24 1.24 0 0 0 1.221 1.002h3.324a.26.26 0 0 0 .257-.262v-4.19c0-1.013.803-1.834 1.795-1.834h2.513c.991 0 1.795.82 1.795 1.833v4.191a.26.26 0 0 0 .256.262h3.02a1.24 1.24 0 0 0 1.22-1.002c.247-1.251.55-2.952.663-4.238.151-1.706.096-4.108.044-5.48a1.269 1.269 0 0 0-.55-.996l-7.14-4.917Zm-2.293-1.303a2.771 2.771 0 0 1 3.152 0l7.14 4.917a2.848 2.848 0 0 1 1.229 2.238c.052 1.37.111 3.865-.05 5.682-.121 1.378-.439 3.15-.686 4.406A2.787 2.787 0 0 1 18.479 22H15.46c-.99 0-1.795-.82-1.795-1.834v-4.19a.26.26 0 0 0-.256-.263h-2.513a.26.26 0 0 0-.257.262v4.191C10.64 21.18 9.836 22 8.844 22H5.52a2.787 2.787 0 0 1-2.729-2.265c-.247-1.256-.565-3.028-.687-4.406-.16-1.817-.1-4.311-.049-5.682.035-.91.5-1.736 1.228-2.238l7.14-4.917Z"
        fill="#000a"
      />
    </svg>
  );
};

const SettingsButton = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.003 9.632c-1.36 0-2.46 1.06-2.46 2.368 0 1.308 1.1 2.368 2.46 2.368 1.359 0 2.46-1.06 2.46-2.368 0-1.308-1.101-2.368-2.46-2.368ZM7.902 12c0-2.18 1.836-3.947 4.1-3.947 2.266 0 4.102 1.767 4.102 3.947s-1.836 3.947-4.101 3.947c-2.265 0-4.101-1.767-4.101-3.947Z"
        fill="#0006"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="m20.401 12 .236.132c1.298.724 1.747 2.32 1.005 3.577l-1.505 2.548c-.75 1.271-2.434 1.71-3.748.976l-.203-.113v.248c0 1.454-1.224 2.632-2.734 2.632h-2.985c-1.51 0-2.734-1.178-2.734-2.632v-.214l-.097.055c-1.316.753-3.017.32-3.774-.962L2.358 15.7c-.736-1.246-.3-2.83.98-3.563L3.576 12l-.238-.136c-1.28-.732-1.716-2.317-.98-3.563l1.504-2.548C4.62 4.472 6.32 4.038 7.636 4.79l.097.055v-.214C7.733 3.178 8.957 2 10.467 2h2.985c1.51 0 2.734 1.178 2.734 2.632v.248l.203-.113c1.314-.734 2.998-.295 3.748.976l1.505 2.549c.742 1.255.293 2.852-1.005 3.576l-.236.132Zm-1.638.91a1.033 1.033 0 0 1 0-1.82l1.051-.588c.52-.29.699-.928.402-1.43l-1.505-2.549a1.117 1.117 0 0 0-1.5-.39l-1.023.571c-.73.407-1.642-.1-1.642-.91V4.632c0-.582-.49-1.053-1.094-1.053h-2.985c-.604 0-1.093.471-1.093 1.053v1.14c0 .815-.924 1.321-1.653.904l-.923-.528c-.526-.3-1.207-.127-1.51.385L3.785 9.08a1.031 1.031 0 0 0 .392 1.425l1.03.589a1.033 1.033 0 0 1 0 1.81l-1.03.589a1.031 1.031 0 0 0-.392 1.425l1.505 2.548c.302.512.983.686 1.51.385l.922-.528c.73-.417 1.653.089 1.653.905v1.14c0 .58.49 1.052 1.093 1.052h2.985c.604 0 1.094-.471 1.094-1.053v-1.162c0-.81.913-1.317 1.642-.91l1.024.571a1.118 1.118 0 0 0 1.5-.39l1.504-2.549a1.031 1.031 0 0 0-.402-1.43l-1.051-.587Z"
        fill="#0006"
      />
    </svg>
  );
};

const UsageStats = () => {
  const { data: user, isLoading } = useSWR(USERPATH, fetcher);

  if (isLoading) return <LoadingDots />;

  if (user?.email)
    return (
      <label>
        Usage - {user?.usage}/{user?.usageLimit}
      </label>
    );

  return <></>;
};
