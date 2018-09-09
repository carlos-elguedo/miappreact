import React, {Component} from 'react';

class Formulario extends Component{
  constructor(){
    super();
    this.state = {
      titulo:'',
      responsable:'',
      descripcion: '',
      prioridad:''
    };
    this.manejadorCambios = this.manejadorCambios.bind(this);
    this.enviarFormulario = this.enviarFormulario.bind(this);
  }




manejadorCambios(eve){
  //console.log(eve.target.value, eve.target.name);
  const {name, value} = eve.target;
  this.setState({
    [name] : value
  });
  console.log(this.state);
}




enviarFormulario(eve){
  eve.preventDefault();
  this.props.onGuardarTarea(this.state);
  console.log(this.state);

}

  render(){
    return(
      <div className="card">
        <form className="card-body" onSubmit={this.enviarFormulario}>
          <div className="form-group">
            <input type="text" name="titulo" className="form-control" placeholder="Titulo de la tarea" onChange={this.manejadorCambios}/>
          </div>

          <div className="form-group">
            <input type="text" name="responsable" className="form-control" placeholder="Responsable" onChange={this.manejadorCambios}/>
          </div>

          <div className="form-group">
            <input type="text" name="descripcion" className="form-control" placeholder="Descripcion de la tarea" onChange={this.manejadorCambios}/>
          </div>

          <div className="form-group">
            <select className="form-control" name="prioridad" onChange={this.manejadorCambios}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-submit">Guardar</button>
          </div>

        </form>
      </div>
    );
  }



}




export default Formulario;
