import { initFolder } from "../constructor/NewUser.constructor";

export default class NewUser {

    uuid: string;
    firstname: string;
    lastname: string;
    email: string;
    folder: IFolder;

    agency: string | undefined;

    power: number;

    constructor();
    constructor(uuid: string, firstname: string, lastname: string, email: string, folder: IFolder, agency: string, power: number);
    constructor(uuid?: string, firstname?: string, lastname?: string, email?: string, folder?: IFolder, agency?: string, power?: number) {
        this.uuid = uuid ?? "";
        this.firstname = firstname ?? "";
        this.lastname = lastname ?? "";
        this.email = email ?? "";
        this.folder = folder ?? initFolder();
        this.agency = agency ?? undefined
        this.power = power ?? 0
    }
}

export interface IFolder {
    essentials: IEssentials;
    ressources: IRessources;
}
export interface IEssentials {
    proof_identity: string;
    proof_domicile: string;
}
export interface IRessources {
    situation: string;
    ressources: IAll;
}

export interface IAll {
    payslip: IPayslip;
    salaryslips: string;
}

export interface IPayslip {
    payslip1: string;
    payslip2: string;
    payslip3: string;
}
