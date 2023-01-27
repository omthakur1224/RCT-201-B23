export enum TodoStatus{
    Pending="Pending",
    Success="Success",
    Process="Process"
}
export type TodoType={
    title:string,
    id?:number,
    status:TodoStatus.Pending
}
