import { View, ActivityIndicator, Text, useWindowDimensions, Alert } from "react-native";
import YoutubeIframe, { PLAYER_STATES } from "react-native-youtube-iframe";
import { styles, VIDEO_HEIGHT, SCREEN_SPACE } from "./styles";
import { useCallback, useState } from "react";
import * as ScreenOrientation from "expo-screen-orientation";

interface VideoComponentProps {
  videoId: string;
  moduleName: string;
  videoTitle: string;
  onVideoEnd: () => void; // Adicionar a prop onVideoEnd
}

export function VideoComponent({ videoId, moduleName, videoTitle, onVideoEnd }: VideoComponentProps) {
  const [videoReady, setVideoReady] = useState(false);
  const { width } = useWindowDimensions();
  const VIDEO_WIDTH = width - (SCREEN_SPACE * 2);

  const onFullScreenChange = useCallback((isFullScreen: boolean) => {
    if (isFullScreen) {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    } else {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }
  }, []);

  const onChangeState = useCallback((state: string) => {
    if (state === PLAYER_STATES.ENDED) {
      onVideoEnd(); // Chamar a função passada como prop quando o vídeo terminar
    }
  }, [onVideoEnd]);

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.moduleTitle}>
          {moduleName} - {videoTitle}
        </Text>
      </View>
      <View style={styles.player}>
        <YoutubeIframe
          videoId={videoId}
          height={videoReady ? VIDEO_HEIGHT : 0}
          width={VIDEO_WIDTH}
          onReady={() => setVideoReady(true)}
          onFullScreenChange={onFullScreenChange}
          onChangeState={onChangeState}
        />
        {!videoReady && <ActivityIndicator color="#57E447" />}
      </View>
    </View>
  );
}
