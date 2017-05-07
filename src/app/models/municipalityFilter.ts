export class municipalityFilter {
    constructor(
        public search:filter,
        public status:filter,
        public category:filter,
        public sort:filter,
    ){}
}

class filter{
    constructor(
        public value: any,
        public title: string
    ){}
}