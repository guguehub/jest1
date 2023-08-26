
/* Módulos de alto nivel nao devem depender de modulos de baixo nivel.
Ambos devem depender de abstraçoes.
Dependa de abstraçoes , nao de implementaçoes.
Abstraçoes nao devem depender de detalhes.
Detalhes nao devem depender de detalhes. 
Detalhes devem depender de abstraçoes

Classes de baixo nivel sao classes que executam tarefas (os detalhes)
Classes de alto nivel sao classes que gerenciam as classes de baixo nivel.
*/
import { ShoppingCart } from './classes/shopping-cart';
import { Order } from './classes/order';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistensy'
import { Product} from './classes/product'
import { FiftyPercentDiscount, TenPercentDiscount, NoDiscount } from './classes/discount'
import { IndividualCustomer, EnterpriseCustomer } from './classes/customer';
import { MessagingProtocol } from './classes/interfaces/messaging-protocol';

const fiftyPercentDiscount = new FiftyPercentDiscount();
//const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
//escrevo o que quiser pra lembrar comentario
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const individualCustomer = new IndividualCustomer(
  'Luis', 'gustavo', '003255659');

  const enterpriseCustomer = new EnterpriseCustomer(
    'Millium', '000/1100000');

class MessagingMock implements MessagingProtocol{
  sendMessage(): void {
    console.log('a mensagem foi enviada pelo mock');
  }
}
const messagingMock = new MessagingMock();

const order = new Order(
  shoppingCart, messagingMock, persistency, 
  enterpriseCustomer);

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
