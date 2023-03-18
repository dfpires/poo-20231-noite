export class Flight {
    private id: number;  private origin: string;  private destination: string
    constructor(id: number, origin: string, destination: string){
        this.setId(id); this.setOrigin(origin); this.setDestination(destination);
    }
    setId(id: number) {
        this.id = id
    }
    setOrigin(origin: string){
        this.origin = origin
    }
    setDestination(destination: string){
        this.destination = destination
    }
    toString(): string {
        return `{Id: ${this.id} Origin: ${this.origin} Destination: ${this.destination}}`
    }
}
