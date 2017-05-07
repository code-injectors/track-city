export class municipalityFilter {
    constructor(
        public search:filter
    ){}
}

class filter{
    constructor(
        public value: any,
        public title: string
    ){}
}