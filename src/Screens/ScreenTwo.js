import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './Styles'
import TextWithLabel from '../components/TextWithLabel'

const ScreenTwo = ({ route }) => {

    const { item } = route.params

    return (
        <View style={styles.container}>
            <View style={styles.profileSection}>
                <Image source={{ uri: 'https://blackhorseexcellence.com/wp-content/uploads/2022/04/portrait-square-06.jpg' }}
                    style={styles.profileImg} />

                <Text style={[styles.userName, {fontSize:20}]}>{item.name}</Text>
                <Text>{item.username}</Text>
            </View>

            <View style={{ marginHorizontal: 30 }}>
                <TextWithLabel label={"Email"} textValue={item.email} />

                <View style={{marginVertical:20}}>
                    <TextWithLabel label={'Address'} />
                    <TextWithLabel style={{}} label={"Suite"} textValue={item.address.suite} />
                    <TextWithLabel style={{}} label={"Street"} textValue={item.address.street} />
                    <TextWithLabel label={"City"} textValue={item.address.city} />
                    <TextWithLabel label={"ZipCode"} textValue={item.address.zipcode} />
                </View>

                <TextWithLabel style={{marginVertical:10}} label={'Phone'} textValue={item.phone} />
                <TextWithLabel style={{marginVertical:10}} label={'Website'} textValue={item.website} />
                <TextWithLabel style={{marginVertical:10}} label={'Company'} textValue={item.company.name} />
            </View>
        </View>
    )
}

export default ScreenTwo