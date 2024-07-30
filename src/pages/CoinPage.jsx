import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/common/Header/Header";
import Loader from "../components/common/Loader/Loader";
import { coinObject } from "../functions/settingCoinObject";
import List from "../components/Dashboard/List/List";
import CoinInfo from "../components/Coin/CoinInfo/CoinInfo";
import { getCoinData } from "../functions/getCoindata";
import { getCoinPrices } from "../functions/getCoinPrices";
import LineChart from "../components/Coin/LineChart/LineChart";
import SelectDays from "../components/Coin/SelectDays/SelectDays";
import { settingChartData } from "../functions/settingChartData";
import { convertDate } from "../functions/ConvertDate";
import Footer from "../components/Coin/Footer/Footer";

const CoinPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState();
  const [days, setDays] = useState(30);
  const [chartData, setChartData] = useState({});

  // const params = useParams()
  // console.log(params)

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  async function getData() {
    const data = await getCoinData(id);
    if (data) {
      coinObject(setCoinData, data);
      const prices = await getCoinPrices(id, days);
      if (prices.length > 0) {
        console.log("WoHoooo");

        setChartData({
          // labels: ["Mon", "Tues", "Wed", "thur", "Fri", "Sat"],
          labels: prices.map((price) => convertDate(price[0])),
          datasets: [
            {
              // data:[12, 15, 12, 9, 20],
              data: prices.map((price) => price[1]),
              borderColor: "#3a80e9",
              backgroundColor: "transparent",
              borderWidth: 1,
              fill: true,
              // backgroundColor: "rgba(58, 128, 233,0.1)",
              tension: 0.25,
              pointRadius: 0,
            },
          ],
        });
      }
      setIsLoading(false);
    }
  }

  const handleDaysChange = async (event) => {
    setIsLoading(true);

    const prices = await getCoinPrices(id, event.target.value);
    if (prices.length > 0) {
      console.log("WoHoooo");

      settingChartData(setChartData, prices);
      setIsLoading(false);
    }
    setDays(event.target.value);
  };
  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="grey-wrapper">
            <List coin={coinData} />
          </div>
          <div className="grey-wrapper">
            <SelectDays days={days} handleDaysChange={handleDaysChange} />
            <LineChart chartData={chartData} />
          </div>
          <CoinInfo heading={coinData.name} desc={coinData.desc} />
          <Footer />
        </>
      )}
    </div>
  );
};

export default CoinPage;
