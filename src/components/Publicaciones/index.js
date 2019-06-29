import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as usuariosActions from '../../actions/usuariosActions';
import * as publicacionesActions from '../../actions/publicacionesActions';

class Publicaciones extends Component {
    componentDidMount(){
        if(!this.props.usuariosReducers.usuarios.length){
            this.props.traertodos();
        }
    }

    render(){
        console.log(this.props)
        return(
            <div>
                <h1>Publicaciones De</h1>
               { this.props.match.params.key }
            </div>
        )
    }
}
const mapStateToProps = ({usuariosReducers , publicacionesReducer}) => {
    return {
        usuariosReducers , publicacionesReducer
    }
};
const mapDispatchToProps = {
    ...usuariosActions,
    ...publicacionesActions
}

export default connect(mapStateToProps, mapDispatchToProps)(Publicaciones);