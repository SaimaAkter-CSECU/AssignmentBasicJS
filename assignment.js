// Problem 1 : Convert feet to Mile. 
function feetToMile(convertToMile) {
    if (convertToMile <0) {
        var mile = 'Invalid'; 
        console.log('Distance cannot be negative'); 
    }
    else{
        var mile = convertToMile * 0.00018939; 
    }
    return mile;
}
var feet = 150000; 
var findMile = feetToMile(feet); 
console.log(feet, 'Feet = ', findMile, 'Miles'); 



// Problem 2 : Calculate number of wood. 
function woodCalculator(chairNum, tableNum, bedNum) {
    if (chairNum <0 || tableNum <0 || bedNum < 0) {
        console.log('Number of Furnitures cannot be Negative'); 
        var totalWood = 'Invalid'; 
    } 
    else {
        var woodForChair = chairNum * 1; 
        var woodForTable = tableNum * 3;
        var woodForBed = bedNum * 5;
        var totalWood = woodForChair + woodForTable + woodForBed;    
    }
    return totalWood; 
}
var chairNumber = 12; 
var tableNumber = 2;
var bedNumber = 3; 
var findWood = woodCalculator(chairNumber,tableNumber,bedNumber); 
console.log('Total Required Wood: ', findWood , 'Cubic Feet');



//Problem 3 : calculate number of Bricks in a Building. 
function brickCalculator(numberOfFloor) {
    if(numberOfFloor <1){
        console.log('Number of Floor cannot be zero or negative'); 
        var bricks = 'Invalid Value'; 
    }
    if(numberOfFloor >= 1 && numberOfFloor <=10){
        var bricks = numberOfFloor * 15 * 1000;  
    } 
    else if(numberOfFloor >= 11 && numberOfFloor <=20){
        var totalBricks1 = 10 * 15 * 1000; 
        var floorRemain = numberOfFloor % 10; 
        var totalBricks2 = floorRemain * 12 * 1000; 
        
        var bricks = totalBricks1 + totalBricks2;  
    }
    else if ( numberOfFloor > 20){
        var totalBricks1 = 10 * 15 * 1000; 
        var totalBricks2 = 10 * 12 * 1000; 
        var floorRemain = numberOfFloor - 20; 
        var totalBricks3 = floorRemain * 10 * 1000; 
        var bricks = totalBricks1 + totalBricks2 + totalBricks3;  
    }
    return bricks; 
}
var floor = 45; 
var calculateBrick = brickCalculator(floor); 
console.log('Required Brick: ', calculateBrick); 



// Problem 4 : Find out Smallest Name from an Array. 
var friendName = ['Saima', 'M', 'Nishana', '', 'Purna', 'Pri', 'Fariba', ' ', 'Sa']; 
var minName = friendName[0]; 
function tinyFriend(nameArray) {
    for (var i = 0; i < nameArray.length; i++) {
        var element = nameArray[i];
        if (element.length < minName.length && element.length != 0 && element != ' ') {
            minName = element;
        } 
    }
    return minName;
}
var checkTinyName = tinyFriend(friendName); 
console.log('Shortest Name is: ', minName); 