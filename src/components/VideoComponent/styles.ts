import { StyleSheet } from "react-native";
import { theme } from '@/src/thema';

export const VIDEO_HEIGHT = 220;
export const SCREEN_SPACE = 24;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SCREEN_SPACE,
    marginTop: -15,
  },
  infoContainer: {
    flexDirection: 'row', 
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  moduleTitle: {
    fontSize: 18, 
    fontWeight: 'bold',
    color: theme.colors.gray_3,
    textAlign: 'left',
  },
  player: {
    alignItems: 'center',
    marginTop: 15, 
  },
});
