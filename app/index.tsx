import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

const PlaceHolderImage = require('../assets/images/background-image.png');

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1
    });

    if(!result.canceled){
      console.log(result);
      setSelectedImage(result.assets[0].uri);
    }
    else {
      alert("No image selected.");
    }
  };

  return (
    <View style={styles.container}>
      {/* <Text style={{color:'#fff'}}>
        Hello World!
      </Text> */}
      <View style={styles.imageContainer}>
        {/* <Image source={PlaceHolderImage} style={styles.image}/> */}
        <ImageViewer placeHolderImageSource={PlaceHolderImage}
            selectedImage={selectedImage}/>
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" onPress={pickImageAsync}/>
        <Button label="Use this photo"/>
      </View>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#25292e",
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageContainer:{
    flex:1,
    paddingTop: 58
  },
  image:{
    width:320,
    height: 440,
    borderRadius: 18
  },
  footerContainer:{
    flex: 1/3,
    alignItems: 'center'
  }
})