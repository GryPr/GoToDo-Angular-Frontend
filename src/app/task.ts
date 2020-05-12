export interface Task {
    ID: number;
    description: string;
    completion: boolean;
    node: number;
}

export interface TaskCreation {
    description: string;
    completion: boolean;
}