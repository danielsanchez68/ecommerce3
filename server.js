import express from 'express'

import RouterProductos from './router/productos.js'

class Server {
    constructor(port) {
        this.port = port
        this.routerProductos = new RouterProductos()//.config()
        //console.log(this.routerProductos.#controlador)    // no se puede accede al atributo o propiedad instancia de la clase Router debido a que es privada
    }

    start() {
        const app = express()
        app.use(express.json())

        // ------------ Rutas / endpoints API RESTful -------------
        app.use('/api/productos', this.routerProductos.config())

        const server = app.listen(this.port, () => console.log(`Servidor ApiRestful escuchando en http://localhost:${this.port}`))
        server.on('error', error => console.log(`Error en servidor: ${error.message}`))
    }
}

export default Server
