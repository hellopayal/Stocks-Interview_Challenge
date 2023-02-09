import stocks from "../stocks.json" assert { type: "json" };

const Portfolio = (input) => {
  let totalValue = 0;
  var item = input.split(",")
  
  item.map((stock) => {
    const ticker = stock.split(':')[0];
    const quantity = stock.split(':')[1];
    const stockData = stocks.find((s) => s.ticker === ticker);
    totalValue += stockData.close * quantity;
  });

  return totalValue;
};

export default Portfolio;


