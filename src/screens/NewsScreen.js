import React, { useState, useEffect } from "react";
import { FlatList, View, Text, Image, TouchableOpacity } from "react-native";
import AppTextInput from "../components/AppTextInput";
import { API_KEY } from "../env/News";
import { NewsScreenStyles } from "../config/styles";

const NewsScreen = ({ navigation }) => {
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    try {
      fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
          setArticles(data.articles);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={NewsScreenStyles.item}
        onPress={() => navigateToArticle(item)}
      >
        <Image
          source={{ uri: item.urlToImage }}
          style={NewsScreenStyles.image}
        />
        <View style={NewsScreenStyles.textContainer}>
          <Text style={NewsScreenStyles.title}>{item.title}</Text>
          <Text style={NewsScreenStyles.author}>{item.author}</Text>
          <Text style={NewsScreenStyles.description}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const navigateToArticle = (article) => {
    navigation.navigate("Article", { article });
  };

  return (
    <View>
      <View style={NewsScreenStyles.searchBarContainer}>
        <AppTextInput
          style={NewsScreenStyles.searchBar}
          placeholder="Search"
          icon={"layers-search-outline"}
          value={searchQuery}
          onChangeText={(query) => setSearchQuery(query)}
        />
      </View>
      <FlatList
        data={filteredArticles}
        renderItem={renderItem}
        keyExtractor={(item) => item.url}
        style={NewsScreenStyles.list}
      />
    </View>
  );
};

export default NewsScreen;
