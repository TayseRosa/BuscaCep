import React, { useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, Keyboard } from 'react-native';

import {
  Container, 
  Header,
  HeaderTitle,
  SearchCep,
  ButtonSearch,
  ButtonClear,
  ButtonText, 
  Result, 
  ResultText
}from './stylesCustom/styles';

import api from './src/services/api';

export default function App(){
  const [ cep, setCep ] = useState('');
  const [ cepUser, setCepUser ] = useState(null);

  const inputRef = useRef(null);

  function limpar(){
    setCep('');
    inputRef.current.focus();
    setCepUser(null);
  }

  async function buscar(){
    if(cep == ''){
      alert('Digite um CEP válido!');
      setCep('');
      return;//para o if aqui
    }

    try{
      const response = await api.get(`/${cep}/json`);
      console.log(response.data);
      Keyboard.dismiss();//Garante que o teclado será fechado.
      setCepUser(response.data);

    }catch(error){
      console.log('ERROR: '+error);
    } 
  }

  return(
    <>
      <Header>
        <HeaderTitle> Busca CEP </HeaderTitle>
      </Header>

      <Container>
        <SearchCep 
          placeholder="Digite o CEP desejado Ex: 91000-000"
          value={ cep }
          onChangeText={ (texto)=>setCep(texto) }
          keyboardType="numeric"
          ref={inputRef}
        />

        <View>
          
          <ButtonSearch
            onPress={buscar}  
          >
            <ButtonText> Buscar </ButtonText>
          </ButtonSearch>

          <ButtonClear 
            onPress={limpar}  
          >
            <ButtonText> Limpar </ButtonText>
          </ButtonClear>
        </View>

        { cepUser &&
              <Result>
                <ResultText>Cep: {cepUser.cep} </ResultText>
                <ResultText>Logradouro: {cepUser.logradouro}</ResultText>
                <ResultText>Bairro: {cepUser.bairro}</ResultText>
                <ResultText>Cidade: {cepUser.localidade}</ResultText>
                <ResultText>UF: {cepUser.uf}</ResultText>
            </Result>
        }
      </Container>
    </>
  )
}
