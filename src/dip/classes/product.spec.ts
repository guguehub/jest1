import { Product } from './product';
/*
export class Product implements CartItem {
  constructor(public name: string, public price: number) {}
}
*/
const createSut = (name: string, price: number) => {
  return new Product(name, price);
};

describe('Testing Product props should have name and price', () => {

afterEach(() => jest.clearAllMocks());

  it('Product test ', () => {
    const sut = createSut('Camiseta', 49);
    //const consoleSpy = jest.spyOn(console,'log');
    expect(sut).toHaveProperty('name', 'Camiseta');
    expect(sut.price).toBeCloseTo(49);
    //expect(sut).toHaveProperty('name', 'price')

    

  });

  

  /*
  it('should call console.log once ', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console,'log');
    sut.sendMessage('teste');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  }); */
});