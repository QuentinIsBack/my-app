import './style.css'

type PageType = {
    show: boolean,
    information: string

    children: JSX.Element
}
export const BecomeBuilder = ({ 
    show,
    information,

    children 
}: PageType) => {

    return (
        <>
            <div className="grid grid-cols-2 h-full w-full">
                <div className={`relative ${SBthemes.home}`}>
                    <div className="absolute px-24 top-1/2 -translate-y-1/2 font-semibold text-4xl text-white">
                        {information}
                    </div>
                </div>
                <div className="relative h-full">
                    <div className="absolute top-0 h-[var(--top--become)] w-full border-b">
                      
                    </div>
                    <div className='absolute top-[var(--top--become)] bottom-[var(--bottom--become)] w-full'>
                        {children}
                    </div>
                    <div className="absolute bottom-0 h-[var(--bottom--become)] w-full border-t">

                    </div>
                </div>
            </div>
        </>
    )
}

BecomeBuilder.defaultProps = {
    show: false
}

export const SBthemes = {
    home: "bg-color-gradient-bnb",
};