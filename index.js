const StaticServer = require('static-server');

let server = new StaticServer({
    port: 3000 ,
    name: 'static-server-polymer'
});

server.start(() => {
        console.log('server started on ', server.port)
    }
);