var input = "This is an example of whale talk AUEUUU";
var vowels = ["a", "e", "i", "o", "u"];
var resultArray = [];


for(let i = 0; i < input.length; i++){
    for (let j = 0; j < vowels.length; j++){
        if (input[i].toLowerCase() === vowels[j]){
            if(vowels[j] === "u" || vowels[j] === "e"){
                resultArray.push(input[i].toLocaleLowerCase());
                resultArray.push(input[i].toLocaleLowerCase());
            }
            resultArray.push(input[i].toLowerCase());
        }
    }
}
console.log(resultArray.join(''));
