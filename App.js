import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';

export default function App() {
  //Area JS

  const [altura, setAltura1] = useState('');
  const [peso, setPeso1] = useState('');
  const [resultado, setResultado] = useState('');
  const [imc, setImc] = useState('');
  const [clear] = useState('');

  function calculo() {
    let imcDef = peso / (altura * altura);
    //alturaDef = Number(altura) * Number(altura);
    //setResultado("Seu IMC é de: \n" + (Number(peso) / Number(alturaDef)).toFixed(2));
    setResultado('Seu IMC é de: \n' + Number(imcDef).toFixed(2));

    if (imcDef < 18.5) {
      setImc('Você está abaixo do peso ');
    } else if (imcDef >= 18.5 && imcDef < 25) {
      setImc('Você está no peso ideal');
    } else if (imcDef >= 25 && imcDef < 30) {
      setImc('Você está acima do peso');
    } else if (imcDef >= 30 && imcDef < 35) {
      setImc('Você sofre de Obesidade grau I');
    } else if (imcDef >= 35 && imcDef < 40) {
      setImc('Você sofre de Obesidade grau II');
    } else if (imcDef >= 40) {
      setImc('Você sofre de Obesidade grau III');
    }
  }

  function limpar() {
    setPeso1(clear);
    setAltura1(clear);
    setResultado(clear);
    setImc(clear);
  }

  //Fim da Área JS

  return (
    <View style={estilos.container}>
      <View style={estilos.calculadora}>
        <Image
          style={estilos.imagem}
          source={{
            uri: 'https://play-lh.googleusercontent.com/yc_iTThxehE0XKnspc_d9Hal_OgRAPY-9SeTKw_HnT1SMG_CEEkU02Xk2Y0-t-MTEQ=w240-h480-rw',
          }}
        />

        <TextInput
          style={estilos.entrada}
          placeholder="Altura (m)"
          keyboardType="numeric"
          placeholderTextColor="red"
          value={altura}
          onChangeText={(valor) => {
            setAltura1(valor);
          }}
        />

        <TextInput
          style={estilos.entrada}
          placeholder="Peso (kg)"
          keyboardType="numeric"
          value={peso}
          placeholderTextColor="green"
          onChangeText={(valor) => {
            setPeso1(valor);
          }}
        />
      </View>
      <View style={estilos.botoes}>
        <TouchableOpacity style={estilos.botao} onPress={calculo}>
          <Text style={estilos.textoBotao}>Calcular</Text>
        </TouchableOpacity>

        <TouchableOpacity style={estilos.botao} onPress={limpar}>
          <Text style={estilos.textoBotao}>Limpar</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={estilos.resultado}>{resultado}</Text>
      </View>
      <View>
        <Text style={estilos.classificacao}>{imc}</Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItens: 'center',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
  },
  entrada: {
    color: 'blue',
    fontSize: 30,
    borderWidth: 4,
    marginBotoon: 5,
    marginTop: 4,
    padding: 5,
  },
  calculadora: {
    width: '90%',
    alignSelf: 'center',
  },
  imagem: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 0,
  },
  resultado: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 7,
    padding: 0,
  },
  botao: {
    backgroundColor: '#C0C0C0',
    width: '30%',
    height: '40%',
    borderRadius: 5,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 5,
    padding: 0,
  },
  textoBotao: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 30,
    padding: 0,
  },
  botoes: {
    flexDirection: 'row',
    height: '10%',
    justifyContent: 'center',
  },
  classificacao: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
