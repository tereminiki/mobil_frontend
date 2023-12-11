import React, { useState } from 'react';
import { Button, Image, View, Text, TextInput} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ipcim } from './Ipcim';

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);
  const [bevitel1, setBevitel1] = useState('');
  const SERVER_URL = Ipcim.Ipcim;

  const createFormData = (photo, body = {}) => {
    const data = new FormData();

    data.append('photo', {
      name: 'photo.jpg',
      type: 'image/jpg',
      uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
    });

    Object.keys(body).forEach((key) => {
      data.append(key, body[key]);
    });

    return data;
  };

  const handleUploadPhoto = async () => {
    try {
      if (!image) {
        console.log('Please select an image first');
        return;
      }

      const response = await fetch(`${SERVER_URL}api/upload`, {
        method: 'POST',
        body: createFormData(image, { userId: '123', bevitel1 }),
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (!response.ok) {
        throw new Error('Network request failed');
      }

      const data = await response.json();
      console.log('response', data);
    } catch (error) {
      console.log('error', error.message);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{padding: 10}}>
      </Text>
      <TextInput
        onChangeText={newText => setText(newText)}
        defaultValue={bevitel1}
      />


      <Button title="Upload Photo" onPress={handleUploadPhoto} />
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image.uri }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}