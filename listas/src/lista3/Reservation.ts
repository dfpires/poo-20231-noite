import {Passenger} from './Passenger'
import {Flight} from './Flight'

class Reservation {
    private id: number
    private date: Date
    private passenger: Passenger // agregação
    private flight: Flight // agregação

    constructor(id: number, date: Date, passenger: Passenger, flight: Flight){
        this.setId(id); this.setDate(date); this.setPassenger(passenger); this.setFlight(flight)
    }
    setId(id: number){
        this.id = id
    }
    setDate(date: Date){
        this.date = date
    } 
    setPassenger(passenger: Passenger){
        this.passenger = passenger
    }
    setFlight(flight: Flight){
        this.flight = flight
    }  
    toString(): string{
        return `Id: ${this.id} Date: ${this.date} Passenger: ${this.passenger.toString()} Flight: ${this.flight.toString()}}`
    }
}
let objPassenger = new Passenger(1, 'João Carlos', '123')
let objFlight = new Flight(100, 'Ribeirão Preto', 'Salvador')

let objReservation = new Reservation(1000, new Date(), objPassenger, objFlight)
console.log(objReservation.toString())