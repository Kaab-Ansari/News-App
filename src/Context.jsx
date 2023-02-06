// import React from "react";

// const NewsContext = React.createContext();

// function NewsContextProvider(props) {
//   const [news, setNews] = React.useState([]);
//   //   console.log(newsData)

//   React.useEffect(() => {
//     fetch(
//       "https://newsapi.org/v2/everything?q=bitcoin&apiKey=420f9e74420b43ff80404415a3240aa3"
//     )
//       .then((res) => res.json())
//       .then((data) => setNews([data.articles]));
//   }, []);

//   return (
//     <NewsContext.Provider value={{ news }}>
//       {props.children}
//     </NewsContext.Provider>
//   );
// }

// export { NewsContext, NewsContextProvider };
