import { ShoppingCart } from './shopping-cart';

const shoppingCart = new ShoppingCart();

shoppingCart.addItem({ name: 'amaciante', price: 10 });
shoppingCart.addItem({ name: 'lapis', price: 5 });
shoppingCart.addItem({ name: 'caderno', price: 8 });

//shoppingCart.clear();
console.log(shoppingCart.items);
shoppingCart.checkout();

console.log('o valor total do pedido: ' + shoppingCart.total());
console.log(shoppingCart.orderStatus);
