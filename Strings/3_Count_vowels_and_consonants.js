//// Count vowels and consonants in a string
let str = 'sachin'
let vowels = ''
let consonants= ''
for(let i=0;i<str.length;i++){
    if((str[i]).toLowerCase() == 'a' || (str[i]).toLowerCase() == 'e' || (str[i]).toLowerCase() == 'i' || (str[i]).toLowerCase() == 'o' || (str[i]).toLowerCase() == 'u'){
        vowels+=str[i]
    }else{
        consonants+=str[i]
    }
}
console.log('vowels: ',vowels.length,'is ',vowels.split(''))
console.log('consonants: ',consonants.length,'is ',consonants.split(''))



////orUsing includes() method
let string = 'sachin'
let vowel = ''
let consonant= ''
for(let i=0;i<string.length;i++){
    if("aeiou".includes(string[i].toLowerCase())){
        vowel+=string[i]
    }else{
        consonant+=string[i]
    }
}
console.log('vowels: ',vowel.length,'is ',vowel.split(''))
console.log('consonants: ',consonant.length,'is ',consonant.split(''))



//// Using Regular
let str1 = 'sachin'
let vowels1 = str1.match(/[aeiou]/gi) || [];
let consonants1 = str1.match(/[^aeiou]/gi) || [];

console.log(vowels1);
console.log(consonants1);