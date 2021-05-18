import * as React from 'react';
import {
  Text,
  StyleSheet,
  Button,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

var products = [
  {
    id: 1,
    name: 'vandal',
    price: '2900',
    image:
      'https://preview.redd.it/t4uvwndxzbs51.png?width=1920&format=png&auto=webp&s=55ce86fcc2323c6d249016ec807d74c86969a076',
  },
  {
    id: 2,
    name: 'phantom',
    price: '2900',
    image:
      'https://valorantstrike.com/wp-content/uploads/2020/06/Valorant-Kingdom-Phantom-hd.jpg',
  },
  {
    id: 3,
    name: 'bulldog',
    price: '2100',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSX-Sl3tRxwhd_5UIQXWEq4DtMgK_pGZDmpw&usqp=CAU',
  },
  {
    id: 4,
    name: 'spectre',
    price: '1600',
    image:
      'https://valorantstrike.com/wp-content/uploads/2020/06/Valorant-Prime-Spectre-hd.jpg',
  },
  {
    id: 5,
    name: 'sherrif',
    price: '800',
    image:
      'https://valorantstrike.com/wp-content/uploads/2020/07/Valorant-Protektor-Sheriff-Small.jpg',
  },
];
var employees = [
  {
    id: 1,
    name: 'Casper',
    rank: 'Silver 2',
    image:
      'https://www.pcgamesn.com/wp-content/uploads/2020/04/valorant-sova-arrows-lineups.jpg',
  },
  {
    id: 2,
    name: 'Hammadjay',
    rank: 'Bronze 3',
    image:
      'https://www.pcgamesn.com/wp-content/uploads/2020/10/valorant-skye-abilities-900x506.jpg',
  },
  {
    id: 3,
    name: 'Wendigo',
    rank: 'Bronze 1',
    image:
      'https://avaazdo.s3.amazonaws.com/e4ea76bdbaafad6f2b91b553971e07fb.png',
  },
  
];
var orders = [
  {
    id: 1,
    name: ' Valorant Points',
    orderNo: '#1214',
    customer: 'thedankknight',
    date: '4/5/2020',
    shipping: 'due',
  },
  {
    id: 2,
    name: ' Radianite Points',
    orderNo: '#5123',
    customer: 'badboy',
    date: '6/7/2021',
    shipping: 'done',
  },
];

const HomeScreen = ({ navigation }) => {
  return (
    <View style= {{alignItems: "center"}}>
    <Text style={{ fontSize: 25, marginBottom: 10, fontWeight:'bold', color: '#F23819' }}>Helu Admin </Text>
      <TouchableOpacity
        style={styles.buttons}
        title="Go to Profile"
        onPress={() => navigation.navigate('Products List')}>
        <Text style={styles.text}>1. Manage Products</Text>
      </TouchableOpacity>

      <TouchableOpacity
        title="Go to Profile"
        style={styles.buttons}
        onPress={() => navigation.navigate('Employees List')}>
        <Text style={styles.text}>2. Manage Employees</Text>
      </TouchableOpacity>

      <TouchableOpacity
        title="Go to Profile"
        style={styles.buttons}
        onPress={() => navigation.navigate('Orders List')}>
        <Text style={styles.text}>3. Manage Orders</Text>
      </TouchableOpacity>
    </View>
  );
};
const ProductsList = ({ navigation }) => {
  return (
    <View style={{ paddingHorizontal: 60 }}>
      <ScrollView>
        {products.map((item) => {
          return (
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                navigation.navigate('Product Details', { item });
              }}>
              <Text style={styles.txt}>{item.id + '. ' + item.name}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};
const ProductDetails = ({ route, navigation }) => {
  const { item } = route.params;
  return (
    <View>
      <Text style={styles.txt}>Name: {item.name}</Text>
      <Text style={styles.txt}>Price: {item.price}</Text>
      <Image style={styles.image} source={{ uri: item.image }} />
    </View>
  );
};
const EmployeesList = ({ navigation }) => {
  return (
    <View style={{ paddingHorizontal: 60 }}>
      <ScrollView>
        {employees.map((item) => {
          return (
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                navigation.navigate('Employee Details', { item });
              }}>
              <Text style={styles.txt}>{item.id + '. ' + item.name}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};
const EmployeeDetails = ({ route, navigation }) => {
  const { item } = route.params;
  return (
    <View>
      <Text style={styles.txt}>Name: {item.name}</Text>
      <Text style={styles.txt}>Rank: {item.rank}</Text>
      <Image style={styles.image} source={{ uri: item.image }} />
    </View>
  );
};
const OrdersList = ({ navigation }) => {
  return (
    <View style={{ paddingHorizontal: 50 }}>
      <ScrollView>
        {orders.map((item) => {
          return (
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                navigation.navigate('Order Details', { item });
              }}>
              <Text style={styles.txt}>{item.id + '. ' + item.name+ " " + item.orderNo }</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};
const OrderDetails = ({ route, navigation }) => {
  const { item } = route.params;
  return (
    <View>
      <Text style={styles.txt}>Name: {item.name}</Text>
      <Text style={styles.txt}>Customer: {item.customer}</Text>
      <Text style={styles.txt}>Order Date: {item.date}</Text>
      <Text style={styles.txt}>Shipping Status: {item.shipping}</Text>
    </View>
  );
};

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products List" component={ProductsList} />
      <Stack.Screen name="Employees List" component={EmployeesList} />
      <Stack.Screen name="Orders List" component={OrdersList} />
      <Stack.Screen name="Product Details" component={ProductDetails} />
      <Stack.Screen name="Employee Details" component={EmployeeDetails} />
      <Stack.Screen name="Order Details" component={OrderDetails} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  buttons: {
    padding: 20,
  },
  text: {
    color: '#EA640C',
    fontSize: 20,
    fontFamily: 'monospace',
  },
  txt: {
    fontSize: 20,
    color: '#000',
    textAlign: 'left',
  },
  image: {
    width: 350,
    height: 200,
  },
});
