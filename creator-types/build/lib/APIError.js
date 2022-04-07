"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const id_1 = __importDefault(require("@zyneex/id"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const time_1 = __importDefault(require("../utils/time"));
class APIError {
    constructor(message = "", code = 0, status = 500, capture = false) {
        this.tags = new Map();
        this.id = (0, id_1.default)(32);
        this.message = message;
        this.code = code;
        this.status = status;
        this.getCaptured = capture;
    }
    setTag(key, value) {
        this.tags.set(key, value);
    }
    removeTag(key) {
        this.tags.delete(key);
    }
    capture() {
        const today = (0, time_1.default)();
        const _path = path_1.default.join(process.cwd(), "errors", this.id + ".json");
        const data = {};
        Array.from(this.tags).map(([key, value]) => data[key] = value);
        fs_1.default.writeFileSync(_path, JSON.stringify({
            id: this.id,
            created: today.format("MM/DD/YYYY - HH:mm:ss A [UTC]"),
            message: this.message,
            code: this.code,
            data,
        }, null, 2));
        return this.id;
    }
}
exports.default = APIError;
