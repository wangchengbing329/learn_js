// 单点入口
const Hapi = require('hapi')
const routeHelloHapi = require('./route/hello-hapi')
const routeShops = require('./route/shops')
const routeOrder = require('./route/order')

const pluginHapiSwagger = require('./plugins/hapi-swagger');
const config = require('./config')
const  server = new Hapi.Server();
server.connection({
    port:config.port,
    host:config.host
})
const init = async () =>{
    await server.register([
        ...pluginHapiSwagger
    ])
    server.route([
       ...routeHelloHapi,
       ...routeShops,
       ...routeOrder
    ]);
    await server.start();
    console.log(   `Server running at:${server.info.uri}`);
}
init();