import NewHost, { IAssets, IBasic } from "../data/NewHost.data";
import NewUser, { IEssentials, IFolder } from "../data/NewUser.data";

export const NewBuilder = (data: any, id: string) => {
    return new NewUser(
        id,
        data.firstname ?? "",
        data.lastname ?? "",
        data.email ?? "",
        initFolder({
            essentials: initEssentials({
                proof_identity: data?.folder?.essentials?.proof_identity ?? "",
                proof_domicile: data?.folder?.essentials?.proof_domicile ?? ""
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
        proof_identity: "",
        proof_domicile: "",
    };

    return {
        ...defaults,
        ...options
    };
}