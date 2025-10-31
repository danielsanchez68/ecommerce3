import express from 'express'
import cors from 'cors'

import RouterProductos from './router/productos.js'
import RouterPedidos from './router/pedidos.js'


class Server {
    constructor(port) {
        this.port = port
        this.routerProductos = new RouterProductos()
        this.routerPedidos = new RouterPedidos()
        //console.log(this.routerProductos.#controlador)    // no se puede accede al atributo o propiedad instancia de la clase Router debido a que es privada
    }

    start() {
        const app = express()
        app.use(cors())                     // middleware para permitir peticiones desde orígenes cruzados (Ej. ambiente de desarrollo del frontend)
        app.use(express.static('public'))   // middleware de recursos estáticos de express
        app.use(express.json())

        // ------------ Rutas / endpoints API RESTful -------------
        app.use('/api/productos', this.routerProductos.config())
        app.use('/api/pedidos', this.routerPedidos.config())

        //app.use((req,res) => res.send('Ruta no definida en el servidor'))
        //app.use((req,res) => res.redirect('/'))

        const server = app.listen(this.port, () => console.log(`Servidor ApiRestful escuchando en http://localhost:${this.port}`))
        server.on('error', error => console.log(`Error en servidor: ${error.message}`))
    }
}

export default Server
