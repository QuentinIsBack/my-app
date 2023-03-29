import * as Icons from "react-icons/custom"

type ComponentType = { 
    name: string,
    size: number,
    className: string
}

export default function Icon({
    name,
    size,  
    className,
}: ComponentType) { 
    const IconT = (Icons as any)[name];
    return <IconT className={className} size={size} />
} 

Icon.defaultProps = {
    className: ""
}