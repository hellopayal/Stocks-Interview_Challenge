const MaxProfit = (input) => {

    if(input === undefined || typeof input !== "string"){
        throw new Error('Invalid Input');
    }
    
    const prices = input === "" ? [] : input.split(","); 
    if(prices === undefined || !(prices instanceof Array) ) {
        throw new Error('invalid price array');
    }

    const legthOfPriceArray = prices.length;

    if(legthOfPriceArray === 0) {
        return 0;
    }

    let profit = 0;
    let buyPrice = prices[0];
    let sellPrice = 0;

    if(buyPrice <= 0) {
        throw new Error('invalid price');
    }


    for(let i=1; i < legthOfPriceArray ; i++) {
        
        if( prices[i] <= 0 ) {
            throw new Error('invalid price');
        }

        if(prices[i] > buyPrice) {
            if( prices[i] - buyPrice > profit) {
                profit = prices[i] - buyPrice;
                sellPrice = prices[i];
            }
        } else {
            buyPrice = prices[i];
        }
    }
    
    return profit;
};

export default MaxProfit;