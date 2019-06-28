import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as usuariosActions from '../../actions/usuariosActions';

class Users extends Component{
  componentDidMount(){
      this.props.traertodos();
    } 
ponerfilas = () => (
        this.props.usuarios.map((usuario, index)=> (
            <tr key={usuario.id}>
                <td>{usuario.name}</td>
                <td>{usuario.email}</td>
                <td>{usuario.website}</td>
            </tr>
        ))
    );
    render(){
    return(
        <div>
            <table className="tabla">
            <thead>
            <tr>
                <th>Name</th>
                <th>corre</th>
                <th>Enlace</th>
            </tr>
            </thead>
            <tbody>
            { this.ponerfilas() }
            </tbody>
        </table>
        </div>
        );
    }
}

const mapStateToProps = (reducers) => {
  return reducers.usuariosReducers
};
export default connect(mapStateToProps,  usuariosActions )(Users);