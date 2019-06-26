import React, { Component } from 'react';
import axios from 'axios';

class Users extends Component{
    constructor(){
     super();
     
     this.state = {
        usuarios: []
        }
    }
    async componentDidMount(){
      const respuesta = await axios.get('https://jsonplaceholder.typicode.com/users');
      console.log('respuesta:', respuesta);
      this.setState({
        usuarios: respuesta.data
      }) 
    }
ponerfilas = () => (
        this.state.usuarios.map((usuario, index)=> (
            <tr key={usuario.id}>
                <td>{usuario.name}</td>
                <td>{usuario.email}</td>
                <td>{usuario.website}</td>
            </tr>
        ))
    );
render(){
  console.log(this.state.usuarios);
return(
    <div className="margen">
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
export default Users;