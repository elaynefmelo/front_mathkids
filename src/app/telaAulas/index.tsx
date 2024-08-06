import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { styles } from "./styles";
import Menu from "@/src/components/Menu";
import Header from '@/src/components/Header';
import BlocoNiveis from "@/src/components/BlocoNiveis";
import ActivityButton from "@/src/components/ActivityButton";

type ActivityStatus = 'notStarted' | 'inProgress' | 'completed';

const TelaAulas = () => {

    const [activityStatus, setActivityStatus] = useState<{  
        video: ActivityStatus;
        revision: ActivityStatus;
        practice: ActivityStatus;
    }>({
        video: 'notStarted',
        revision: 'inProgress',
        practice: 'completed',
    });

    const handleActivityCompletion = (activity: string) => {
        setActivityStatus((prevStatus) => ({
          ...prevStatus,
          [activity]: 'completed',
        }));
    };

    return (
        <View style={styles.container}>
            <Header
                title="Aulas"
                iconSource={require('@/src/assets/Maths.png')}
            />
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={{ marginTop: 20 }}>
                    <BlocoNiveis 
                        title={"Introdução"} 
                        iconSource={require('@/src/assets/Egg.png')} 
                    />
                </View>
                <View style={styles.row}>
                    <ActivityButton
                        iconSource={require('@/src/assets/Video.png')}
                        title="Vídeo"
                        subtitle="O que é matemática?"
                        status={activityStatus.video}
                        route="/nivelIntroducao/video"
                        color="#A2F293"
                    />
                    
                </View>
                <BlocoNiveis 
                    title={"Módulo 1"} 
                    iconSource={require('@/src/assets/Dinosaur.png')} 
                />
                <View style={styles.row}>
                    <ActivityButton
                        iconSource={require('@/src/assets/Video.png')}
                        title="Vídeo"
                        subtitle="Números de 0 à 10"
                        status={activityStatus.video}
                        route="/nivelBasico/video"
                        color="#A2F293"
                    />
                     <ActivityButton
                        iconSource={require('@/src/assets/Drawing.png')}
                        title="Prática"
                        subtitle="Números de 0 à 10"
                        status={activityStatus.video}
                        route="/nivelBasico/pratica"
                        color="#A2F293"
                    />
                </View>
                <BlocoNiveis 
                    title={"Módulo 2"} 
                    iconSource={require('@/src/assets/Happy.png')} 
                />
                <View style={styles.row}>
                <ActivityButton
                        iconSource={require('@/src/assets/Idea.png')}
                        title="Revisão"
                        subtitle="Números de 0 à 10"
                        status={activityStatus.video}
                        route="/nivelBasico2/revisao"
                        color="#A2F293"  
                    />
                </View>
                <View style={styles.row}>
                    <ActivityButton
                        iconSource={require('@/src/assets/Video.png')}
                        title="Vídeo"
                        subtitle="Adição"
                        status={activityStatus.video}
                        route="/nivelBasico2/video"
                    />
                    <ActivityButton
                        iconSource={require('@/src/assets/Drawing.png')}
                        title="Prática"
                        subtitle="Adição"
                        status={activityStatus.video}
                        route="/nivelBasico2/pratica"
                    />
                </View>
            </ScrollView>
            <Menu />
        </View>
    );
}

export default TelaAulas;
