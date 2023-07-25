import { ShoppingCart } from './shopping-cart';
import { Order } from './order';

const shoppingCart = new ShoppingCart();
const order = new Order(shoppingCart);

shoppingCart.addItem({ name: 'amaciante', price: 10 });
shoppingCart.addItem({ name: 'lapis', price: 5 });
shoppingCart.addItem({ name: 'caderno', price: 8 });

console.log(shoppingCart.items);

console.log('o valor total do pedido: ' + shoppingCart.total());
console.log(order.orderStatus);
order.checkout();
//shoppingCart.clear();
console.log(order.orderStatus);
