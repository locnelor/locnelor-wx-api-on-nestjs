export type CreateMenuData = {
    button: {
        name: string
        sub_button?: {
            type: string
            name: string
            url?: string
            appid?: string
            pagepath?: string,
            key?: string
        }[]
        type?: string
    }[],
    matchrule?: {
        tag_id: string,
        sex: string,
        country: string,
        province: string,
        city: string,
        client_platform_type: string,
        language: string
    }
}
export type BatchgetMaterialData = {
    type: "image" | "video" | "voice" | "news",
    offset: number,
    count: number
}