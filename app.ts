//write a java script function to find the first not repeated character.

function getFirstUniqueChar(str: string){
    for (let i = 0; i < str.length; i++){
        const char = str[i];
        if(str.indexOf(char) === str.lastIndexOf(char)){
            return `${char} is the first unique character in the given string.`;

        }
    }
}
 console.log(getFirstUniqueChar("what is the first w unique char in this string "));