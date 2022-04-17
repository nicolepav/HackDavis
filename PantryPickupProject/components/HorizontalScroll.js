import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
  FlatList,
} from 'react-native';

const ListItem = ({ item }) => {
    const imageClick = () => {
        console.log('Click');
    }
  return (
    <View style={styles.item}>
      <Image
        source={{
          uri: item.uri,
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
        onClick={imageClick}
      />
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
  );
};

export default () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1 }}>
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          renderSectionHeader={({ section }) => (
            <>
              <Text style={styles.sectionHeader}>{section.title}</Text>
              {section.horizontal ? (
                <FlatList
                  horizontal
                  data={section.data}
                  renderItem={({ item }) => <ListItem item={item} />}
                  showsHorizontalScrollIndicator={false}
                />
              ) : null}
            </>
          )}
          renderItem={({ item, section }) => {
            if (section.horizontal) {
              return null;
            }
            return <ListItem item={item} />;
          }}
        />
      </SafeAreaView>
    </View>
  );
};

const SECTIONS = [
  {
    // title: 'Made for you',
    horizontal: true,
    data: [
      {
        key: '1',
        text: 'Item text 1',
        uri: 'https://cdn-icons-png.flaticon.com/512/2689/2689417.png',
      },
      {
        key: '2',
        text: 'Item text 2',
        uri: 'https://cdn-icons-png.flaticon.com/512/4065/4065171.png',
      },

      {
        key: '3',
        text: 'Item text 3',
        uri: 'https://cdn-icons-png.flaticon.com/512/2750/2750735.png',
      },
      {
        key: '4',
        text: 'Item text 4',
        uri: 'https://cdn-icons-png.flaticon.com/512/2750/2750735.png',
      },
    ],
  },
  {
    title: 'Fruits',
    horizontal: true,
    data: [
        {
            key: '1',
            text: 'Item text 1',
            uri: 'https://cdn-icons-png.flaticon.com/512/2689/2689417.png',
          },
          {
            key: '2',
            text: 'Item text 2',
            uri: 'https://cdn-icons-png.flaticon.com/512/4065/4065171.png',
          },
    
          {
            key: '3',
            text: 'Item text 3',
            uri: 'https://cdn-icons-png.flaticon.com/512/2750/2750735.png',
          },
          {
            key: '4',
            text: 'Item text 4',
            uri: 'https://cdn-icons-png.flaticon.com/512/2750/2750735.png',
          },
    ],
  },
  {
    title: 'Vegetables',
    horizontal: true,
    data: [
        {
            key: '1',
            text: 'Item text 1',
            uri: 'https://cdn-icons-png.flaticon.com/512/2689/2689417.png',
          },
          {
            key: '2',
            text: 'Item text 2',
            uri: 'https://cdn-icons-png.flaticon.com/512/4065/4065171.png',
          },
    
          {
            key: '3',
            text: 'Item text 3',
            uri: 'https://cdn-icons-png.flaticon.com/512/2750/2750735.png',
          },
          {
            key: '4',
            text: 'Item text 4',
            uri: 'https://cdn-icons-png.flaticon.com/512/2750/2750735.png',
          },
          {
            key: '5',
            text: 'Item text 4',
            uri: 'https://cdn-icons-png.flaticon.com/512/2750/2750735.png',
          },

    ],
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
    color: '#000',
    marginTop: 20,
    marginBottom: 5,
    marginLeft:15,
  },
  item: {
    // backgroundColor: '#000',
    margin: 10,
  },
  itemPhoto: {
    width: 64,
    height: 64,
  },
  itemText: {
    
    color: '#000',
    marginTop: 5,
  },
});