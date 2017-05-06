export class userFilter {
    constructor(
        public search: filter, 
        public role: filter, 
        public sort:filter
    ){}
}

class filter{
    constructor(
        public value: any,
        public title: string
    ){}
}