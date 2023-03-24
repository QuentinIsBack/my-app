import './contener.css'

// Application
type Prop = {
    name: string,
    children: JSX.Element,
}
export const HostContener = ({
    name,
    children
}: Prop) => {
    return (
        <div className="hostcontener">
            <div className="contenertitle">
                {name}
            </div>
            {children}
        </div>
    )
}
