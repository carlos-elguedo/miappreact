import React, {Component} from 'react';
import './estilos/bootstrap.min.css';

class Navegacion extends Component {
  render() {
    return (
      <nav className = "navbar navbar-dark bg-dark">
        <label className="text-white">
          { this.props.titulo }
        </label>
        <span className="badge badge-pill badge-light ml-2">{ this.props.talla }</span>
      </nav>
    );
  }
}

export default Navegacion;
