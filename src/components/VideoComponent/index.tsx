import { View, ActivityIndicator, useWindowDimensions, Alert } from "react-native";
import YoutubeIframe, { PLAYER_STATES } from "react-native-youtube-iframe";
import { styles, VIDEO_HEIGHT, SCREEN_SPACE } from "./styles"
import { useCallback, useState } from "react";
import * as ScreemOrientation from "expo-screen-orientation";


 export function VideoComponent(){

  const [videoReady, setVideoReady] = useState(false);
  const {width} = useWindowDimensions();
  const VIDEO_WIDTH = width - (SCREEN_SPACE * 2);
  const onFullScreenChange = useCallback((isFullScrean:boolean) => {
    if(isFullScrean){
      ScreemOrientation.lockAsync(ScreemOrientation.OrientationLock.LANDSCAPE)
    } else {
      ScreemOrientation.lockAsync(ScreemOrientation.OrientationLock.PORTRAIT)
    }
  },[])

  const onChangeState = useCallback((state:string) => {
    if(state === PLAYER_STATES.ENDED){
      Alert.alert("Parabéns, você finalizou o vídeo!")
    }
  },[])
  return(
    <View style={styles.container}>
      <View style={styles.player}>
        <YoutubeIframe 
          videoId="prsJNR0Zbqg" 
          height={videoReady ? VIDEO_HEIGHT : 0}
          width={VIDEO_WIDTH}
          onReady={() => setVideoReady(true)}
          onFullScreenChange={onFullScreenChange}
          onChangeState={onChangeState}
        />
        {!videoReady && <ActivityIndicator color="#57E447" />}
      </View>
    </View>
  )
 }