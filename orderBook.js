const reconcileOrder = (existing, incoming) => {
  const newBook = []
  
  for(let i = existing.length - 1; i >= 0; i--) {
    if(incoming.type !== existing[i].type && incoming.price === existing[i].price && incoming.quantity === existing[i].quantity){
      existing.splice(i, 1)
      i++
      incoming = 0
    } else if (incoming.type !== existing[i].type && incoming.price === existing[i].price && incoming.quantity < existing[i].quantity){
      existing[i].quantity = existing[i].quantity - incoming.quantity
      incoming = 0
      existing.push(existing[i])
      existing.splice(i, 1)
      i++
    } else if(incoming.type !== existing[i].type && incoming.price === existing[i].price && incoming.quantity > existing[i].quantity){
      incoming.quantity = (incoming.quantity - existing[i].quantity)
      existing.splice(i, 1)
      i++
    }
  }
  if (existing.length !== 0 && incoming === 0) {
    newBook.push(...existing)
  } else if (existing.length === 0 && incoming !== 0) {
    newBook.push(incoming)
  } else if (existing.length !== 0 && incoming !== 0) {
    newBook.push(...existing)
    newBook.push(incoming) 
  }
  return newBook  
}

module.exports = reconcileOrder

