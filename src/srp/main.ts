import { ShoppingCart } from './shopping-cart';
import { Order } from './order';
import { Messaging } from './messaging';
import { Persistency } from './persistensy'
import { Product} from './product'

const shoppingCart = new ShoppingCart();

const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem( new Product('amaciantez', 10) );
shoppingCart.addItem( new Product('borrachaz', 100) );
shoppingCart.addItem( new Product('cadernoZ', 50) );

/*sem seguir princio resp unica. SRP
shoppingCart.addItem({ name: 'lapis', price: 5 });
shoppingCart.addItem({ name: 'borracha', price: 5 });
shoppingCart.addItem({ name: 'caderno', price: 8 });
*/

console.log(shoppingCart.items);

console.log('o valor total do pedido: ' + shoppingCart.total());
console.log(order.orderStatus);
order.checkout();
//shoppingCart.clear();
console.log(order.orderStatus);
