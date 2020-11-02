const  reconcileOrder  = (existingBook, incomingOrder) => {
  // new func to balance book
  let balanceBook = (existingBook) => {
    existingBook.map((order) => {
      // console.log(existingBook)
      if (existingBook[0].type !== order.type && existingBook[0].price === order.price){
        // remove the found matching order
        existingBook.splice(0, 2)
        
      } 
      return existingBook
      
    })

  }
  

  const sameIndex = existingBook.findIndex((order) => { // only find incoming price === existing price  && incoming type !== existing type
    return incomingOrder.price === order.price && incomingOrder.type !== order.type
  })




  if (sameIndex === -1) { // none meet the above conditions -- 1,2, 3
    existingBook.push(incomingOrder)
    return existingBook 
  } else if (incomingOrder.quantity === existingBook[sameIndex].quantity){ // quantity is the same 4
    existingBook.splice(sameIndex, 1)        
    return existingBook 
  } else if (existingBook[sameIndex].quantity > incomingOrder.quantity){
    existingBook[sameIndex].quantity = existingBook[sameIndex].quantity - incomingOrder.quantity 
    
    // console.log(existingBook)
    return existingBook.reverse()
        
  } else if (existingBook[sameIndex].quantity < incomingOrder.quantity) {
   
    existingBook[sameIndex].quantity = (incomingOrder.quantity - existingBook[sameIndex].quantity) 
    existingBook[sameIndex].type = 'sell'
    balanceBook(existingBook)
    return existingBook.reverse()
  } 
    


}


    
 

 

  
  







module.exports = reconcileOrder