console.log('Hello world!');

let numbers = [2, 4, 6, 8, 10, 12, 14];
//Loop through an array, and console log it.

//Loop through (starting var) to (ending var) in incraments of (incrament)
for(let i = 0; i < numbers.length; i++){
    //Conext - not necassary
    console.log('The current index is: ', i, ' and the number at that index is: ', numbers[i]);

    if (numbers[i]%3 == 0){
        console.log('The number', numbers[i], 'is divisible by 3!');
    }
}

for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

//Define an array of people
let people = ['James', 'Kevin', 'Amanda', 'Melvin', 'Sam', 'Andrew', 'Cassandra', 'Neil', 'Mary'];

//Define a for loop, counting until the people index length, in incraments of one
for (let i = 0; i < people.length; i++){

    //Use an "if" statement to check if the index is 'Sam' and print the result
    if(people[i] == 'Sam'){
        document.querySelector('h1').textContent = ("We found " + people[i] + ". They are at " + i);
        console.log('Sam is at index', i);
    }
    //If the index is not 'Sam,' then print the result.
    else{
        //alert('Sam is not at index ' + i);
        console.log('Sam is not at index',i);
    }

}

//document.querySelector('h1').textContent = "Test from JavaScript";