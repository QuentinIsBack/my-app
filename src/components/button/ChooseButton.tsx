import { RadioGroup } from '@headlessui/react'
import Icon from '../icon/icons'

type Type = {
    list: any,
    selected: any,
    setSelected: any,
    style: string
    align: string
    card: string
}
export const ChooseButton = ({ list, selected, setSelected, style, align, card }: Type) => {
    return (
        <RadioGroup className={'w-full'} value={selected} onChange={setSelected}>
            <div className={`${style}`}>
                {list && Object.values(list).map((plan: any) => (
                    <RadioGroup.Option key={plan.id} value={plan} className={({ active, checked }) =>
                        `${active && 'outline-supergray bg-gray-50 '}
                        ${checked && 'outline-supergray bg-gray-50 outline-2'}
                        select-none active:scale-98 px-6 py-8 cursor-pointer bg-white rounded-xl hover:bg-stone-50 outline outline-1 outline-gray-200 hover:outline-2 hover:outline-supergray flex items-center w-full duration-100 animation overflow-hidden`
                    }>
                        {({ active, checked }) => (
                            <div className={`flex w-full items-center justify-between`}>
                                <div className="w-full">
                                    <RadioGroup.Label as="div" className={`w-full font-medium text-lg text-supergray`} >
                                        <div className={`flex ${align} items-center`}>
                                            {plan.icon && <Icon size={30} name={plan.icon} />}
                                            <div>{plan.title}</div>
                                        </div>
                                    </RadioGroup.Label>
                                    <RadioGroup.Description as="span" className={`text-left w-full font-base text-sm text-supergray/80`} >
                                        <div>{plan.description}</div>
                                    </RadioGroup.Description>
                                </div>
                            </div>
                        )}
                    </RadioGroup.Option>
                ))}
            </div>
        </RadioGroup>
    )
}


ChooseButton.defaultProps = {
    style: "space-y-4",
    align: "flex-row space-x-4",
    card: ""
}