export type Category ={
    _id:string
    title:string,
    description:string,
    status:boolean
}

export type Jobs = {
    _id:string,
    postName:string,
    postDescription:string,
    location:string,
    experienceLevel:string,
    jobType:"full-time"| "part-time"|"remote" | "freelance"
    jobCategory:string,
    lastDate:Date,
    salary:number
}