import { Icon } from "../icon/icons"

type ComponentType = {
    onClick: any | undefined,
    iconN: string,

    children: JSX.Element
}

export const TipsButton = ({
    children,
    onClick,
    iconN
}: ComponentType) => {
    return (
        <button className={`duration-150 bg-white rounded-xl h-5.5rem hover:bg-gray-100 shadow-dropdown p-4`} onClick={onClick}>
            <div className="flex flex-row justify-center items-center space-x-6 px-4 max-h-full overflow-hidden">
                <div>
                    <Icon name={iconN} size={40} />
                </div>
                <div className="font-medium text-regal-gray text-sm w-64 text-left break-normal line-clamp-3">
                    {children}
                </div>

            </div>
        </button>
    )
}
TipsButton.defaultProps = {
    onClick: undefined
}