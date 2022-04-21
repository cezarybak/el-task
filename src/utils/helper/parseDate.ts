import dayjs from "dayjs";

import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const parseData = (date: string | undefined) => {
  const daysSpend = dayjs().diff(dayjs(date), "days");

  switch (true) {
    case daysSpend < 0:
      return "today";
    case daysSpend === 0:
      return "yesterday";
    case daysSpend <= 31:
      return `${daysSpend} days ago`;
    case daysSpend <= 365:
      return `on ${dayjs(date).format("D MMM")}`;
    default:
      return `on ${dayjs(date).format("D MMM YYYY")}`;
  }
};

export default parseData;
