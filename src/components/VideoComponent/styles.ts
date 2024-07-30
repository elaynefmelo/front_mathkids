import { StyleSheet } from "react-native";

export const VIDEO_HEIGHT = 220;
export const SCREEN_SPACE = 24;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SCREEN_SPACE,
  },
  infoContainer: {
    flexDirection: 'row', // Alinhar os itens na horizontal
    alignItems: 'center', // Alinhar os itens verticalmente no centro
    marginBottom: 10,
  },
  moduleName: {
    fontSize: 22, // Ajustar o tamanho da fonte
    fontWeight: 'bold',
    color: '#555', // Ajustar a cor da fonte
    marginRight: 10, // Espaçamento entre moduleName e videoTitle
  },
  videoTitle: {
    fontSize: 20, // Ajustar o tamanho da fonte
    color: '#777', // Ajustar a cor da fonte
  },
  player: {
    alignItems: 'center',
    marginTop: 10, // Adicionar um pouco de espaçamento superior
  },
});
