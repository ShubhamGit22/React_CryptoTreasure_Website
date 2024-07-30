import React, { useEffect, useState } from "react";
import Header from "../components/common/Header/Header";
import TabsComponent from "../components/Dashboard/Tabs/Tabs";
import axios from "axios";
import Search from "../components/Dashboard/Search/Search";
import Loader from "../components/common/Loader/Loader";
import BackToTop from "../components/common/BackToTop/BackToTop";

const DashboardPage = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const onSearchChange = (e) => {
    // console.log(e.target.value)
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((item) => {
    return (
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.symbol.toLowerCase().includes(search.toLowerCase())
    );
  });

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=100"
      )
      .then((response) => {
        // console.log("RESPONSE>>>", response)
        setCoins(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("ERROR>>>", error);
      });
  }, []);

  return (
    <>
      <Header />
      <BackToTop />
      <Search search={search} onSearchChange={onSearchChange} />
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <TabsComponent coins={filteredCoins} />
        </div>
      )}
    </>
  );
};

export default DashboardPage;
