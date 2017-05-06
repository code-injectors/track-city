export class User {
    constructor(
        public id: Date, 
        public email: string, 
        public password:string,
        public firstName:string,
        public lastName:string,
        public municipality:string,
        public role:any,
    ){}
}