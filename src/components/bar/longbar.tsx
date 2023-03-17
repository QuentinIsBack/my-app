type Type = {
    children: JSX.Element,
}
export const LongBar = ({children}: Type) => {
    return (
        <div className="divstatus">
            {children}
        </div>
    )
}

LongBar.defaultProps = {
    children: undefined
}