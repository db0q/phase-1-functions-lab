// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    if (someValue>42){
        return someValue-42
    }else{
       return 42-someValue
    }
  }
  function distanceFromHqInFeet(someValue){
 let block = distanceFromHqInBlocks(someValue) ;
 return block * 264
  }
  function distanceTravelledInFeet(start, destination){
    if (start<destination){
  return (destination-start)*264
}else {
    return (start-destination)*264
}
  }
function  calculatesFarePrice(start, destination){
    let feet=distanceTravelledInFeet(start, destination);
    if (feet<=400){
        return 0
    }else if (feet>400 && feet<2000){
        return (feet-400)*2/100
    }else if (feet>2000 && feet<2500){
     return 25
    }
    else{
        return 'cannot travel that far'
    }
}
