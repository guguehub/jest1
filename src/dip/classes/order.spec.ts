import { Order } from './order'
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';
import { CartItem } from './interfaces/cart-item'
import { MessagingProtocol } from './interfaces/messaging-protocol';
import { PersistencyProtocol } from './interfaces/persistency-protocol';
import { CustomerOrder } from './interfaces/customer-protocol';

//create mock of all constructors in Order
class ShoppingCartMock implements ShoppingCartProtocol {
  get items(): Readonly<CartItem[]>{
    return [];
  };
  addItem(item: CartItem): void {}
  removeItem(index: number): void{}
  total(): number { return 1; }
  totalWithDiscount(): number { return 2; }
  isEmpty(): boolean { return false;}
  clear(): void {}
}

class MessagingMock implements MessagingProtocol {
  sendMessage() {}
}

class PersistencyMock implements PersistencyProtocol {
  saveOrder() {}
}

class CustomerMock implements CustomerOrder {
  getName() { return ''}
  
  getIdn() {
      return ''
    }
  
  

}

const createSut = () => {
  const shoppingCartMock = new ShoppingCartMock();
  const messagingMock = new MessagingMock();
  const persistencyMock = new PersistencyMock();
  const customerMock = new CustomerMock();
  const sut = new Order(shoppingCartMock, messagingMock, persistencyMock, customerMock);

  return { sut, shoppingCartMock, messagingMock, persistencyMock };
};

describe('Order test', () => {
it('Should not checkout if cart is empty', () => {
 const { sut, shoppingCartMock } = createSut();
 const shoppingCartMockSpy = jest.spyOn(shoppingCartMock, 'isEmpty').mockReturnValueOnce(true);
 sut.checkout();
 expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
 expect(sut.orderStatus).toBe('open');
});

it('Should Checkout if cart is not empty', () => {
  const { sut, shoppingCartMock } = createSut();
  const shoppingCartMockSpy = jest.spyOn(shoppingCartMock, 'isEmpty').mockReturnValueOnce(false);
  sut.checkout();
  expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
  expect(sut.orderStatus).toBe('closed');
 });

 it('Should send email to customer', () => {
  const { sut, messagingMock } = createSut();
  const messagingMockSpy = jest.spyOn(messagingMock, 'sendMessage');
  sut.checkout();
  expect(messagingMockSpy).toHaveBeenCalledTimes(1);
  expect(sut.orderStatus).toBe('closed');
 });

 it('Should Save Order', () => {
  const { sut, persistencyMock } = createSut();
  const persistencyMockSpy = jest.spyOn(persistencyMock, 'saveOrder');
  sut.checkout();
  expect(persistencyMockSpy).toHaveBeenCalledTimes(1);
  expect(sut.orderStatus).toBe('closed');
 });

 it('Should Clear Order', () => {
  const { sut, shoppingCartMock } = createSut();
  const shoppingCartMockSpy = jest.spyOn(shoppingCartMock, 'clear');
  sut.checkout();
  expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
  expect(sut.orderStatus).toBe('closed');
 });
});

