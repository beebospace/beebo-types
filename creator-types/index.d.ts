import "dayjs/plugin/timezone";
import dayjs from "dayjs";

// API Error
export default class ApiError {
    id: string
    message: string
    code: number
    status: number

    getCaptured: boolean

    tags: Map<string, any>

    setTag (key: string, value: any): void

    removeTag (key: string): void

    capture (): string
}

// time
export const time: dayjs.DayjsTimezone;
