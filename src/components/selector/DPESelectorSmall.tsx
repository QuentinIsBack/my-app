type Type = {
    defaultValue: string,
}

export const DEPSelectorSmall = ({defaultValue}:Type) => {
    return (
        <div className="relative w-full">
            <div className="select-none grid grid-cols-7 text-base font-semibold text-supergray rounded-md w-full ring-1 ring-stone-400 ring-none">
                <button className={`outline-none rounded-l-md text-center bg-green-600 flex justify-center ${defaultValue == "a" && " scale-125 ring-black ring-1 rounded-md"}`}>A</button>
                <button className={`outline-none text-center bg-green-400 flex justify-center ${defaultValue == "b" && " scale-125 ring-black ring-1 rounded-md"} `}>B</button>
                <button className={`outline-none text-center bg-lime-400 flex justify-center ${defaultValue == "c" && " scale-125 ring-black ring-1 rounded-md"} `}>C</button>
                <button className={`outline-none text-center bg-yellow-300 flex justify-center ${defaultValue == "d" && " scale-125 ring-black ring-1 rounded-md"} `}>D</button>
                <button className={`outline-none text-center bg-orange-300 flex justify-center ${defaultValue == "e" && " scale-125 ring-black ring-1 rounded-md"} `}>E</button>
                <button className={`outline-none text-center bg-orange-400 flex justify-center  ${defaultValue == "f" && " scale-125 ring-black ring-1 rounded-md"} `}>F</button>
                <button className={`outline-none rounded-r-md text-center bg-red-500 flex justify-center ${defaultValue == "g" && " scale-125 ring-black ring-1 rounded-md"} `}>G</button>
            </div>
        </div>                    
    )
}