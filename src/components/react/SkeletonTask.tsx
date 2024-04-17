
export default function SkeletonTask() {
    return (
        <div className='flex flex-col gap-4 '>

            <div className={`cursor-pointer border border-gray-300 p-4 rounded-lg `}>
                <div className='flex justify-between items-center'>
                    <p className='flex gap-3 items-center w-full'><span className='bg-gray-400 p-2 rounded-lg h-11 w-11 flex items-center justify-center text-2xl animate-pulse'></span> <span className='text-xl rounded-full w-1/3 h-3 bg-gray-400 animate-pulse'></span></p>
                    <span className={`bg-gray-300 p-2 h-11 w-11  rounded-lg animate-pulse`}></span>
                </div>
                <p className='ms-14  rounded-full w-2/3 h-3 bg-gray-300 animate-pulse'></p>
            </div>

            <div className={`cursor-pointer border border-gray-300 p-4 rounded-lg `}>
                <div className='flex justify-between items-center'>
                    <p className='flex gap-3 items-center w-full'><span className='bg-gray-400 p-2 rounded-lg h-11 w-11 flex items-center justify-center text-2xl animate-pulse'></span> <span className='text-xl rounded-full w-1/3 h-3 bg-gray-400 animate-pulse'></span></p>
                    <span className={`bg-gray-300 p-2 h-11 w-11  rounded-lg animate-pulse`}></span>
                </div>
                <p className='ms-14  rounded-full w-2/3 h-3 bg-gray-300 animate-pulse'></p>
            </div>
            <div className={`cursor-pointer border border-gray-300 p-4 rounded-lg `}>
                <div className='flex justify-between items-center'>
                    <p className='flex gap-3 items-center w-full'><span className='bg-gray-400 p-2 rounded-lg h-11 w-11 flex items-center justify-center text-2xl animate-pulse'></span> <span className='text-xl rounded-full w-1/3 h-3 bg-gray-400 animate-pulse'></span></p>
                    <span className={`bg-gray-300 p-2 h-11 w-11  rounded-lg animate-pulse`}></span>
                </div>
                <p className='ms-14  rounded-full w-2/3 h-3 bg-gray-300 animate-pulse'></p>
            </div>



        </div>
    )
}
