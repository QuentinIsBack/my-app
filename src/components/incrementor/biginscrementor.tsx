import { IoAdd, IoRemove } from "react-icons/io5"

type Type = {
    id: string
    name: string
    value: number
    minValue: number
    maxValue: number
    onAdd: ()=>void
    onRemove: ()=>void
    onChange: ()=>void
    placeholder: string
}
export const BigIncrementor = ({  
    id,
    name,
    value,
    minValue,
    maxValue,
    onAdd,
    onRemove,
    onChange,
    placeholder
}: Type) => {

    const remove = () => {
        if (value > minValue){
            onRemove()
        }
    }

    const add = () => {
        if (value < maxValue){
            onAdd()
        }
    }

    return (
        <>
                <div className='flex flex-row items-center font-medium text-3xl space-x-5'>
                    <button onClick={remove} className={`flex items-center outline outline-1 ${value <= minValue ? 'outline-gray-200 cursor-not-allowed' : 'outline-gray-400'} rounded-full p-2`}><IoRemove color={`${value <= minValue ? '#e5e7eb' : '#9ca3af'}`} size={20} /></button>
                    <input onChange={onChange} type='text' value={value} id={id} name={name} className='w-80 h-24  focus:outline-none animation duration-200 ring-gray-400 ring-1 focus:ring-2 focus:ring-black rounded-lg text-center text-gray-700 font-semibold text-5xl placeholder:text-gray-500' placeholder={placeholder} />
                    <button onClick={add} className={`flex items-center outline outline-1 ${value >= maxValue ? 'outline-gray-200 cursor-not-allowed' : 'outline-gray-400'}  rounded-full p-2`}><IoAdd  color={`${value >= maxValue ? '#e5e7eb' : '#9ca3af'}`}  size={20} /></button>
                </div>
        </>
    )
}

BigIncrementor.defaultProps = {
    value: 0,
    minValue: 1,
    maxValue: 10000000,
}