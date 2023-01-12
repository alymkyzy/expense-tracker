import "./ChartBar.css";

export const ChartBar =({ maxPrice, currentPrice, label }) => {
    const fillHeight = (100 * currentPrice) / maxPrice;

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height: `${fillHeight}px`}}></div>
            </div>
            <p className="chart-bar__label">{label}</p>
        </div>
    )
}