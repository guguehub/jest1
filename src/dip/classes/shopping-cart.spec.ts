import { ShoppingCart } from './shopping-cart'
import { Discount } from './discount'
import { CartItem } from './interfaces/cart-item'

const createSut = () => {
  const discountMock = createDiscountMock();
  const sut = new ShoppingCart(discountMock);
  return { sut, discountMock };
};

const createDiscountMock = () => {
  class DiscountMock extends Discount {}
  return new DiscountMock();
};

const createCartItem = (name: string, price: number) => {
  class CartItemMock implements CartItem {
    constructor(public name: string, public price: number) {}
  }
  return new CartItemMock(name, price);
};

// criar um sut com totalwithdiscount
const createSutWithProducts = () => {
  const { sut, discountMock }  = createSut();
  const cartItem1 = createCartItem('Camiseta', 40);
  const cartItem2 = createCartItem('Caneta', 1);
  sut.addItem(cartItem1);
  sut.addItem(cartItem2);
 
  return { sut, discountMock }
}

describe('Shopping cart test', () => {
it('should be an empty cart when no product is added', () => {
//class DiscountMock extends Discount {};
const { sut }  = createSut();
expect(sut.isEmpty()).toBe(true);
});

it('Should have 2 cart items', () => {
  //all raw data converted to and receiving in object sut from factory with all items.
  const { sut }  = createSutWithProducts();
  expect(sut.total()).toBe(41);
  expect(sut.totalWithDiscount()).toBe(41);
  
  });

  it('Should test Total and totalWithDiscount', () => {
    const { sut }  = createSutWithProducts();
    expect(sut.total()).toBe(41);
    expect(sut.totalWithDiscount()).toBe(41)
  });

  it('Should add products and clear cart', () => {
    const { sut }  = createSutWithProducts();
    expect(sut.items.length).toBe(2)
    sut.clear();
    expect(sut.items.length).toBe(0);
    expect(sut.isEmpty()).toBe(true);
  });

  it('Should Remove products and clear cart', () => {
    const { sut }  = createSutWithProducts();
    expect(sut.items.length).toBe(2)
    sut.removeItem(1);
    expect(sut.items.length).toBe(1);
    sut.removeItem(0);
    expect(sut.isEmpty()).toBe(true);
  });

  it('Should call discount.calculate with total price when when totalWithDiscount is called',
   () => {
    const { sut, discountMock }  = createSutWithProducts();
    const discountMockSpy = jest.spyOn(discountMock,'calculate');
    sut.totalWithDiscount()
    expect(discountMockSpy).toHaveBeenCalledTimes(1);
   });

   it('Should call discount.calculate(price) when totalWithDiscount is called',
   () => {
    const { sut, discountMock }  = createSutWithProducts();
    const discountMockSpy = jest.spyOn(discountMock,'calculate');
    sut.totalWithDiscount()
    expect(discountMockSpy).toHaveBeenCalledWith(sut.total());

   });


});
