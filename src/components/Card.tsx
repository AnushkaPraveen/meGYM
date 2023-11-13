import { View, Text, StyleSheet } from 'react-native';

interface CardProps {
    title: string;
    value: number;
}

const Card: React.FC<CardProps> = ({ title, value }) => {
    return (
        <View style={styles.cardBackground}>
            <Text style={styles.title}>{title}</Text>
            <Text>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cardBackground: {
        width: 180,
        height: 120,
        padding: 10,
        margin: 30,
        borderRadius: 10,
        backgroundColor: 'red',
    },
    title:{
        fontSize:18,
        fontWeight:'bold'
    }
});

export default Card;

