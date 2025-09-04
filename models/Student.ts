export default class Student {
    name: string;
    email: string;
    nic: string;
    address: string;
    program: string;

    constructor(name: string, email: string, nic: string, address: string, program: string) {
        this.name = name;
        this.email = email;
        this.nic = nic;
        this.address = address;
        this.program = program;
    }
}