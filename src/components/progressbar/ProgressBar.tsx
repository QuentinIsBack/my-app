type Type = {
    progressPercentage: number
}
export const ProgressBar = ({ progressPercentage }: Type) => {
    return (
        <div className='transition-all h-1.5 w-full bg-gray-300/80'>
            <div
                style={{ width: `${progressPercentage}%` }}
                className={`h-full bg-black `}>
            </div>
        </div>
    );
};