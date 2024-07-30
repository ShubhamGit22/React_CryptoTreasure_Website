import React from "react";
import "./List.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

const List = ({ coin }) => {
  return (
    <Link to={`/coin/${coin.id}`}>
    <tr className="list-row">
        <Tooltip title="Coin-Image" placement="bottom"  followCursor>
      <td className="td-image">
        <img src={coin.image} className="coin-logo" alt="" />
      </td>
      </Tooltip>
      <Tooltip title="Coin-Details" placement="bottom" followCursor> 
      <td>
        <div className="name-col">
          <p className="coin-symbol">{coin.symbol}</p>
          <p className="coin-name">{coin.name}</p>
        </div>
      </td>
      </Tooltip>
      {coin.price_change_percentage_24h > 0 ? (
        <Tooltip title="upward_price_change_percentage_in_24h" placement="bottom"  followCursor>
        <td className="chip-flex">
          <div className="price-chip">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className="icon-chip td-icon">
            <TrendingUpRoundedIcon />
          </div>
        </td>
        </Tooltip>
      ) : (
        <Tooltip title="downward_price_change_percentage_in_24h" placement="bottom" followCursor> 
        <td className="chip-flex">
          <div className="price-chip chip-red">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className="icon-chip chip-red td-icon">
            <TrendingDownRoundedIcon />
          </div>
        </td>
        </Tooltip>
      )}
        <Tooltip title="Value-Of-Single-Coin" placement="bottom" followCursor> 
      <td>
        <h3
          className="coin-price td-center-align"
          style={{
            color:
              coin.price_change_percentage_24h > 0
                ? "var(--green)"
                : "var(--red)",
          }}
        >
          ${coin.current_price.toLocaleString()}
        </h3>
      </td>
      </Tooltip>
      <Tooltip title="Total-Volume" placement="bottom" followCursor> 
      <td>
        <p className="total_volume td-right-align ">
         ${coin.total_volume.toLocaleString()}
        </p>
      </td>
      </Tooltip>
      <Tooltip title="Market-Cap" placement="bottom" followCursor> 
      <td>
        <p className="total_volume td-right-align td-total-volume">
         ${coin.market_cap.toLocaleString()}
        </p>
      </td>
      </Tooltip>
    </tr>
    </Link>
  );
};

export default List;
