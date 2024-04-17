import type { ITask } from '../../interfaces/intarfeces'
import { stylesStatus } from '../../constants/FrontendConstants'
export default function Task({ task, displayTask }: { task: ITask, displayTask: (task: ITask) => void }) {
    return <div key={crypto.randomUUID()} className={`cursor-pointer ${stylesStatus[task.code].bg} p-4 rounded-lg `} onClick={() => displayTask(task)}>
        <div className='flex justify-between items-center'>
            <p className='flex gap-3 items-center '><span className='bg-[#F8FAFC] p-2 rounded-lg h-11 w-11 flex items-center justify-center text-2xl'>{task.icon}</span> <span className='text-xl font-semibold'>{task.name}</span></p>
            <span className={`${stylesStatus[task.code].bgIcon} p-2 h-11 w-11  rounded-lg text-2xl flex items-center justify-center`}>{stylesStatus[task.code].icon}</span>
        </div>
        <p className='ms-14  font-light text-[#2B333F]'>{task.description}</p>
    </div>




}
