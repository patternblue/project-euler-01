/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

//function that checks if a number is a multiple of 3 or 5

function go(){
    var checkMultiple = function(aNumber){
        if (aNumber % 3 === 0 || aNumber % 5 === 0){
            return true;
        }
        else{
            return false;
        }    
    }

    //function to calculate sum of multiples below a given number
    var calculateSumOfMultiplesBelow = function(someNumber){
        var theSum = 0;
        for (i = 0; i < someNumber; i++){
            var isAMultiple = checkMultiple(i);
            if(isAMultiple){
                theSum += i;
            }
        }
        return theSum;
    }
    var theSum = calculateSumOfMultiplesBelow(1000);
    document.write(theSum);
}

