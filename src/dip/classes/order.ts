import { OrderStatus } from './interfaces/order-status';
import { CustomerOrder } from './interfaces/customer-protocol';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';
import { MessagingProtocol } from './interfaces/messaging-protocol';
import { PersistencyProtocol } from './interfaces/persistency-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  // injetar dependencia
  constructor(
    private readonly cart: ShoppingCartProtocol, 
    private readonly messaging: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
    private readonly customer: CustomerOrder,
    ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('seu carrinho esta vazio');
      return;
    }

    this._orderStatus = 'closed';
    this.messaging.sendMessage(
      `seu pedido com total de ${this.cart.total()} foi recebido, e  seu total 
      COM DESCONTO foi ${this.cart.totalWithDiscount()}`,
    );

    this.persistency.saveOrder();
    this.cart.clear();
    console.log('o cliente é , ' ,
    this.customer.getName(),
    this.customer.getIdn(),
    );
  }
  
}
