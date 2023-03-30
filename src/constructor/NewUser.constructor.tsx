import NewHost, { IAssets, IBasic } from "../data/NewHost.data";
import NewUser, { IEssentials, IFolder } from "../data/NewUser.data";

export const NewBuilder = (data: any, id: string) => {
    return new NewUser(
        data.uid ?? id,
        data.firstname ?? "",
        data.lastname ?? "",
        data.email ?? "",
        initFolder({
            essentials: initEssentials({
                administratif: data?.folder?.essentials?.administratif ?? ""
            }),      
        }),        
        data.agency ?? undefined,
    );
}

export function initFolder(options?: Partial<IFolder>): IFolder {
    const defaults = {
        essentials: initEssentials(),
    };

    return {
        ...defaults,
        ...options
    };
}

export function initEssentials(options?: Partial<IEssentials>): IEssentials {
    const defaults = {
        administratif: "",
    };

    return {
        ...defaults,
        ...options
    };
}