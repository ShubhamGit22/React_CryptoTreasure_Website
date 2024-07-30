import { convertDate } from "./ConvertDate";

export const settingChartData = (setChartData, prices) => {

    setChartData({
        // labels: ["Mon", "Tues", "Wed", "thur", "Fri", "Sat"],
        labels: prices.map((price) => convertDate(price[0])),
        datasets: [
          {
            // data:[12, 15, 12, 9, 20],
            data: prices.map((price) => (price[1])),
            borderColor: "#3a80e9",
            backgroundColor: "transparent",
            borderWidth: 1,
            fill: true,
            backgroundColor: "rgba(58, 128, 233,0.1)",
            tension: 0.25,
            borderColor: "#3a80e9",
            pointRadius: 0,
          },
        ],
      });
    }
