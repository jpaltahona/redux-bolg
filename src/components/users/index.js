import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Users extends Component{
/*     async componentDidMount(){
      const respuesta = await axios.get('https://jsonplaceholder.typicode.com/users');
      console.log('respuesta:', respuesta);
      this.setState({
        usuarios: respuesta.data
      }) 
    } */
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
export default connect(mapStateToProps, {/*Actions*/})(Users);