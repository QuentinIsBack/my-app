
const IThemes = {
    "text": "mt-4 underline font-normal font-semibold text-supergray leading-snug hover:bg-gray-100 rounded-lg px-3 py-2 -translate-x-3",
    "btn": "mt-6 rounded-lg font-medium text-base text-supergray outline outline-1 outline-stone-400 hover:outline-2 hover:outline-black px-5 py-2.5"
}

type Type = {
    title: string
    theme: string
    onClick: ()=>void
}
export const ContenerButton = ({
    title,
    theme,
    onClick
}: Type) => {
    return (
        <button 
            className={theme}
            onClick={onClick} 
            >
        {title}
        </button>
    )
}

ContenerButton.defaultProps = {
    theme: IThemes.text,
    onClick: undefined
};