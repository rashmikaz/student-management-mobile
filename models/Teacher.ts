export default class Teacher {
    id?: number;
    fullName: string;
    email: string;
    nic: string;
    address: string;
    subject: string;

    constructor(fullName: string, email: string, nic: string, address: string, subject: string, id?: number) {
        this.id = id;
        this.fullName = fullName;
        this.email = email;
        this.nic = nic;
        this.address = address;
        this.subject = subject;
    }
}
