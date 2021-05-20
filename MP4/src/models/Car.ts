import { Client } from ".";
import { CarPart } from "./CarPart";

export class Car {
  public serialNumber: string;
  public model: string;
  public carParts: CarPart[];
  public static allParts: Set<CarPart> = new Set();
  private rentQueue: Client[] = [];

  constructor(serialNumber: string, model: string) {
    this.serialNumber = serialNumber;
    this.model = model;
    this.carParts = [];
  }

  public addCarPart(carPart: CarPart): void {
    if (Car.allParts.has(carPart)) {
      console.log("You can't add, this part already exists!");
    }

    this.carParts.push(carPart);
    Car.allParts.add(carPart);
  }

  public requestRental(client: Client): void {
    this.rentQueue.push(client);
  }
  public getRentQueue(): Client[] {
    return this.rentQueue;
  }
}
