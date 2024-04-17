import type { IIcon, IStatus, ITask } from "../interfaces/intarfeces";

interface AppState {
    tasks: ITask[] | null,
    listStatus: IStatus[],
    icons: IIcon[],
    task: ITask,
    upsert: 'create' | 'update',
    showModal: boolean
}
type TasksAction = { type: 'FETCH_DATA'; payload: { tasks: ITask[], listStatus: IStatus[], icons: IIcon[] } }
    | { type: 'UPSERT_TASK'; payload: { upsert: 'create' | 'update', task: ITask, showModal: boolean } }
    | { type: 'DELETE_TASK'; payload: { task: ITask, showModal: boolean } }
    | { type: 'DISPLAY_TASK'; payload: { upsert: 'create' | 'update', task: ITask, showModal: boolean } }
    | { type: 'UPDATE_NAME_TASK'; payload: { name: string } }
    | { type: 'UPDATE_DESCRIPTION_TASK'; payload: { description: string } }
    | { type: 'UPDATE_ICON_TASK', payload: { icon_id: number } }
    | { type: 'UPDATE_STATUS_TASK', payload: { status_id: number } }
    | { type: 'DISPLAY_FORM', payload: { task: ITask, showModal: boolean } }
    | { type: 'HIDE_FORM', payload: { showModal: boolean } }
    ;
export function tasksReducer(state: AppState, action: TasksAction): AppState {
    switch (action.type) {
        case 'FETCH_DATA':
            return { ...state, tasks: action.payload.tasks, icons: action.payload.icons, listStatus: action.payload.listStatus };
        case 'UPSERT_TASK':
            return { ...state, upsert: action.payload.upsert, task: action.payload.task, showModal: action.payload.showModal };
        case 'DELETE_TASK':
            return { ...state, task: action.payload.task, showModal: action.payload.showModal };
        case 'DISPLAY_TASK':
            return { ...state, upsert: action.payload.upsert, task: action.payload.task, showModal: action.payload.showModal }
        case 'UPDATE_ICON_TASK':
            return { ...state, task: { ...state.task, icon_id: action.payload.icon_id } }
        case 'UPDATE_NAME_TASK':
            return { ...state, task: { ...state.task, name: action.payload.name } }
        case 'UPDATE_DESCRIPTION_TASK':
            return { ...state, task: { ...state.task, description: action.payload.description } }
        case 'UPDATE_STATUS_TASK':
            return { ...state, task: { ...state.task, status_id: action.payload.status_id } }
        case 'DISPLAY_FORM':
            return { ...state, task: action.payload.task, showModal: action.payload.showModal }
        case 'HIDE_FORM':
            return { ...state, showModal: action.payload.showModal }
        default:
            return state;
    }
}
