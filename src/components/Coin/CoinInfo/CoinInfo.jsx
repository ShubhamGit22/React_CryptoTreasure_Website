    import React, { useState } from "react";
    import "./CoinInfo.css";

    const CoinInfo = ({ heading, desc }) => {
    const shortDesc =
        desc.slice(0, 250) +
        "<span style= 'color:var(--grey)'> Read more...</span>";

    const longDesc =
        desc + "<span style= 'color:var(--grey)'> See less...</span>";

    const [flag, setFlag] = useState(false);

    return (
        <div className="grey-wrapper">
        <h2 className="coin-info-heading">{heading}</h2>
        {desc.length > 250 ? (
            <p
            onClick={() => setFlag(!flag)}
            className="coin-info-desc"
            dangerouslySetInnerHTML={{ __html: !flag ? shortDesc : longDesc }}
            />
        ) : (
            <p
            className="coin-info-desc"
            dangerouslySetInnerHTML={{ __html: desc }}
            />
        )}
        </div>
    );
    };

    export default CoinInfo;
