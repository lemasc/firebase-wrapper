export type ConfigWithName = {
    name?: string
}

type DefaultAppResult = {
    isDefaultApp: boolean,
    withConfig: boolean
}

export function checkDefaultApp(nameOrConfig?: ConfigWithName | string): DefaultAppResult {
    const isNameEmpty = typeof nameOrConfig === "undefined"
    const withConfig = typeof nameOrConfig === "object"
    const isDefaultApp = isNameEmpty ||
        (withConfig &&
            typeof nameOrConfig.name === "undefined");
    return {
        isDefaultApp,
        withConfig
    }
}