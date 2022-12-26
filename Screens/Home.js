import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';

export default function Home( {navigation} ) {

    navigation.setOptions({ title: 'November 2022' });

    return(

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Statistics"
          onPress={() => navigation.navigate('Statistics')}
        />
        </View>

    );
}