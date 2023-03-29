import NewHost, { IAssets, IBasic } from "../data/NewHost.data";
import NewUser from "../data/NewUser.data";

export const NewBuilder = (data: any, id: string) => {
    return new NewUser(
        data.uid ?? id,
        data.firstname ?? "",
        data.lastname ?? "",
        data.email ?? "",
        data.folder ?? undefined,
        data.agency ?? undefined,
    );
}