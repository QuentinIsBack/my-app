import { initFolder } from "../constructor/NewUser.constructor";

export default class NewUser {

    uuid: string;
    firstname: string;
    lastname: string;
    email: string;
    folder: IFolder;

    agency: string | undefined;

    constructor();
    constructor(uuid: string, firstname: string, lastname: string, email: string, folder: IFolder, agency: string);
    constructor(uuid?: string, firstname?: string, lastname?: string, email?: string, folder?: IFolder, agency?: string) {
        this.uuid = uuid ?? "";
        this.firstname = firstname ?? "";
        this.lastname = lastname ?? "";
        this.email = email ?? "";
        this.folder = folder ??initFolder();
        this.agency = agency ?? undefined
    }
}

export interface IFolder {
    essentials: IEssentials;
}
export interface IEssentials {
    proof_identity: string;
    proof_domicile: string;
}