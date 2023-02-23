import * as Icons from "react-icons/myicons";

type ComponentType = { 
    name: string,
    size: number | undefined,
}

export const Icon = ({
    name,
    size,
}: ComponentType) => {
    const IconT = (Icons as any)[name];
    return (<IconT size={size} />)
}