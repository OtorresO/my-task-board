import type { ChangeEvent } from "react";
import { stylesStatus } from "../../constants/FrontendConstants";
import type { IStatus, ITask } from "../../interfaces/intarfeces";
import DoneRoundIcon from "./icons/DoneRoundIcon";

export default function Status({status,task,updateStatus}:{status:IStatus,task:ITask,updateStatus:(e: ChangeEvent<HTMLInputElement>)=>void}) {
    return (
        status.code != 3 && <fieldset key={crypto.randomUUID()} className={`border-2 rounded-2xl  ${status.id == task.status_id ? 'border-[#3662E3]' : 'border-slate-300'}`}>
            <label htmlFor={`status-${status.name}`} className='cursor-pointer flex items-center justify-between gap-4' >
                <span className='flex items-center '>
                    <span className={`w-9 h-9 flex items-center justify-center rounded-lg m-1 ${stylesStatus[status.code].bgIcon}`} >
                        <span className='flex items-center justify-center'>{stylesStatus[status.code].icon}</span>
                    </span>
                    <span>{status.name}</span>

                </span>
                {
                    status.id == task.status_id && <span className='bg-[#3662E3] rounded-full m-1 text-xs flex items-center justify-center p-[2px]'>
                        <DoneRoundIcon />
                    </span>
                }

            </label>
            <input defaultChecked={status.id == task.status_id} type='radio' id={`status-${status.name}`} onChange={updateStatus} name='status_id' value={status.id} style={{ display: 'none' }} />
        </fieldset>
    )
}
