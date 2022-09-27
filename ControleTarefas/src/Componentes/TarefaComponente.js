
import React, { Component } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,

} from 'react-native';



export default class TarefaComponente extends Component {
  constructor(props) {
    super(props); {
      this.state = {

      };

    }

  }
  Concluir = () => {

    this.setState({ status: ' FINALIZADO COM SUCESSO ' })

  }

  render() {

    return (
      <View >
        <View style={{ alignItems: 'center' }}>
          <Text style={estilo.entradaTexto}> Descrição: {this.props.descricao}</Text>
          <Text style={estilo.entradaTexto}> Data: {this.props.data}</Text>
          <Text style={estilo.entradaTexto}> Prioridade: {this.props.prioridade}</Text>

        </View>
        <View style={estilo.corpo}>
          <View style={estilo.botaoConcluir}>
            <TouchableOpacity                                                                              ////Aqui é o rolo
              onPress={() => { this.props.atualizar(this.props.tarefa); this.Concluir(); }}
              style={estilo.botao}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>Concluir</Text>
            </TouchableOpacity>
          </View>

          <View style={estilo.botaoExcluir}>
            <TouchableOpacity
              onPress={() => this.props.remover(this.props.id)}
              style={estilo.botao}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>Excluir</Text>
            </TouchableOpacity>
          </View>
          

        </View>

        <View style={estilo.finalizado}>
            <Text style={estilo.concluida}>
              {this.state.status}
            </Text>
          </View>
         

      </View>

    )
  }
}

const estilo = StyleSheet.create({
  titulo: {
    fontSize: 25,
    margin: 20,
    color: 'black',
    fontWeight: 'bold',

  },
  corpo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
  entradaTexto: {
    backgroundColor: 'lightgreen',
    borderWidth: 1,
    width: 300,
    color: 'black',
    margin: 5,
    alignContent: 'center',
    justifyContent: 'center',

  },
  botaoConcluir: {
    backgroundColor: 'green',
    width: 150,
    height: 35,
    margin: 10,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',

  },
  botao: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  botaoExcluir: {
    backgroundColor: 'red',
    width: 150,
    height: 35,
    margin: 10,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  concluida: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    color:'black',
    
  },

  finalizado: {
    backgroundColor: 'orange',
    width: 250,
    height: 35,
    margin: 5,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center,',
   

  }
});
