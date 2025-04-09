class Cliente {
  constructor(nombre) {
    this.nombre = nombre;
    this.consultas = []; 
    this.reclamos = [];
    this.siguiente = null; 
  }

  agregarConsulta(consulta) {
    this.consultas.push(consulta);
  }

  agregarReclamo(reclamo) {
    this.reclamos.push(reclamo);
  }

  obtenerSiguienteConsulta() {
    return this.consultas.shift();
  }

  obtenerUltimoReclamo() {
    return this.reclamos.pop();
  }
}

class ListaClientes {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  agregarCliente(nombre) {
    
    const nuevoCliente = new Cliente(nombre);

    if (!this.head) {
      this.head = nuevoCliente;
      this.tail = nuevoCliente;
    } else {
      this.tail.siguiente = nuevoCliente;
      this.tail = nuevoCliente;
    }
    return nuevoCliente;
  }

  obtenerClientes() {
    const clientes = [];
    let current = this.head;

    while (current) {
      clientes.push(current);
      current = current.siguiente;
    }
    return clientes;
  }
}

export { Cliente, ListaClientes };