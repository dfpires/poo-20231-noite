import { CellPhone } from "./CellPhone";
import { Client } from "./Client";
import { Employee } from "./Employee";
import { Service } from "./Service";

class Attendance {
    private id: number; private date: Date;
    private client: Client
    private employee: Employee
    private service: Service

    constructor(id: number, date: Date, client: Client, employee: Employee, service: Service){
        this.id = id; this.date = date; this.client = client;
        this.employee = employee; this.service = service;
    }
    getService(): Service {
        return this.service
    }
    getClient(): Client {
        return this.client
    }
    getEmployee(): Employee {
        return this.employee
    }
    toString(): string {
        return `Id: ${this.id} Date: ${this.date} Client: ${this.client.toString()} Employee: ${this.employee.toString()} Service: ${this.service.toString()}`
    }

}
let obj1CellPhone = new CellPhone(1, 16981267732, 'Claro')

let objClient = new Client(1, "Carla", "123", obj1CellPhone) // cria cliente com 1 celular
let obj2CellPhone = new CellPhone(2, 16981267789, 'Vivo')
objClient.addCellPhone(obj2CellPhone) // cliente tem 2 celulares

let objEmployee = new Employee(0, "Leticia", 222)
let objService = new Service(100, "Escova", 80)

let objAttendance = new Attendance(20, new Date(), objClient, objEmployee, objService)
console.log(objAttendance.toString())
// mostrar apenas o preço do serviço do atendimento
console.log(objAttendance.getService().getPrice())
// mostrar apenas nome do cliente atendido
console.log(objAttendance.getClient().getName())
// mostrar apenas o código do empregado que atendeu
console.log(objAttendance.getEmployee().getCode())