
interface IStudent {
    _id: number;
    name?: string;
    student_id: number 
}
interface Attendee extends IStudent {
    date: string;
}

interface IStudentScan {
    _id: number ;
    event: number ;
    student: IStudent;
    date: string;
    _v: number;
}

interface IStudentResponse {
    status: number;
    message: string;
    attendees?: IStudentScan[];
}

export { IStudent, IStudentResponse, Attendee, IStudentScan }