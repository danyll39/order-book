const reconcileOrder = (ex, incoming) => {
  // let balanceBook = (existingBook, index) => {
  //   existingBook.map((order) => {
  //     // console.log(existingBook)
  //     if (existingBook[0].type !== order.type && existingBook[0].price === order.price){
  //       // remove the found matching order
  //       existingBook.splice(index, existingBook.length-1)
        
  //     } 
  //     return existingBook
      
  //   })

  // }
  console.log(ex)
  console.log('++++++++++++')
  console.log(incoming)
 
  if(ex.length === 0){
    ex.push(incoming)
    return ex
  }
  // const sameIndex = ex.findIndex((order) => { // only find incoming price === existing price  && incoming type !== existing type
  //   return incoming.price === order.price && incoming.type !== order.type
  // })

  for(let i = 0; i < ex.length; i++) {
    if (ex[i].price !== incoming.price || ex[i].type === incoming.type)  {
      ex.push(incoming)
      return ex
    } else if(ex[i].quantity === incoming.quantity && ex[i].type !== incoming.price){
      ex.splice(ex[i].length, 1)
    }
    
     
      
    }
    return ex
    
    // if(ex.quantity[0] > incoming.quantity) {
    //   ex.quantity = ex.quantity -incoming.quantity

    // }
  
  }



}








module.exports = reconcileOrder