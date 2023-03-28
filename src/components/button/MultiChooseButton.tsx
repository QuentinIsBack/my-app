import { RadioGroup } from '@headlessui/react'
import Icon from '../icon/icons'

type Type = {
    list: any,
    selected: string | undefined,
    setSelected: any,

}
export const MultiChooseButton = ({ list, selected, setSelected }: Type) => {
    return (
        <>
                {Object.values(list).map((o:any, i) => (
                    <button 
                        key={i}
                        onClick={()=>setSelected(o.id)} 
                        className={`${o.id === selected && "ring-supergray ring-2"} select-none active:scale-98 py-2 bg-white rounded-xl hover:bg-stone-50 ring-1 ring-gray-200 hover:ring-2 hover:ring-supergray flex items-center w-full duration-100 animation overflow-hidden`}>
                            <div className='text-left w-full font-medium text-lg text-supergray flex flex-col space-y-2 justify-center items-center'>
                                    {o.icon && <Icon size={30} name={o.icon} />}
                                    <div>{o.title}</div>                               
                            </div>
                    </button>
                ))}
        </>
    )
}
