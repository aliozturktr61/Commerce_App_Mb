import {View,Text, ScrollView,TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '../themes/Colors';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import {Items} from '../database/Database';
import SectionHeader from '../components/SectionHeader';

export default function Home() {
    const navigation = useNavigation();
    const [products, setProducts] = useState([]);
    const [accessory, setAccessory] = useState([]);
  
    useEffect(() => {
      getDataFromDB();
    }, []);
  
    const getDataFromDB = () => {
      let productList = [];
      let accessoryList = [];
  
      for (let index = 0; index < Items.length; index++) {
        // database de bulunan verinin kategorisi product ise bunu productList dizisine ekle
        if (Items[index].category === 'product') {
          productList.push(Items[index]);
        } else {
          // değilse accessoryList dizisine ekle
          accessoryList.push(Items[index]);
        }
      }
  
      setProducts(productList);
      setAccessory(accessoryList);
    };
  return (
    <ScrollView>
        <Header/>
        <View>
        <Text
            style={{
              fontSize: 26,
              color: Colors.black,
              fontWeight: '500',
              letterSpacing: 1,
              marginBottom: 10,
            }}>
         Ürün Listeleri
          </Text>
       
        </View>
        <View style={{padding: 16}}>
          <View
            style={{flexDirection:"row", 
            width:"100%",       
            justifyContent: 'space-between',
             }}>
           {products.map(data => (
              <ProductCard key={data.id} data={data} />
            ))} 
          </View>
        </View>
        <View style={{padding: 16}}>
         
          <View
            style={{  flexDirection:"row",  
            width:"100%",      
              flexWrap: 'wrap',
              justifyContent: 'space-around',
            }}>
             {accessory.map(data => (
              <ProductCard data={data} key={data.id} />
            ))} 
          </View>
        </View>
        <View>
        <TouchableOpacity  onPress={() => navigation.navigate('Home')} >
        <Text
          style={{alignItems:"center",justifyContent:"center",
            fontSize: 15,
            color: Colors.blue,
            fontWeight: '400',
          }}>
          Anasayfa için Tıklayınız.
        </Text>
      </TouchableOpacity>
       
        </View>
    </ScrollView>
 

  );
}

