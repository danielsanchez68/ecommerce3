//import ModelMem from '../model/DAOs/productosMem.js'
//import ModelFile from '../model/DAOs/productosFile.js'

import config from '../config.js'
import ModelFactory from '../model/DAOs/productos/productosFactory.js'

class Servicio {
    constructor() {
        //this.model = config.MODO_PERSISTENCIA == 'FILE'? new ModelFile() : new ModelMem()
        this.model = ModelFactory.get(config.MODO_PERSISTENCIA)
    }

    obtenerProductos = async id => {
        if(id) {
            const producto = await this.model.obtenerProducto(id)
            return producto
        }
        else {
            const productos = await this.model.obtenerProductos()
            return productos
        }
    }

    guardarProducto = async producto => {
        const productoGuardado = await this.model.guardarProducto(producto)
        return productoGuardado
    }

    actualizarProducto = async (id, producto) => {
        const productoActualizado = await this.model.actualizarProducto(id, producto)
        return productoActualizado
    }

    borrarProducto = async id => {
        const productoEliminado = await this.model.borrarProducto(id)
        return productoEliminado
    }
}

export default Servicio