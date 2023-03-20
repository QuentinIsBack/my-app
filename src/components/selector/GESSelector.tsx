type Type = {
    defaultValue: string,
    onChange: (e: string) => void,
}

export const GESSelector = ({ defaultValue, onChange }: Type) => {
    return (
        <div className="relative w-full">
            <div className="grid grid-cols-7 text-base font-semibold text-supergray rounded-md w-full ring-1 ring-stone-400 ring-none">
                <button onClick={(e) => onChange("a")} className={`outline-none rounded-l-md text-center bg-purple-300 flex justify-center py-3 ${defaultValue == "a" && 'ring-2 rounded-md z-50'} hover:ring-2 hover:z-50 hover:rounded-md ring-black`}>A</button>
                <button onClick={(e) => onChange("b")} className={`outline-none text-center bg-purple-400 flex justify-center py-3 hover:ring-2 ${defaultValue == "b" && 'ring-2 rounded-md z-50'} hover:z-50 hover:rounded-md ring-black`}>B</button>
                <button onClick={(e) => onChange("c")} className={`outline-none text-center bg-purple-500 flex justify-center py-3 hover:ring-2 ${defaultValue == "c" && 'ring-2 rounded-md z-50'} hover:z-50 hover:rounded-md ring-black`}>C</button>
                <button onClick={(e) => onChange("d")} className={`outline-none text-center bg-purple-600 flex justify-center py-3 hover:ring-2 ${defaultValue == "d" && 'ring-2 rounded-md z-50'} hover:z-50 hover:rounded-md ring-black`}>D</button>
                <button onClick={(e) => onChange("e")} className={`outline-none text-center bg-purple-700 flex justify-center py-3 hover:ring-2 ${defaultValue == "e" && 'ring-2 rounded-md z-50'} hover:z-50 hover:rounded-md ring-black`}>E</button>
                <button onClick={(e) => onChange("f")} className={`outline-none text-center bg-purple-800 flex justify-center py-3 hover:ring-2 ${defaultValue == "f" && 'ring-2 rounded-md z-50'} hover:z-50 hover:rounded-md ring-black`}>F</button>
                <button onClick={(e) => onChange("g")} className={`outline-none rounded-r-md text-center bg-purple-900 flex justify-center py-3 hover:ring-2 ${defaultValue == "g" && 'ring-2 rounded-md z-50'} hover:z-50 hover:rounded-md ring-black`}>G</button>
            </div>
        </div>
    )
}