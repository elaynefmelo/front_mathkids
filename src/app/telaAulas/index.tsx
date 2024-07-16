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
                        subtitle="Conteúdo da aula"
                        status={activityStatus.video}
                        route="/nivelIntroducao/video"
                    />
                    <ActivityButton
                        iconSource={require('@/src/assets/Drawing.png')}
                        title="Prática"
                        subtitle="Conteúdo da aula"
                        status={activityStatus.video}
                        route="/nivelIntroducao/pratica"
                    />
                </View>
                <BlocoNiveis 
                    title={"Nível Básico"} 
                    iconSource={require('@/src/assets/Dinosaur.png')} 
                />
                <View style={styles.row}>
                    <ActivityButton
                        iconSource={require('@/src/assets/Idea.png')}
                        title="Revisão"
                        subtitle="Conteúdo da aula"
                        status={activityStatus.video}
                        route="/nivelBasico/revisao"
                    />
                </View>
                <View style={styles.row}>
                    <ActivityButton
                        iconSource={require('@/src/assets/Video.png')}
                        title="Vídeo"
                        subtitle="Conteúdo da aula"
                        status={activityStatus.video}
                        route="/nivelBasico/video"
                    />
                    <ActivityButton
                        iconSource={require('@/src/assets/Drawing.png')}
                        title="Prática"
                        subtitle="Conteúdo da aula"
                        status={activityStatus.video}
                        route="/nivelBasico/pratica"
                    />
                </View>
            </ScrollView>
            <Menu />
        </View>
    );
}

export default TelaAulas;
