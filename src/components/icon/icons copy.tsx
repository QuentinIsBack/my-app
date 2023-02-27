import * as Icons from "react-icons/myicons";

type ComponentType = { 
    name: string,
    size: number,
}

export default function Icon({
    name,
    size, 
}: ComponentType) {
    const IconT = (Icons as any)["IoHomeOutline"];
    return (<IconT size={size} />)
} 