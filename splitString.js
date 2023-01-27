function solution(str){
    // abc => [ab, c_]
   return (str.length % 2 ? str + '_' : str).match(/../g)
  }

 console.log( solution('abcdbc'))
 console.log( solution('abc'))