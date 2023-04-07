import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import Model from "./src/components/Model";

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <Model/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
