/**
 * Created by h205p2 on 9/27/17.
 */

//Problem 11
function firstLast6(list){
    if(list.indexOf(6)==0||list.lastIndexOf(6)==list.length-1){
        return true;
    }else{
        return false;
    }
}

//Problem 12
function has23(array){
    var list=7+array;
    if(list.indexOf(3)>0||list.indexOf(2)>0){
        return true;
    }else{
        return false;
    }
}

//Problem 13
function fix23(array) {
    var x=0;
    if(array.indexOf(2)==0&&array.indexOf(2,1)==1){
        var x=1;
}
if(array.indexOf(3,array.indexOf(2)+x)==array.indexOf(2)+1+x) {

    array[array.indexOf(3,array.indexOf(2))]=0;
    return array;
    }else{
        return array;
    }
}


//Problem 14
function countYZ(wordLowercase){
    var word= wordLowercase.toLowerCase();
    var sum=0;
    for(var i=0;i<word.length-1 ;i++){
        if(word[i] == ' '){
          if(word[i-1]=='y'||word[i-1]=='z') {
              sum++;
          }
        }
}
if(word[word.length-1]=='y'||word[word.length-1]=='z'){
    sum++
}
    return sum;
}

//Problem 15
function endOther(word1, word2){
    var x=word1.toLowerCase();
    var y=word2.toLowerCase();
    if(x.endsWith(y)){
        return true;
    }else {
        if (y.endsWith(x)) {
            return true;
        } else {
            return false;
        }
    }
}

//Problem 16
function starOut(word) {
    sum = '';
    if (word.length > 0) {
        for (var i = 0; i < word.length - 1; i++) {
            if (word[i + 1] != '*' && word[i] != '*' && word[i - 1] != '*') {
                sum += word[i];
            }
        }
    if (word[word.length - 2] != '*') {
        sum += word[word.length - 1];
    }
}
if(word[word.length-1]=='*'){
        sum=sum.substr(0,word.length-2);
}
   return sum;
}

//Problem 17
function getSandwich(things){
    var x;
    var y;
    for(var i=0;i<things.length-1;i++) {
        if (things[i] == 'b' && things[i+1] == 'r' && things[i+2] == 'e' && things[i+3] == 'a' && things[i+4] == 'd'){
            x=i+5;
            for(var l=x;l<things.length-1;l++){
                if(things[l] == 'b' && things[l+1] == 'r' && things[l+2] == 'e' && things[l+3] == 'a' && things[l+4] == 'd'){
                    y=l;
                    var sum=things.substring(x,y);
                    var breakIt = true;
                }
            }
        }
        if(breakIt){
            break;
        }
    }
if(y) {
    return sum;
}else{
        return'';
}
}

//Problem 18
function canBalance(elements) {
    var sum1 = 0;
    var sum2 = 0;
    var skip=false;
    for (var x = 1; x < elements.length+1;x++){
        if(skip==true){
            break;
        }
        for (var i = 0; i < x; i++) {
            sum1 += elements[i];
        }
    for (var i = x; i < elements.length; i++) {
        sum2 += elements[i];
    }
 if(sum1==sum2){
     return true;
     skip=true;
 } else{
     sum1=0;
     sum2=0;
 }
}
if(skip==false){
        return false;
}
}

//Problem 19
function countClumps(list){
   var activation=false;
    var sum=0;
for(var i=0;i<list.length;i++){
   activation=false;
    while(list[i]==list[i+1]){
       activation= true;
        i++;
    }
    if(activation==true){
        i--;
        sum++;
    }
    }
    return sum;
}

//Problem 20
function evenlySpaced(a,b,c){
    var x=Math.abs(a-b);
    var y=Math.abs(b-c);
    var z=Math.abs(a-c);
    if(a==b||a==c||c==b){
        if(a!=b||a!=c||b!=c){
            return false;
        }
    }
if(x==y||z==y||z==x){
        return true;
}
    return false;
}










function tester() {
    document.getElementById("output1").innerHTML = firstLast6([4,6,5,7]);
    document.getElementById("output2").innerHTML = has23([1,3]);
    document.getElementById("output3").innerHTML = fix23([2,5,3]);
    document.getElementById("output4").innerHTML = countYZ('DAY abc XYZ');
    document.getElementById("output5").innerHTML = endOther('abcday','dajsbdi');
    document.getElementById("output6").innerHTML = starOut('stringy*');
    document.getElementById("output7").innerHTML = getSandwich('xxbreadjambreadyy');
    document.getElementById("output8").innerHTML = canBalance([2,4,6,8,2]);
    document.getElementById("output9").innerHTML = countClumps([2,2,2,2,2,2]);
    document.getElementById("output10").innerHTML = evenlySpaced(2,4,6);

}