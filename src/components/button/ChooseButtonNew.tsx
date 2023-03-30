import { RadioGroup } from '@headlessui/react'
import Icon from '../icon/icons'

type Type = {
    list: any,
    selected: string | undefined,
    setSelected: any,

}
export const ChooseButtonNew = ({ list, selected, setSelected }: Type) => {
    return (
        <>
                {Object.values(list).map((o:any, i) => (
                    <button 
                        key={i}
                        onClick={()=>setSelected(o.id)} 
                        className={`${o.id === selected && "ring-supergray ring-2"} select-none active:scale-98 px-6 py-8 bg-white rounded-xl hover:bg-stone-50 ring-1 ring-gray-200 hover:ring-2 hover:ring-supergray flex items-center w-full duration-100 animation overflow-hidden`}>
                        <div className='flex flex-col'>
                            <div className='text-left w-full font-medium text-lg text-supergray'>
                                <div className='flex flex-row space-x-4'>
                                    {o.icon && <Icon size={30} name={o.icon} />}
                                    <div>{o.title}</div>
                                </div>
                                
                               
                            </div>
                            <div className='text-left w-full font-base text-sm text-supergray/80'>
                                {o.description}
                            </div>
                        </div>
                    </button>
                ))}
        </>
    )
}
