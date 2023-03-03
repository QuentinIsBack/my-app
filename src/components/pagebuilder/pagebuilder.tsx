import { useTitle } from "../../hooks/useTitle"

type PageType = {
    title: string | "HubNest"
    navbar: any | undefined,
    footer: any | undefined,
    show: boolean | false,

    children: JSX.Element
}

export const PageBuilder = ({
    title,
    navbar,
    footer,
    children,
    show,
}: PageType) => {
    useTitle(title+" - HubNest")
    return (
        <>
            {show &&
                <div className='flex flex-col h-screen w-screen'>
                    <header className='z-50 grow-0'>
                        {navbar}
                    </header>
                    <div className='grow'>
                        {children}
                    </div>
                    <footer className='bottom-0 grow-0 bg-red-800'>
                        {footer}
                    </footer>
                </div>
            }
        </>
    )
}

PageBuilder.defaultProps = {
    navbar: undefined,
    footer: undefined,
    show: true
}