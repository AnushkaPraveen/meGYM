
import { View, Text, StyleSheet } from 'react-native';
import Card from '../components/Card';

const Home = () => {
    return (
        <View>
            <View style={styles.cardView}>
                <Card title="Total Registered Members" value={10}/>
                <Card title="Total Registered Members" value={10}/>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    cardView: {
        flexDirection: 'row',
        justifyContent:'space-around'


    }
});
export default Home;