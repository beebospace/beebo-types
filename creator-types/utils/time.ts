import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import advancedFormat from "dayjs/plugin/advancedFormat";
import relativeTime from "dayjs/plugin/relativeTime";

import dayjs from "dayjs";

declare module "dayjs" {
    interface DayjsTimezone {
      (): Dayjs
    }
  }

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(advancedFormat);
dayjs.extend(relativeTime);

export default dayjs.tz;
