import { RadioGroup } from '@headlessui/react'
import Icon from '../icon/icons'

type Type = {
    list: any,
    selected: any,
    setSelected: any,
}
export const ChooseButton = ({list, selected, setSelected}: Type) => {
    return (
        <RadioGroup className={'w-full'} value={selected} onChange={setSelected}>
            <div className="space-y-4">
                {list && Object.values(list).map((plan: any) => (
                    <RadioGroup.Option key={plan.id} value={plan} className={({ active, checked }) =>
                        `${active && 'outline-supergray bg-gray-50 '}
                        ${checked && 'outline-supergray bg-gray-50 '}
                        px-8 py-8 cursor-pointer bg-white rounded-xl hover:bg-gray-50 outline outline-2 outline-gray-200 hover:outline-2 hover:outline-supergray flex items-center w-full duration-100 animation`
                    }>
                        {({ active, checked }) => (
                            <div className="flex w-full items-center justify-between">
                                <div className="w-full">
                                    <RadioGroup.Label as="p" className={`text-left w-full font-medium text-lg text-supergray`} >
                                        <div className='flex items-center space-x-4'>
                                            {plan.icon&&<Icon size={30} name={plan.icon} />}
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