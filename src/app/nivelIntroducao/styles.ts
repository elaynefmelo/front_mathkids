import { theme } from "@/src/thema";
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white_2,
    paddingTop: 200,
  },
  contentContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 20,
  },
});