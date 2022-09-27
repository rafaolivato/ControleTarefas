
import React, { Component, useState } from 'react';

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
import Tarefa from './src/Models/Tarefa'
import TarefaComponente from './src/Componentes/TarefaComponente';
import ItemDatabase from './src/Database/ItemDatabase';


export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      descricao: "",
      data: "",
      prioridade: "",
      lista: [],
     
    }
    
    this.Listar();

  }


  Listar = () => {
    const banco = new ItemDatabase();
    banco.Listar().then(
      listaCompleta => {
        this.setState({ lista: listaCompleta })
      }
    )
  }

  Cadastrar = (descricao, data, prioridade) => {
    const tarefaNova = new Tarefa(descricao, data, prioridade);
    const banco = new ItemDatabase();
    banco.Inserir(tarefaNova);
    this.Listar();
     }

  Atualizar = (tarefa) => {
    const banco = new ItemDatabase();
    banco.Atualizar(tarefa);
    this.Listar();
   
     }

  Remover = (id) => {
    const banco = new ItemDatabase();
    banco.Remover(id);
    this.Listar();
  }

  render() {
    return (
      <ScrollView>
        <View style={estilo.corpo}>
          <Text style={estilo.titulo}>CONTROLE DE TAREFAS</Text>
          <TextInput placeholder = ' Descreva a tarefa...' onChangeText={(valorDigitado) => { this.setState({ descricao: valorDigitado }) }} style={estilo.entradaTexto}></TextInput>
          <TextInput placeholder = ' Digite a data da tarefa...' onChangeText={(valorDigitado) => { this.setState({ data: valorDigitado }) }} style={estilo.entradaTexto}></TextInput>
          <TextInput placeholder = ' Digite a prioridade...' onChangeText={(valorDigitado) => { this.setState({ prioridade: valorDigitado }) }} style={estilo.entradaTexto}></TextInput>
        </View>
        <View style={estilo.areaBotao}>
          <TouchableOpacity
            onPress={() => this.Cadastrar(this.state.descricao, this.state.data, this.state.prioridade)}
            style={estilo.botao}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>SALVAR</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={estilo.titulo}>LISTA DE TAREFAS</Text>
          {
            this.state.lista.map(elementoTarefa => (
              <TarefaComponente
                id={elementoTarefa.id}
                descricao={elementoTarefa.descricao}
                data={elementoTarefa.data}
                prioridade={elementoTarefa.prioridade}
                tarefa={elementoTarefa}
                atualizar={this.Atualizar}
             
                remover={this.Remover} />
            ))
          }
        </View>
        </ScrollView>
    )
  }
}

const estilo = StyleSheet.create({
  titulo: {
    fontSize: 25,
    margin: 20,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',

  },
  corpo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  entradaTexto: {
    backgroundColor: 'lightgreen',
    borderWidth: 1,
    width: 300,
    height: 40,
    margin: 5,
    borderRadius: 10,

  },
  botao: {
    backgroundColor: 'green',
    width: 150,
    height: 35,
    margin: 10,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',


  },
  areaBotao: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }

})


