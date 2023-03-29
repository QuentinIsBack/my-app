export default class NewUser {

    uuid: string;
    firstname: string;
    lastname: string;
    email: string;
    folder: [] | undefined;

    agency: string | undefined;

    constructor();
    constructor(uuid: string, firstname: string, lastname: string, email: string, folder: [], agency: string);
    constructor(uuid?: string, firstname?: string, lastname?: string, email?: string, folder?: [], agency?: string) {
        this.uuid = uuid ?? "";
        this.firstname = firstname ?? "";
        this.lastname = lastname ?? "";
        this.email = email ?? "";
        this.folder = folder ?? undefined;
        this.agency = agency ?? undefined
    }
}