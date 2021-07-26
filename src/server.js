import { createServer, Model } from 'miragejs';
import { products } from './data/products';

export default function makeServer() {
  createServer({
    models: {
      product: Model
    },
    seeds(server) {
      server.create('product', products[0]);
      server.create('product', products[1]);
      server.create('product', products[2]);
      server.create('product', products[3]);
      server.create('product', products[4]);
      server.create('product', products[5]);
      server.create('product', products[6]);
      server.create('product', products[7]);
    },
    routes() {
      this.namespace = ''
      this.passthrough('/')
      this.get('/products', (schema, request) => schema.products.all());
      this.patch('/products/:id', (schema, request) => {
        let newAttrs = JSON.parse(request.requestBody);
        let id = request.params.id;
        let product = schema.products.find(id);
        product.update({ isLiked: !product.isLiked });
        return newAttrs;
      });
      this.passthrough()
      this.passthrough('https://reqres.in/api/users?page=1&per_page=12');
      this.passthrough()
      this.passthrough('https://reqres.in/api/login');
    }
  });
}
