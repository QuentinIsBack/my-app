export const IThemeBtn = {
    default: "rounded-md text-supergray text-base font-medium ring-1 ring-supergray bg-white px-6 py-2.5"
}
type Type = {
    title: string,
    theme: string
}
export const Button = ({ title, theme }: Type) => {
    return (
        <button className={`${theme}`}>
            {title}
        </button>
    )
}