import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View, Button, ImageBackground} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { Ipcim } from './Ipcim';

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [selectedMarka, setSelectedMarka] = useState();

  const getMovies = async () => {
    try {
      const response = await fetch(Ipcim.Ipcim+'marka');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const Kattintas=()=>{
    alert(selectedMarka)
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <ImageBackground
    source={require('./Images/lenyilo.png')}
    style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
  >
    <View style={{flex: 1, padding: 24}}>
        
   <Picker
  selectedValue={selectedMarka}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedMarka(itemValue)
  }>
            {data.map((item)=>{
            return(
                <Picker.Item label={item.marka_nev} value={item.marka_id} />
        )}
        )}

</Picker>

<Button
        onPress={() => Kattintas()}
        title="Test"
      />

    </View>
    </ImageBackground>
      );
    };


export default App;