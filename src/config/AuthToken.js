import AsyncStorage from '@react-native-async-storage/async-storage';

export default storeData = async () => {
    try {
      const Token = await axios.post("http://192.168.29.51:5000/Auth")
      await AsyncStorage.setItem('Token', Token)
    } catch (err) {
      console.log("error is : ", err.message)
    }
  }
  