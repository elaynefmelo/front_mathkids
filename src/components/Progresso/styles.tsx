import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  barContainer: {
    width: 400,
    height: 130,
    borderRadius: 15,
    borderColor: 'gray',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', // Garante que o conteúdo dentro do container não ultrapasse os limites definidos
  },
  caixaBar: {
    flexDirection: 'row',
    width: '90%', // Garante que a caixaBar ocupe toda a largura do barContainer
  },
  text: {
    fontSize: 20,
    padding: 25,
    color: '#7600B5',
  },
  progressBarContainer: {
    backgroundColor: 'lightgray',
    height: 30,
    borderRadius: 15,
    marginRight: 10,
    flex: 1, // Faz com que o progressBarContainer ocupe todo o espaço disponível na caixaBar
    flexDirection: 'row', // Garante que os filhos (progressBar e progressBarGray) se alinhem na mesma linha
  },
  progressBarGray: {
    backgroundColor: 'lightgray', // Cor de fundo da barra de progresso não preenchida
    borderRadius: 15,
    position: 'absolute', // Permite sobrepor o progressBar com o progressBarGray
    left: 0,
    top: 0,
    bottom: 0,
  },
  progressBar: {
    backgroundColor: '#57E447', // Cor da barra de progresso preenchida
    borderRadius: 15,
  },
  progressText: {
    fontSize: 16,
  }
});

