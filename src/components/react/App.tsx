import { useEffect, type ChangeEvent, useReducer } from 'react';
import AddRoundDuotone from './icons/AddRoundDuotoneIcon';
import DoneRoundIcon from './icons/DoneRoundIcon';
import Logo from './icons/LogoIcon';
import TrashIcon from './icons/TrashIcon';
import EditIcon from './icons/EditIcon';
import CloseRing from './icons/CloseRing';
import { Toaster, toast } from 'sonner'
import { type ITask } from '../../interfaces/intarfeces'
import Task from './Task';
import { initialTask } from '../../constants/FrontendConstants'
import Icon from './Icon';
import Status from './Status';
import { requestGetTasks, requestUpsertTasks, requestDeleteTasks } from '../../services/tasks';
import SkeletonTask from './SkeletonTask';
import { tasksReducer } from '../../reducers/taskReducer';






export default function App({ boardId }: { boardId: string }) {

    const [state, dispatch] = useReducer(tasksReducer, {
        tasks: null,
        listStatus: [],
        icons: [],
        task: initialTask,
        upsert: 'create',
        showModal: false
    });

    const fetchData = () => {
        requestGetTasks({ boardId }).then((data) => {
            dispatch({
                type: 'FETCH_DATA',
                payload: {
                    tasks: data.tasks,
                    listStatus: data.listStatus,
                    icons: data.icons
                }
            })
        })
    }
    useEffect(() => {
        fetchData()
    }, [])

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (state.task.name === '') {
            toast.error('The field name is required')
            return
        }
        const sendTask = { ...state.task, board_id: state.upsert == 'create' ? boardId : state.task.board_id, id: state.upsert == 'create' ? '0' : state.task!.id.toString() }

        requestUpsertTasks({ upsert: state.upsert, sendTask }).then((data) => {
            
            dispatch({
                type: 'UPSERT_TASK',
                payload: {
                    upsert: 'create',
                    task: initialTask,
                    showModal: false
                }
            })
            toast.success(data.message)
            fetchData()
        })
    };
    const deleteTask = (id: (number | string)) => {
        if (id == "") return
        toast('Are you sure to delete this task?', {
            action: {
                label: 'Delete',
                onClick: () => {
                    requestDeleteTasks(id).then((data) => {
                        fetchData()
                        dispatch({
                            type: 'DELETE_TASK',
                            payload: {
                                task: initialTask,
                                showModal: false
                            }

                        })
                        toast.success(data.message)
                    })
                }
            },
            cancel: {
                label: 'Cancel',
                onClick: () => ''
            }
        })

    }
    const displayForm = () => {
        dispatch({
            type: 'DISPLAY_FORM',
            payload: {
                task: initialTask,
                showModal: true
            }

        })

    }
    const displayTask = (task: ITask) => {
        dispatch({
            type: 'DISPLAY_TASK',
            payload: {
                upsert: 'update',
                task: task,
                showModal: true
            }
        })

    }
    const updateIconTask = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'UPDATE_ICON_TASK',
            payload: {
                icon_id: parseInt(e.target.value)
            }
        })
    }

    const updateStatusTask = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'UPDATE_STATUS_TASK',
            payload: {
                status_id: parseInt(e.target.value)
            }
        })
    }






    return (
        <main className='min-h-screen  h-screen  xl:mx-[400px] lg:mx-[300px] mx-[50px] mt-[60px] '>
            <h1 className='flex text-4xl gap-2'><Logo /> <span>My Task Board </span><EditIcon /></h1>
            <p className='ms-12 mt-4 mb-9'>Tasks to keep organised</p>
            <section className='flex flex-col gap-4 mb-[80px]'>
                <div className='flex flex-col gap-4'>
                    {
                        state.tasks ?
                            (state.tasks.length > 0 ?
                                state.tasks.map(task => (
                                    <Task
                                        key={crypto.randomUUID()}
                                        task={task}
                                        displayTask={displayTask}
                                    />
                                )) : <h2 className='text-4xl'>Not data found</h2>)
                            : <SkeletonTask />


                    }


                </div>
                <p className='cursor-pointer bg-[#F5E8D5] p-4 rounded-lg flex gap-3 items-center font-semibold' onClick={displayForm}><span className='p-2 h-11 w-11 bg-[#E9A23B] flex items-center justify-center rounded-lg'><AddRoundDuotone /></span> Add new task</p>
            </section>


            {
                state.showModal && <section className={`fixed h-screen bg-[#00000033] w-full top-0 left-0`} >
                    <div className={`fixed overflow-y-auto transition-[right] ease-in-out delay-700 ${state.showModal ? 'right-4' : 'right-[-1000px]'} top-4 bottom-8 p-4 h-[95vh] rounded-lg bg-[#FFFFFF] ${window.innerWidth>=640?'w-5/12':'w-[calc(100%-2rem)]' }`}>
                        <h1 className='font-semibold text-lg flex items-center justify-between'> Task details<span className='p-1 border rounded-md cursor-pointer' onClick={() => dispatch({ type: 'HIDE_FORM', payload: { showModal: false } })}><CloseRing bgColor='#F7D4D3' iconColor='#DD524C' /></span></h1>
                        <form onSubmit={handleOnSubmit}>
                            <fieldset className='mt-4'>
                                <legend className='text-xs text-[#97A3B6] font-medium'>Task name</legend>

                                <input type='text'
                                    placeholder='Go to the gym'
                                    className='w-full rounded-lg px-4 py-1 outline-none border border-slate-300 focus:border-2 focus:border-[#3662E3] font-light'
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch({ type: 'UPDATE_NAME_TASK', payload: { name: e.target.value } })}
                                    value={state.task.name}
                                />

                            </fieldset>
                            <fieldset className='mt-4'>
                                <legend className='text-xs text-[#97A3B6] font-medium'>Description</legend>

                                <textarea
                                    placeholder='Tuesday, Thursday and Saturday'
                                    name='description'
                                    rows={5}
                                    className='px-4 py-1 resize-none w-full rounded-lg outline-none border border-slate-300 focus:border-2 focus:border-[#3662E3] font-light'
                                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => dispatch({ type: 'UPDATE_DESCRIPTION_TASK', payload: { description: e.target.value } })}
                                    value={state.task.description}
                                ></textarea>

                            </fieldset>
                            <fieldset className='mt-4'>
                                <legend className='text-xs text-[#97A3B6] font-medium'>Icon</legend>
                                <fieldset className='flex gap-4'>
                                    {
                                        state.icons.map((icon, index) => (
                                            <Icon
                                            key={crypto.randomUUID()}
                                                task={state.task}
                                                icon={icon}
                                                updateIcon={updateIconTask}

                                            />
                                        ))
                                    }

                                </fieldset>



                            </fieldset>
                            <fieldset className='mt-4'>
                                <legend className='text-xs text-[#97A3B6] font-medium'>Status</legend>
                                <fieldset className='grid grid-cols-2  gap-4' >
                                    {
                                        state.listStatus.map((status, index) => (
                                            <Status
                                                key={crypto.randomUUID()}
                                                status={status}
                                                task={state.task}
                                                updateStatus={updateStatusTask}

                                            />

                                        ))

                                    }
                                </fieldset>
                            </fieldset>
                            <fieldset className='float-end mt-11 flex gap-3'>
                                <button className='flex gap-2 rounded-full bg-[#97A3B6] text-[#F8FAFC] px-4 py-[6px] items-center justify-center text-xs font-medium' type='button' onClick={(event) => deleteTask(state.task.id == 0 ? '' : state.task.id)}>Delete<TrashIcon /></button><button className='flex gap-2 rounded-full bg-[#3662E3] text-[#F8FAFC] px-5 py-[6px] items-center justify-center text-xs font-medium' >Save <DoneRoundIcon /></button>
                            </fieldset>
                        </form>
                    </div>
                </section>
            }
            <Toaster position='top-right' richColors />
        </main>
    )
}
