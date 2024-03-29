import Icon from "../icon/icons"

type Type = {
    title: string
    value: string | number | any
    icon: string
}
export const InfoButton = ({ title, value, icon }: Type) => {
    return (
        <>
            <div className='flex flex-row space-x-4 justify-start items-center'>
                <div className='flex flex-col'>
                    <Icon name={icon} size={30} />
                </div>
                <div className="flex flex-col space-y-0.5 w-full">
                    <div className="text-sm font-normal text-supergray">
                        {title}
                    </div>
                    <div className="text-base font-semibold text-supergray">
                        {value}
                    </div>
                </div>
            </div>
        </>
    )
}