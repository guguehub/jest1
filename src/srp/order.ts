import { OrderStatus } from './interfaces/order-status';
import { ShoppingCart } from './shopping-cart';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  // injetar dependencia
  constructor(private readonly cart: ShoppingCart) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('seu carrinho esta vazio');
      return;
    }

    this.sendMessage(
      `seu pedido com total de ${this.cart.total()} foi recebido`,
    );

    this.saveOrder();
    this.cart.clear();
  }

  sendMessage(msg: string): void {
    console.log('mensage enviada', msg);
  }

  saveOrder(): void {
    console.log(' pedido salvo com sucesso');
  }
}
