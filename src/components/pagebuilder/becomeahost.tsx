type PageType = {
    show: boolean,

    children: JSX.Element
}
export const BecomeBuilder = ({
    show,

    children
}: PageType) => {

    return (
        <>
            <div className="grid grid-cols-2 h-full w-full">
                <div className="relative">

                </div>
                <div className="relative">

                </div>
            </div>
        </>
    )
}

BecomeBuilder.defaultProps = {
    show: false
}