"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utc_1 = __importDefault(require("dayjs/plugin/utc"));
const timezone_1 = __importDefault(require("dayjs/plugin/timezone"));
const advancedFormat_1 = __importDefault(require("dayjs/plugin/advancedFormat"));
const relativeTime_1 = __importDefault(require("dayjs/plugin/relativeTime"));
const dayjs_1 = __importDefault(require("dayjs"));
dayjs_1.default.extend(utc_1.default);
dayjs_1.default.extend(timezone_1.default);
dayjs_1.default.extend(advancedFormat_1.default);
dayjs_1.default.extend(relativeTime_1.default);
exports.default = dayjs_1.default.tz;