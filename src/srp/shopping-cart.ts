//import { CartItem } from './interfaces/cart-item';

type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class ShoppingCart {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }
  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('seu carrinho esta vazio');
      return;
    }
    this._orderStatus = 'closed';
    this.sendMessage('seu pedido foi recebido');
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string): void {
    console.log('mensagem enviada;', msg);
  }
  saveOrder(): void {
    console.log(' pedido salvo com sucesso');
  }
  clear(): void {
    console.log('Carrinho de compras foi limpo...');
    this._items.length = 0;
  }
}

const shoppingCart = new ShoppingCart();

shoppingCart.addItem({ name: 'amaciante', price: 10 });
shoppingCart.addItem({ name: 'lapis', price: 5 });
shoppingCart.addItem({ name: 'caderno', price: 8 });

//shoppingCart.clear();
console.log(shoppingCart.items);
shoppingCart.checkout();

console.log('o valor total do pedido: ' + shoppingCart.total());
console.log(shoppingCart.orderStatus);
