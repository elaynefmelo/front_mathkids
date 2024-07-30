import { theme } from '@/src/thema';
import { StyleSheet } from "react-native";

export const VIDEO_HEIGHT = 220;
export const SCREEN_SPACE = 24

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SCREEN_SPACE,
  },
  infoContainer: {
    marginBottom: 10,
  },
  moduleName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  videoTitle: {
    fontSize: 14,
    color: '#555',
  },
  player: {
    alignItems: 'center',
  },
});