// Main ocp - open close principle
//Entidades devem estar abertas para extensão , mas fechadas para modificação.

import { ShoppingCart } from './classes/shopping-cart';
import { Order } from './classes/order';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistensy'
import { Product} from './classes/product'
import { FiftyPercentDiscount, TenPercentDiscount, NoDiscount } from './classes/discount'

const fiftyPercentDiscount = new FiftyPercentDiscount();
//const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();

const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem( new Product('amaciantez', 1000) );
shoppingCart.addItem( new Product('borrachaz', 1000) );
shoppingCart.addItem( new Product('cadernoZ', 500) );

/*sem seguir princio resp unica. SRP
shoppingCart.addItem({ name: 'lapis', price: 5 });
shoppingCart.addItem({ name: 'borracha', price: 5 });
shoppingCart.addItem({ name: 'caderno', price: 8 });
*/

console.log(shoppingCart.items);

console.log('o valor total do pedido: ' + shoppingCart.total());

console.log(`valor com desconto... ` , shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
//shoppingCart.clear();
console.log(order.orderStatus);
