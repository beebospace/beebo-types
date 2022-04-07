import id from "@zyneex/id";
import path from "path";
import fs from "fs";

import time from "../utils/time";

export default class APIError {
    id: string
    message: string
    code: number
    status: number

    getCaptured: boolean

    tags = new Map<string, any>();

    constructor (message: string = "", code: number = 0, status: number = 500, capture: boolean = false) {
        this.id = id(32);

        this.message = message;
        this.code = code;
        this.status = status;

        this.getCaptured = capture;
    }

    setTag (key: string, value: any) {
        this.tags.set(key, value);
    }

    removeTag (key: string) {
        this.tags.delete(key);
    }

    capture (): string {
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
