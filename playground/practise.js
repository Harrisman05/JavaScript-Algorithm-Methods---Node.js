function order(words){
  
    if (words.length === 0) {
      return '';
    }
    
    console.log(words);
    
    let orderedString = '';
    let originalOrder = [];
    let orderMap = new Map(); 
    
    let wordsSplit = words.split(" ");
    
    for (let word of words) {
      
      for (let letter of word) {
        
        if (letter.charCodeAt(0) >= 48 && letter.charCodeAt(0) <= 57) {
        
          originalOrder.push(Number(letter));
          
        }
      }
    }
    
    console.log(originalOrder);
    
    for (let i = 0; i < wordsSplit.length; i++) {
      
      orderMap.set(originalOrder[i], wordsSplit[i]);
      
    }
    
    console.log(orderMap);
    
    for (let i = 1; i < orderMap.size + 1; i++) {
      orderedString += orderMap.get(i) + ' ';
    }
    
    console.log(orderedString);
    orderedString = orderedString.slice(0,-1);
    console.log(orderedString);
    
    return orderedString;
  }

  order("is2 Thi1s T4est 3a");