import Icon from "../icon/icons"

type Type = {
    icon: string
    title: string 
    description: string
}
export const LongBarItem = ({ icon, title, description }: Type) => {
    return (
        <div className="divstatusmodule">
            <div>
                <Icon name={icon} size={25} />
            </div>
            <div className="divstatuslineup">
                <div className="divstatustitle">
                    {title}
                </div>
                <div className="divstatusdesc">
                    {description}
                </div>
            </div>
        </div>
    )
}