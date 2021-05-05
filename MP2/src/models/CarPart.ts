import { Car } from "./Car";

export class CarPart {
  public partName: string;
  public price: number;

  private constructor(partName: string, price: number) {
    this.partName = partName;
    this.price = price;
  }
  public static createPart(car: Car, name: string, price: number): CarPart {
    if (!car) {
      throw new Error("This car does not exist!");
    }

    const carPart = new CarPart(name, price);

    car.addCarPart(carPart);

    return carPart;
  }
}
