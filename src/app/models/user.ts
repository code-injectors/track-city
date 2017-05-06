export class User {
    constructor(
        public id: any, 
        public email: string, 
        public password:string,
        public firstName:string,
        public lastName:string,
        public municipality:string,
        public role:any,
        public content:any
    ){}
}