const GeekTime = require('geektime')
require('env2')('../.env')
const {env}  = process

const client = new GeekTime(env.PHONE,env.PASS);
(async () => {

    try {
      const products = await client.products();
      console.log(products);
    } catch (error) {
      console.error(error);
    }
  
  })();