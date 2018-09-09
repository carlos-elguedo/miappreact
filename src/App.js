//Esta linea importa la libreria de reat y component para crear componentes
import React, { Component } from 'react';
import logo from './logo.svg';//Se importa una imagen
import './App.css';//Se importan algunos archivos

//Desde nuestro paquete de componentes, se traen ciertas partes de la aplicacion para poder usarlas en la app
import Navegacion from './componentes/Navegacion.js';
import Formulario from './componentes/Formulario.js';

//Este archivo json contiene los datos de la aplicacion
import { tareas } from './tareas.json';

//Esta es una clase javascrip normal que hereda de Component
class App extends Component {

  //Constructor de la clase
  constructor(){
    //Se usa super para que esta clase pueda usar todas las funcionalidades de react
    super();
    //Esta variable almacena el estado de algunos datos de la app en tiempo de ejecucion
    this.state = {
      titulo : "Mi primera aplicacion ReactJS",
      ntareas : tareas.length,//Se obtiene la talla inicial de las tareas
      tareas : tareas//Estas rareas previemente importada
    };
    //Esto es para que no ocurran conflictos, ya que la app puede perder el scope si no se referencia ciertas funciones
    this.guardarTarea = this.guardarTarea.bind(this);

  }//Fin del constructor


  //Esta funcion es para guardar las tarea en tiempo de ejecucion, recibe una tarea
  guardarTarea(tarea){
    //Este metodo serState es para acceder a los daos almacenados, no se puede acceder de otra forma para cambiarlos
    this.setState({
      tareas: [...this.state.tareas, tarea],//Para guardar, se copia lo que habia, mas la nueva tarea
      ntareas:this.state.tareas.length+1
    })
  }//Fin de la funcion guardarTarea


  //Esta funcion es para eliminar tareas, recibe el indice de la tarea a eliminar
  eliminarTarea(indice){
    //console.log(indice);
    //Se realiza una confirmacion
    if(window.confirm("¿Estas seguro?")){
      this.setState({
        //Este metodo filter, recorre un array y debuelve los elementos que cumplen con la condicion
        //Los elementos que cumplen se guardan en el mismo array
        tareas: this.state.tareas.filter((e, i) => {
          return i !== indice
        }),
        ntareas:this.state.tareas.length-1
      })
    }//Fin del if de confirmacion
  }//Fin de la funcion eliminarTarea



  //Esta funcion render, es la principal, encargada de la visualizacion de los elementos
  //Solo procesa un elemento, con sus multiples hijos, NO mas de uno

  //Andes de el return principal del render, se crea una constante que sera cada cuadro de tarea
  //Se realiza un mapeo, que lo que hace es recorrer los ementos del array
  render() {

    const tarea =  this.state.tareas.map((tarea, i) => {
      return(
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
              <h4>{ tarea.titulo }</h4>
                <span className="badge badge-pill badge-danger ml-2">{ tarea.prioridad }</span>
            </div>
            <div className="card-body">
              <p>{ tarea.descripcion }</p>
              <p><b>{ tarea.responsable }</b></p>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={this.eliminarTarea.bind(this, i)}>Eliminar</button>
            </div>
          </div>
        </div>
      )
    })


    return (
      <div className="App">
        <Navegacion titulo="Inicio" talla= {this.state.ntareas}/>


        <div className="container">

          <div className="row mt-4">

            <div className="col md-3">
              <img src={logo} className="App-logo" alt="logo" />
              <Formulario onGuardarTarea={this.guardarTarea}/>
            </div>

            <div className="col md-9">
              <div className="row">
                {tarea}
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
