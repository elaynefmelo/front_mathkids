import { StyleSheet } from 'react-native';
import { theme } from '@/src/thema';

export const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: theme.colors.purple_p,
    padding: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  menuItem: {
    alignItems: 'center',
    padding: 10,
  },
  menuText: {
    color: 'white',
    marginTop: 5,
  },
  menuItemSelected: {
    // Adicione aqui o estilo para item selecionado, se desejar
  },
  menuTextSelected: {
    color: 'green',
  },
});
