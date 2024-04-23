export interface ResError {
    errcode: string
    errmsg: string
}

export type CreateQrcodeRes = {
    ticket: string
    expire_seconds: number
    url: string
}