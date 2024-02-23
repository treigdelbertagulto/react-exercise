export default interface Car {
  brand: string;
  make: string;
  year: string;
}

export function isBlank({ brand, make, year }: Car) {
  return brand === "" && make === "" && year === "";
}
