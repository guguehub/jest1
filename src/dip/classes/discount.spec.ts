import { 
  Discount,
FiftyPercentDiscount,
NoDiscount,
TenPercentDiscount,
 } from './discount'

const createSut = (className: new () => Discount): Discount => {
  return new className();
};

describe('Discounts', () => {

afterEach(() => jest.clearAllMocks());

  it('should have no discount ', () => {
    const sut = createSut(NoDiscount);
    //const consoleSpy = jest.spyOn(console,'log');
    expect(sut.calculate(10.99)).toBeCloseTo(10.99);
  });

  it('should apply 50% discount on prices', () => {
    const sut = createSut(FiftyPercentDiscount);
    expect(sut.calculate(150.5)).toBeCloseTo(75.25);
  });

  it('should apply 10% discount on prices', () => {
    const sut = createSut(TenPercentDiscount);
    expect(sut.calculate(10)).toBeCloseTo(9);
  });
});
