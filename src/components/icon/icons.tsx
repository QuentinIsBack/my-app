import * as Icons from "react-icons/myiconsT"

type ComponentType = { 
    name: string,
    size: number,
}

export default function Icon({
    name,
    size,  
}: ComponentType) { 
    const IconT = (Icons as any)[name];
    return (<IconT size={size} />)
} 