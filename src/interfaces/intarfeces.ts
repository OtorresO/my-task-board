import type { ReactNode } from "react";

export interface ITask {
    id: number|string,
    status_id: number, 
    name: string, 
    description?: string, 
    icon_id: number, 
    code: number, 
    icon: string,
    board_id:number|string
}
export interface IStatus {
    id: number,
    name: string,
    code: 0 | 1 | 2 | 3
}

export interface IIcon {
    id: number,
    value: string
}

export interface StatusStyle {
    bg: string;
    bgIcon: string;
    icon: ReactNode | null; 
}