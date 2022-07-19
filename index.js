// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    // console.log(someValue)
    const hq = 42
    if(block >= hq) {
        return block - 42
    } else {
        return 42 - block
    }

}

function distanceFromHqInFeet(block){
    return (distanceFromHqInBlocks(block) * 264)
}

function distanceTravelledInFeet(start, end){
    if(start < end){
        return (end - start) * 264
    } else {
        return (start - end) * 264
    }

}

function calculatesFarePrice(start, end){
    let distance = distanceTravelledInFeet(start, end)
    if (distance <= 400){
        return 0;
    }
}
    
// distanceFromHqInBlocks(5);































































// function distanceFromHqInBlocks(street){
//     let distance = Math.abs(street - 42);
//     return distance
// }

// function distanceFromHqInFeet(street){
//     distanceFromHqInBlocks(street);
//     let distance = Math.abs(street - 42);
//     return (distance) * 264
// }

// function distanceTravelledInFeet(start, end){
//     return Math.abs(((start - end) * 264));
// }

// function calculatesFarePrice(start, end){
//     let price = Math.abs(((start - end) * 264));
//     if(price < 400){
//         price = 0
//     } else if(price > 400 && price < 2000){
//         price = ((price - 400) * .02)
//     } else if(price > 2000 && price < 2499){
//         price = 25
//     } else if(price >= 2500){
//         price ='cannot travel that far'
//     }
//     return price
    
// }
