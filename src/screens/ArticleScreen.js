import React from "react";
import { View, Text, Image, Linking } from "react-native";
import { ArticleScreenStyles } from "../config/styles";

const ArticleScreen = ({ route }) => {
  const { article } = route.params;
  const handlePress = () => {
    Linking.openURL(article.url);
  };

  return (
    <View style={ArticleScreenStyles.container}>
      <Image
        style={ArticleScreenStyles.image}
        source={{ uri: article.urlToImage }}
      />
      <Text style={ArticleScreenStyles.title}>{article.title}</Text>
      <Text style={ArticleScreenStyles.author}>By {article.author}</Text>
      <Text style={ArticleScreenStyles.content}>{article.content}</Text>
      <Text style={ArticleScreenStyles.source} onPress={handlePress}>
        Read More
      </Text>
    </View>
  );
};

export default ArticleScreen;
