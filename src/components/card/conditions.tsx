import { IoCheckmarkOutline, IoCloseOutline } from 'react-icons/io5';
import Icon from '../icon/icons';

type CompType = {
    title: string,
    free: boolean
}
export const Condition = ({
    title,
    free
}:CompType) => {
    return (
        <div className='flex items-center text-base font-medium leading-snug'>
            <span className='mr-2'>{free ?  <IoCheckmarkOutline className="stroke-green-600"  size={20} /> : <IoCloseOutline className="stroke-pink-600" size={20}/>}</span>
            {title}
        </div>
    )
}