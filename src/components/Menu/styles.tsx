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
    borderTopWidth: 0,
  },
  menuItem: {
    alignItems: 'center',
    padding: 10,
  },
  menuText: {
    fontFamily: theme.fonts.family.bold,
    color: 'white',
    marginTop: 5,
  },
  menuItemSelected: {
    backgroundColor: theme.colors.gray_8,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingVertical: 15, 
    marginTop: -10, 
    zIndex: 1,
  },
  menuTextSelected: {
    color: theme.colors.purple_p,
  },
});
