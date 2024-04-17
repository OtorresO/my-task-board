import CloseRingDuotone from "../components/react/icons/CloseRingDuotoneIcon"
import DoneRoundDuotone from "../components/react/icons/DoneRoundDuotoneIcon"
import TimeAtackDuotone from "../components/react/icons/TimeAtackDuotoneIcon"
import type { ITask, StatusStyle } from "../interfaces/intarfeces"

export const stylesStatus: Record<number, StatusStyle> = {
    0: {
        bg: 'bg-[#F5D565]',
        bgIcon: 'bg-[#E9A23B]',
        icon: <TimeAtackDuotone />
    },
    1: {
        bg: 'bg-[#A0ECB1]',
        bgIcon: 'bg-[#32D657]',
        icon: <DoneRoundDuotone />
    },
    2: {
        bg: 'bg-[#F7D4D3]',
        bgIcon: 'bg-[#DD524C]',
        icon: <CloseRingDuotone />
    },
    3: {
        bg: 'bg-[#E3E8EF]',
        bgIcon: '',
        icon: null
    }
}
export const initialTask: ITask = {
    name: '',
    id: 0,
    status_id: 1,
    description: '',
    icon_id: 1,
    code: 0,
    icon: '',
}