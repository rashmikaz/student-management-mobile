export default class Program {
    id?: number;
    name: string;
    duration: number;

    constructor(name: string, duration: number, id?: number) {
        this.id = id;
        this.name = name;
        this.duration = duration;
    }
}
