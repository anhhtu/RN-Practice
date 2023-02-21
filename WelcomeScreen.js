import React from 'react';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';

export default function Login({navigation}) {

  setTimeout(() => {
    navigation.replace('Login');
  }, 2000);

    return (
      <View style={styles.container}>
          {/* <Image source={{uri: 'https://lh3.googleusercontent.com/ha3cuKRHz6HflvSrO3Y9SEYcfmSOoTDKgefkTgrXuJiXbrtE9fSzMjz4bFYyfab4FX0WXxK4mXddY04bjkn3sNXHGydYikZSZRBT1wfeizLTma6PlG7YisfGpT3VPhDaE9YvOAGr9Rik722LIZQ3Al1nYdzHA2DiWLkc-dx0XoKul70pE5RTg4CgUDhaycxg__PDlPQiK0NLkk_F4GS5O6kURD8rf4E1Bfmt9M0MQE4OMM_OutG1ELtZBiZAZhbakLVMTJ9XYi4Q0ctmkrko82bhJsz0qVghDS5YuotoW7qffbO-QeeoUG8BUe4rW7GVwLHia-abMotq3_YNQz7Cs3S4jYdvOeCYej3gFtHmGuH721R9dO2lBaHOQfuuNWqVXTuUMM1YjpuKA9oK16EdmJQYAnHuxNm_SkUvchIUIgLRN0X0RENnoAWJlH9pLiBizWDL0pcawCqG9UUbb26K5VA0W7NKhNm_l2jCVFv5hKZNq36CNuB66I_KirpAVwzPtPY9Uxh5agaomGpXa_UFhHErtWuek8JYTTSsT3hHf5wlkI-Yb0XyFTEUHZO0z59VUQi4USOQDV9ugejplJ-PUR1Hdx_Xde7iXnL7BYHAxU2NJUOJRpyWim2aLNT25C2Axj-WqsUOSf30PrE8KDVZV5UoMnPe77S1dpjY2qRWX53p2MSlpMztmowAI_aTx73cdYjFyUh6n-bl7UV8QesH199obGhLepDvQ2BazTh_x_OlXmaW9wHYkOGz6dy7nAGo0DGFv8oykFt1JdZ2pEP4bkTzMOrkPV3GGdTeP56uuk78-n6OaVkTGoTZVLg8i6jMn4x89xeCyQFloZYqkQl_Y0GXR-ctQinzW1lK8pXezrvvEcDPPtv1pJEBBqqe_6aqb5yNANDvbvJdeS6WTqA5KKxq3WrdDKdI1sEQobhP09X9ji3HmxCD1MiSR4Gk8tgJCgY8aqXQAGJti7QGXPpHNrYHiQs8hJoDuP8lRDSKJaGvkLCEgYgCdF-J4RMlhZGe42iTgctq2sJuiNFxVmOhGBp8=w1036-h947-no?authuser=0'}}
                  style={styles.image}/> */}
          <Image style={styles.image} source={require('./assets/TechStore1.png')}/>

      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ABFD',
    justifyContent: 'center',
    alignItems: 'stretch'
  },

  image: {
    height:400, 
    width:400, 
    alignItems:'center',
    justifyContent: 'center',
  }

});
