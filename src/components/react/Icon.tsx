import type { ChangeEvent } from "react";
import type { ITask, IIcon } from "../../interfaces/intarfeces";

export default function Icon({ icon, task, updateIcon }: { icon: IIcon, task: ITask, updateIcon: (e: ChangeEvent<HTMLInputElement>) => void }) {
    return (
        <fieldset key={crypto.randomUUID()} className={`rounded-lg text-xl ${icon.id == task.icon_id ? 'bg-[#F5D565]' : 'bg-[#E3E8EF]'}`}>
            <label htmlFor={`icon-${icon.id}`} className='w-10 h-10 cursor-pointer flex items-center justify-center'>{icon.value}</label>
            <input defaultChecked={icon.id == task.icon_id} type='radio' name='icon_id' value={icon.id} id={`icon-${icon.id}`} style={{ display: 'none' }} onChange={(e: ChangeEvent<HTMLInputElement>) => updateIcon(e)} />
        </fieldset>
    )
}
