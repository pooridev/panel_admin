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
      this.get('/api/products', (schema, request) => schema.products.all());

      this.patch('/api/products/:id', (schema, request) => {
        let newAttrs = JSON.parse(request.requestBody);
        let id = request.params.id;
        let product = schema.products.find(id);
        console.log(product.update(newAttrs));
        return product.update(newAttrs);
      });

      // this.put('/products/:id', function (schema, request) {
      //   // let attrs = JSON.parse(request.requestBody);
      //   let id = request.params.id;
      //   // console.log(request.params.id);
      //   // // return { products: attrs };
      //   let product = schema.products.findBy(id);
      //   console.log(product);
      //   // product.update({
      //   //   products: schema.products.findBy({ isLiked: true })
      //   // });
      //   this.db.products.update(product, JSON.parse(request.requestBody));
      //   return schema.products;
      // });

      // this.get('/api/products', () => products);
      // this.post('/api/products', (schema, request) => {
      //   let attrs = JSON.parse(request.requestBody);
      //   return attrs;
      // });
      // this.post('https://reqres.in/api/login');
      this.post('https://reqres.in/api/login/', true);
    }
  });
}
