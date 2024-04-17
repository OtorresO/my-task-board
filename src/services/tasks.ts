import { toast } from "sonner";
import type { ITask } from "../interfaces/intarfeces";

export async function requestGetTasks({ boardId }: { boardId: string }) {
    try {
        const res = await fetch('/api/getTasks.json', {
            method: 'POST',
            body: JSON.stringify({ boardId: boardId })
        });
        if (!res.ok) {
            throw new Error('There was a problem retrieving tasks: ' + res.statusText);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        throw new Error('There was a problem retrieving tasks. Please try again later.');
    }
}


export async function requestUpsertTasks({ upsert, sendTask }: { upsert: string, sendTask: ITask }) {
    console.log(upsert,sendTask)
    return fetch('/api/task', {
        method: upsert == 'create' ? 'POST' : 'PUT',
        body: JSON.stringify(sendTask)
    }).then(res => {
        if (!res.ok) {
            throw new Error("There was a problem creating/updating the task")
            return
        };

        return res.json()
    }).then(data => {
        return data
    }).catch(error => {

        toast.error('There was a problem creating/updating the task. Please try again later.');
    })
}


export async function requestDeleteTasks(id: (number | string)) {


    return fetch('/api/task', {
        method: 'DELETE',
        body: JSON.stringify(id)
    }).then(res => {
        if (!res.ok) {
            toast.error('There was a problem deleting the task')
            throw new Error("There was a problem deleting the task");

        }
        return res.json()
    })
        .then(data => {
            return data
        }).catch(error => {
            toast.error('There was a problem creating/updating the task. Please try again later.');
        })


}