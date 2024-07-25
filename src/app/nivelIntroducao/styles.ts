import { theme } from "@/src/thema";
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: 180,
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start', // Alinha os componentes no início do container
  },
  text: {
    fontSize: 20,
  },
});