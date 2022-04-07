import id from "@zyneex/id";
import path from "path";
import fs from "fs";

import time from "../utils/time";

class APIError {
    tags = new Map();

    constructor (message = "", code = 0, status = 500, capture = false) {
        this.id = id(32);

        this.message = message;
        this.code = code;
        this.status = status;

        this.getCaptured = capture;
    }

    setTag (key, value) {
        this.tags.set(key, value);
    }

    removeTag (key) {
        this.tags.delete(key);
    }

    capture () {
        const today = time();
        const _path = path.join(process.cwd(), "errors", this.id + ".json");

        const data = {};
        Array.from(this.tags).map(([key, value]) => data[key] = value);

        fs.writeFileSync(_path, JSON.stringify({
            id: this.id,
            created: today.format("MM/DD/YYYY - HH:mm:ss A [UTC]"),
            message: this.message,
            code: this.code,
            data,
        }, null, 2));

        return this.id;
    }
}

module.exports = APIError;
