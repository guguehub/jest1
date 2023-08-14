import { OrderStatus } from './interfaces/order-status';
import { ShoppingCart } from './shopping-cart';
import { Persistency } from '../services/persistensy';
import { Messaging } from '../services/messaging'
import { CustomerOrder } from './interfaces/customer-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  // injetar dependencia
  constructor(
    private readonly cart: ShoppingCart, 
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
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
