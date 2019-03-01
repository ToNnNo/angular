export class User {

  id: number;
  name: string;
  email: string;
  phone: string;
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
  };

  constructor(obj: object) {
    Object.assign(this, obj);
  }

  public getAddress(): string {
    return `${this.address.suite} ${this.address.street}
      ${this.address.zipcode} ${this.address.city}`;
  }
}
