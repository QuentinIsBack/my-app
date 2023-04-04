import NewHost, { IAssets, IBasic } from "../data/NewHost.data";
import NewUser, { IAll, IEssentials, IFolder, IPayslip, IRessources,  } from "../data/NewUser.data";

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
            ressources: initRessources({
                situation: data?.folder?.ressources?.situation ?? "",
                ressources: initAllRessources({
                    payslip: initPayslip({
                        payslip1: data?.folder?.ressources?.payslip?.payslip1 ?? "",
                        payslip2: data?.folder?.ressources?.payslip?.payslip2 ?? "",
                        payslip3: data?.folder?.ressources?.payslip?.payslip3 ?? "",
                    }),
                    salaryslips: data?.folder?.ressources?.salaryslips ?? "",
                })
            }),
        }),        
        data.agency ?? undefined,
    );
}

export function initFolder(options?: Partial<IFolder>): IFolder {
    const defaults = {
        essentials: initEssentials(),
        ressources: initRessources(),
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

export function initRessources(options?: Partial<IRessources>): IRessources {
    const defaults = {
        situation: "",
        ressources: initAllRessources()
    };

    return {
        ...defaults,
        ...options
    };
}

export function initAllRessources(options?: Partial<IAll>): IAll {
    const defaults = {
        payslip: initPayslip(),
        salaryslips: ""
    };

    return {
        ...defaults,
        ...options
    };
}

export function initPayslip(options?: Partial<IPayslip>): IPayslip {
    const defaults = {
        payslip1: "",
        payslip2: "",
        payslip3: "",
    };

    return {
        ...defaults,
        ...options
    };
}