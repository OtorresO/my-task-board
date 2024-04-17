export function getTask(board_id: string|number) {
    return [
        { name: 'Task in Progress', description: '', status_id: 1, board_id, icon_id: 6 },
        { name: 'Task Completed', description:'', status_id:2, board_id, icon_id:4 },
        { name: 'Task Won’t Do', description:'', status_id:3, board_id, icon_id:3 },
        { name:'Task To Do', description:'Work on a Challenge on devChanllenge.io,learn Typescript', status_id:4, board_id, icon_id:5 }

    ]


}
