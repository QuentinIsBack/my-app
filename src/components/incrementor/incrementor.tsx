import { IoRemove, IoAdd } from 'react-icons/io5'

type Type = {
    id: string
    name: string
    value: any
    setValue: any
    minValue: number
    maxValue: number
}
export const Incrementor = ({  
    name,
    value,
    setValue,
    minValue,
    maxValue,
}: Type) => {

    const remove = () => {
        if (value > minValue){
            setValue(value-1)
        }
    }

    const add = () => {
        if (value < maxValue){
            setValue(value+1)
        }
    }

    return (
        <>
            <div className='flex flex-row justify-start items-center font-medium text-xl text-supergray space-x-8 select-none'>
                <div className='flex flex-row items-center space-x-5'>
                    <button onClick={remove} className={`flex items-center outline outline-1 ${value <= minValue ? 'outline-gray-200 cursor-not-allowed' : 'outline-gray-400'} rounded-full p-2`}><IoRemove color={`${value <= minValue ? '#e5e7eb' : '#9ca3af'}`} size={20} /></button>
                    <div className='font-medium text-xl'>{value}</div>
                    <button onClick={add} className={`flex items-center outline outline-1 ${value >= maxValue ? 'outline-gray-200 cursor-not-allowed' : 'outline-gray-400'}  rounded-full p-2`}><IoAdd  color={`${value >= maxValue ? '#e5e7eb' : '#9ca3af'}`}  size={20} /></button>
                </div>
                <div>{name}</div> 
            </div>
        </>
    )
}


Incrementor.defaultProps = {
    value: 0,
    minValue: 1,
    maxValue: 10000000,
}