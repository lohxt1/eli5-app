import { WHITELISTED_EMAIL_DOMAINS } from "@/lib/constants";

const formatter = new Intl.RelativeTimeFormat(undefined, {
  numeric: "auto",
});

type RelativeTimeFormatUnit =
  | "year"
  | "years"
  | "quarter"
  | "quarters"
  | "month"
  | "months"
  | "week"
  | "weeks"
  | "day"
  | "days"
  | "hour"
  | "hours"
  | "minute"
  | "minutes"
  | "second"
  | "seconds";

type DivisionType = {
  amount: number;
  name: RelativeTimeFormatUnit;
};

const DIVISIONS: DivisionType[] = [
  { amount: 60, name: "seconds" },
  { amount: 60, name: "minutes" },
  { amount: 24, name: "hours" },
  { amount: 7, name: "days" },
  { amount: 4.34524, name: "weeks" },
  { amount: 12, name: "months" },
  { amount: Number.POSITIVE_INFINITY, name: "years" },
];

function formatTimeAgo(date) {
  let duration = (new Date(date).valueOf() - new Date().valueOf()) / 1000;
  for (let i = 0; i <= DIVISIONS.length; i++) {
    const division = DIVISIONS[i];
    if (Math.abs(duration) < division.amount) {
      return formatter.format(Math.round(duration), division.name);
    }
    duration /= division.amount;
  }
}

let isEmailValid = (x) =>
  WHITELISTED_EMAIL_DOMAINS.some((y) => new RegExp(`@.*?(${y})`).test(x));

export { formatTimeAgo, isEmailValid };
