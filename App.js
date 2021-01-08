import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Grab from 'react-native-google-photos';
const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <View style={{ backgroundColor: 'silver' }}>
      <Text style={styles.app}>Xcon Thrift</Text>
      <Text
        style={{
          color: 'red',
          fontSize: 18,
          fontWeight: 'blod',
          fontStyle: 'italic',
          textDecorationLine: 'underline',
        }}>
        WelCome To Xcon Nu Vission Care Group,Established In The Year 2015,An
        IOS 9001:2008 Certified Co.Deal In Water Purifier , Kitchen Chimney And
        Restaurent.
      </Text>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Xcon Thrift Menu" component={HomeScreen} />
          <Tab.Screen
            name="Order Center For Food "
            component={SettingsScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}
function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'silver',
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 25,
          color: 'red',
          fontStyle: 'italic',
        }}>
        Achaar..
      </Text>
      <Text style={{ color: 'black' }}>
        1)Homemade red chili pickle (achaar) 130g ₹ 40.00{' '}
      </Text>
      <Text style={{ color: 'black' }}>
        2)Homemade green chili pickle (achaar) 130g ₹ 35.00{' '}
      </Text>
      <Text style={{ color: 'black' }}>
        3)Homemade Mango pickle (achaar) 500g ₹ 90.00{' '}
      </Text>
      <Text style={{ color: 'black' }}>
        4)Homemade Gunda pickle (achaar) 500g ₹ 90.00{' '}
      </Text>

      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 25,
          color: 'red',
          fontStyle: 'italic',
        }}>
        Noodles..
      </Text>
      <Text style={{ color: 'black' }}>1)Maggi Masala ₹25.00</Text>
      <Text style={{ color: 'black' }}>2)Maggi Chilli Noodles ₹30.00</Text>
      <Text style={{ color: 'black' }}>
        3)Maggi biryani Soya Noodles ₹40.00
      </Text>
      <Text style={{ color: 'black' }}>
        4)Veg Chowmein Half ₹ 30,Full ₹ 50.00
      </Text>
      <Text style={{ color: 'black' }}>
        5)Red Veg Pasta Half ₹ 30,Full ₹ 50.00
      </Text>

      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 25,
          color: 'red',
          fontStyle: 'italic',
        }}>
        Fasting Food..
      </Text>
      <Text style={{ color: 'black' }}>
        Sabudana Khichdi साबूदाना खिचड़ी ₹50.00
      </Text>

      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 25,
          color: 'red',
          fontStyle: 'italic',
        }}>
        Omelette..
      </Text>
      <Text style={{ color: 'black' }}>Omelette 01 Egg = ₹20.00</Text>
      <Text style={{ color: 'black' }}>
        Omelette 01 Egg With One Bread = ₹25.00
      </Text>
      <Text style={{ color: 'black' }}>Omelette 02 Egg = ₹35.00</Text>
      <Text style={{ color: 'black' }}>
        Omelette 02 Egg With Two Bread = ₹45.00
      </Text>

      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 25,
          color: 'red',
          fontStyle: 'italic',
        }}>
        Paratha..
      </Text>
      <Text>Aloo Paratha 1One = ₹25.00</Text>
      <Text>Veg Paratha 1One = ₹30.00</Text>
      <Text>Veg Noodles Paratha 1One = ₹35.00</Text>

      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 25,
          color: 'red',
          fontStyle: 'italic',
        }}>
        Poha..
      </Text>
      <Text>Veg Masala Poha = ₹30.00</Text>
      <Text>Veg Masala Poha (2egg) = ₹55.00</Text>

      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 25,
          color: 'red',
          fontStyle: 'italic',
        }}>
        Juice/Soup/Coffee..
      </Text>
      <Text>Tomato Soup = ₹25.00</Text>
      <Text>Hot & Corn Soup = ₹30.00</Text>
      <Text>Mix Veg Soup = ₹30.00</Text>
      <Text>Noodles Veg Soup = ₹35.00</Text>
      <Text>Moomos Veg Soup = ₹45.00</Text>
      <Text>Hot Coffee ₹ 25.00 </Text>
      <Text>Hot Chocolate Coffee ₹ 35.00</Text>
      <Text>Hot Oreo Coffee ₹ 35.00</Text>
      <Text>Cold Chocolate Coffee ₹ 35.00 </Text>
      <Text>Cold Ice Cream Coffee ₹ 50.00 </Text>
      <Text>Hot Black Coffee ₹ 25.00</Text>
      <Text>Hot Black Chocolate Coffee ₹ 35.00 </Text>
      <Text>Hot Black Oreo Coffee ₹ 35.00</Text>
      <Text>Cold Black Coffee ₹ 25.00</Text>
      <Text>Cold Black Chocolate Coffee ₹ 35.00 </Text>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 25,
          color: 'red',
          fontStyle: 'italic',
        }}>
        Egg Dish..
      </Text>
      <Text>Egg Puff (2 Pcs ) ₹ 25.00 </Text>
      <Text>Egg Pav Dabeli (2 Pav) ₹ 30.00 </Text>
      <Text>Egg Sandwich ₹ 30.00 </Text>
      <Text>Egg Bread Toast Omelette (2 Bread) ₹ 40.00 </Text>
      <Text>Egg Pav Bhurji ₹ 45.00 </Text>
      <Text>Egg pav bhurji (2 pav) butter ₹ 50.00 </Text>
      <Text>Egg Wrapped Masala Sandwich ₹ 60.00 </Text>

      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 25,
          color: 'red',
          fontStyle: 'italic',
        }}>
        Spanish Omelette..
      </Text>
      <Text>Spanish Omelette 2Egg (Tortilla) ₹ 35.00 </Text>
      <Text>Spanish Omelette tamato (2Egg) Tortilla ₹ 40.00 </Text>
      <Text>Mix Vig Spanish Omelette 2Egg (Tortilla) ₹ 45.00</Text>
      <Text>
        Spanish Omelette Tortilla ₹ 60.00 Mix veg with cheese (3 Egg ){' '}
      </Text>

      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 25,
          color: 'red',
          fontStyle: 'italic',
        }}>
        Bread/Pizza/Pav..
      </Text>
      <Text>Aloo Sandwich ₹ 25.00 </Text>
      <Text>Veg Sandwich ₹ 30.00 </Text>
      <Text>Ghughra Green Sandwich ₹ 40.00</Text>
      <Text>Pizza Sandwich ₹ 60.00 </Text>
      <Text>Aloo Pav Dabeli (2 Pav) ₹ 20.00 </Text>
      <Text>Veg Pav Dabeli (2 Pav) ₹ 25.00 </Text>
      <Text>Tomatoes Capsicum Pizza Small ₹ 60.00 Large ₹ 99.00</Text>
      <Text>Tomato Onion Capsicum Pizza Small ₹ 65.00 Large ₹ 110.00</Text>
      <Text>Mix Veg Pizza Small ₹ 65.00 Large ₹ 110.00</Text>
      <Text>Corn Pizza Small ₹ 65.00 Large ₹ 110.00</Text>
      <Text>Pasta Pizza Small ₹ 70.00 Large ₹ 130.00</Text>
      <Text>Noodles Pizza Small ₹ 70.00 Large ₹ 130.00</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'silver',
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 25,
          color: 'red',
          fontStyle: 'italic',
        }}>
        Order Center
      </Text>
      <Text style={{ color: 'black' }}>
        Book Your Order On Phone Number Or On WhatsUp Number Number Is
        1)9141412345 2)9309301102
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    alignItems: 'center',
    backgroundColor: 'orangered',
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    fontStyle: 'italic',
  },
});
