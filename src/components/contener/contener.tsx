type Type = {
    title: string
    children: JSX.Element 
}
export const Contener = ({ title, children }: Type) => {
    return (
        <>
            <div className='contenerdiv'>
                <div className='contenertitle'>{title}</div>
                {children}
            </div>
        </>
    )
}