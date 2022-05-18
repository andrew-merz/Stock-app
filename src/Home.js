// import { useState } from "react";
// import axios from "axios";

// function Home(props) {
//   const [trending, setTrending] = useState([]);
//   const trends = {
//     method: "GET",
//     url: `https://yfapi.net/v1/finance/trending/US`,
//     params: { modules: "defaultKeyStatistics,assetProfile" },
//     headers: {
//       "x-api-key": "i5On2nDfGB5pnfrMoXH1v5tuJXaMepfG5FnA1GxK",
//     },
//   };
//   axios
//     .request(trends)
//     .then(function (response) {
//       console.log(response.data.finance);
//       setTrending(response.data);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
//   return (
//     <div className="Home">
//       <h1>Home Container</h1>
//       <Home trending={trending} />
//     </div>
//   );
// }

// export default Home;
