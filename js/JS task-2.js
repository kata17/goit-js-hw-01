function getShippingMessage(country, price, deliveryFee) {
    let totalPrice = price + deliveryFee;
    return Shipping to ${country} will cost ${totalPrice} credits;
  }
  
  console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
  console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
  console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"
  function getElementWidth(content, padding, border) {
    const contentWidth = parseInt(content);
    const paddingWidth = parseInt(padding);
    const borderWidth = parseInt(border);
  
    return contentWidth + paddingWidth + borderWidth;
  }
  
  console.log(getElementWidth("50px", "8px", "4px")); // 74
  console.log(getElementWidth("60px", "12px", "8.5px")); // 101
  console.log(getElementWidth("200px", "0px", "0px")); // 200
  