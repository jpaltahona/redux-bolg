import React, { Component } from 'react';

class App extends Component{
    constructor(){
     super();
     
     this.state = {
        usuarios: [
            {
                nombre: 'rodolfo',
                correo: 'rodolfo@gmail.com',
                enlace: 'rodolfo.com'
            },
            {
                nombre: 'platzi',
                correo: 'platzi@gmail.com',
                enlace: 'platzi.com'
            },
            ]
        }
    }
ponerfilas = () => (
        this.state.usuarios.map((usuario, index)=> (
            <tr key={index}>
                <td>{usuario.nombre}</td>
                <td>{usuario.correo}</td>
                <td>{usuario.enlace}</td>
            </tr>
        ))
    );
render(){
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
export default App;