const NewsScreenStyles = {
  list: {
    paddingHorizontal: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  author: {
    fontSize: 14,
    color: "#272525",
    marginBottom: 5,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: "#444",
  },
  searchBarContainer: {
    marginHorizontal: 10,
  },
  searchBar: {
    padding: 7,
    borderRadius: 20,
  },
};
const ArticleScreenStyles = {
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
  },
  author: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  content: {
    fontSize: 16,
    marginBottom: 8,
  },
  source: {
    fontSize: 16,
    color: "blue",
    textDecorationLine: "underline",
    marginBottom: 8,
  },
};
const HomeScreenStyles = {
  buttonContainer: {
    justifyContent: "flex-end",
    flex: 1,
    padding: 15,
  },
};
const LoginScreenStyles = {
  container: {
    padding: 15,
    flex: 1,
    justifyContent: "center",
  },
  registerButton: {
    fontSize: 18,
    fontWeight: "500",
    color: "#0a234f",
  },
  registerText: {
    color: "#031431",
    fontWeight: "bold",
  },
  error: {
    color: "red",
  },
};
export {
  NewsScreenStyles,
  ArticleScreenStyles,
  HomeScreenStyles,
  LoginScreenStyles,
};
