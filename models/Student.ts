export default class Student {
    id?: number;
    firstName: string;
    email: string;
    nic: string;
    address: string;
    program: string;

    constructor(firstName: string, email: string, nic: string, address: string, program: string, id?: number) {
        this.id = id;
        this.firstName = firstName;
        this.email = email;
        this.nic = nic;
        this.address = address;
        this.program = program;
    }
}
