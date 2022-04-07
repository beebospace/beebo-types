const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");
const advancedFormat = require("dayjs/plugin/advancedFormat");
const relativeTime = require("dayjs/plugin/relativeTime");

const dayjs = require("dayjs");

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(advancedFormat);
dayjs.extend(relativeTime);

module.exports = dayjs.tz;
