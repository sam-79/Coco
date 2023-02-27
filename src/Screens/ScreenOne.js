import React, { useEffect, useState } from 'react'
import { View, Text, Alert, FlatList, Image, Pressable, ActivityIndicator, Dimensions } from 'react-native';
import styles from './Styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";


import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../redux/reducers/UserSlice';

// import Toast from 'react-native-root-toast';
import CustomToast from '../components/CustomToast';

const ScreenWidth = Dimensions.get('screen').width;



const ScreenOne = ({ navigation }) => {


    const dispatch = useDispatch()
    const { users, loading, error } = useSelector((state) => state.users)
    

    const [toastVisible, setToastVisible] = useState(false)

    const { isConnected } = useNetInfo()

    useEffect(() => {
        setToastVisible(true)
    }, [isConnected]);

    const handleToastBtn = () => {
        dispatch(getUsers())
        setToastVisible(false)
    }




    // Each User Item
    const Item = ({ item }) => {
        return (
            <View style={styles.card}>

                <Image source={{ uri: 'https://blackhorseexcellence.com/wp-content/uploads/2022/04/portrait-square-06.jpg' }} style={styles.cardImg} />
                
                <View style={{flex:1,flexDirection:'row'}}>
                <Text style={styles.userName}>
                    {item.name}
                </Text>
                </View>

                <Pressable style={{
                    borderWidth: 1, borderColor: '#bdbdbd',
                    borderRadius: 5,
                }} onPress={() => { navigation.navigate('ScreenTwo', { item }) }}>
                    <Icon name="chevron-right" size={20} color="#000" />
                </Pressable>

            </View>
        )
    }


    return (
        <View style={styles.container}>
            <FlatList data={users} renderItem={Item} keyExtractor={(item) => item.id} refreshing={loading} onRefresh={()=>dispatch(getUsers())} style={{ marginVertical: 5, marginHorizontal: 5 }} />
            {
                error && Alert.alert(error)
            }
            {
                toastVisible &&
                <CustomToast message={isConnected ? "Internet Available" : "No Internet"} showButton={isConnected} buttonText={'Reload Data'} buttonAction={handleToastBtn} />
            }
        </View>
    )
}


export default ScreenOne