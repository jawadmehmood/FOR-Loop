// Question#1

for(var i = 1; i <= 5; i++){
    console.log('Hello World');
}

// Question#2

for(var i = 1; i <= 10; i++){
    console.log(i);
}

// Question#3

// var tableNum = +prompt('Enter a number to print its multiplication table');
// var tableLength = +prompt('Enter length of multiplication table');

// for(var i = 1; i <= tableLength; i++){
//     console.log(tableNum + ' * ' + i + ' = ' + tableNum * i);
// }

// Question#4

var A = ['Nokia' , 'Samsung' , 'Apple' , 'Sony' , 'Huawei'];

for(var i = 0; i < A.length; i++){
    console.log(A[i]);
}

// Question#5

var fruits = ['apple' , 'banana' , 'mango' , 'orange' , 'strawberry'];

for(var i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

for(var i = 0; i < fruits.length; i++){
    console.log('Element at index ' + i + ' is ' + fruits[i]);
}

// Question#6

// var nItems = [];
// var nItemsLength = +prompt('Enter number of items');
// console.log('Number of items: ' + nItemsLength);

// for(var i = 0; i < nItemsLength; i++){
//     var item = prompt('Enter value for index ' + i);
//     console.log(item);
// }

// Question#7

for(var i = 1; i <= 15; i++){
    console.log(i);
}

for(var i = 10; i >= 0; i--){
    console.log(i);
}

for(var i = 0; i <= 20; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}

for(var i = 1; i < 20; i++){
    if(i % 2 != 0){
        console.log(i);
    }
}

for(var i = 2; i <= 20; i++){
    if(i % 2 == 0){
        console.log(i + 'k');
    }
}

// Question#8

// var bakeryItems = ['cake' , 'apple pie' , 'cookie' , 'chips' , 'patties'];
// var order = prompt('Welcome to Al-Abbas Bakery. What do you want to order?');

// if(order === null || order.trim() === '' || order === undefined){
//     console.log('Enter some bakery item');
// }
// else if(order == 'cake' || order == 'apple pie' || order == 'cookie' || order == 'chips' || order == 'patties'){
//     console.log(order + ' is available at index ' + bakeryItems.indexOf(order) + ' in our bakery');
// }
// else{
//     console.log('We are sorry. ' + order + ' is not available in our bakery');
// }

