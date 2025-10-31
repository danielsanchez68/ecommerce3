import config from '../config.js'
import ModelFactory from '../model/DAOs/pedidos/pedidosFactory.js'
import { validar } from './validaciones/pedido.js'

class Servicio {
    constructor() {
        this.model = ModelFactory.get(config.MODO_PERSISTENCIA)
    }

    obtenerPedidos = async () => {
        const pedidos = await this.model.obtenerPedidos()
        return pedidos
    }

    guardarPedido = async pedido => {
        // validación específica
        const res = validar(pedido)
        if(res.result) {
            const pedidoGuardado = await this.model.guardarPedido(pedido)
            return pedidoGuardado
        }
        else {
            //console.log(res.error)
            throw new Error(res.error.details[0].message)
        }
    }
}

export default Servicio