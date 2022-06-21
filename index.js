class SortedList {
  constructor() {
    this.items= []
    this.length= this.items.length;
    
  }

  add(item) {
this.items.push(item);
this.items.sort((a,b)=> a-b)
this.length=this.items.length
  }

  get(pos) {
    if(pos>this.items.length){
      return OutOfBonds
    }
    else{
return this.items[pos]}
  }

  max() {
    if(this.items.length=== 0){
      return EmptySortedList
    }
    else{
      return Math.max(...this.items)
    }
  }

  min() {
    if(this.items.length=== 0){
      return EmptySortedList
    }
    else{
      return Math.min(...this.items)
    }
  }

  sum() {
    let suma=0
    for(let i=0; i<this.items.length; i++){
      suma+= this.items[i]
    }
    return suma
  }

  avg() {
    let avg=0
    if(this.items.length===0){
      return EmptySortedList
    }
    else{
    for(let i=0; i<this.items.length; i++){
      avg+= this.items[i]
    }
    avg=avg/this.items.length
    return avg}
  }
}

module.exports = SortedList;
