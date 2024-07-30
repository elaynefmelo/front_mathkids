import { StyleSheet } from 'react-native';
import { theme } from '@/src/thema';

export const VIDEO_HEIGHT = 220;
export const SCREEN_SPACE = 24

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: SCREEN_SPACE
    },
    player: {
      width: "100%",
      height: VIDEO_HEIGHT,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10

    }
});