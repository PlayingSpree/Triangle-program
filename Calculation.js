function calculate(input){
    if(input.includes(NaN)){
        return "Input Error";
    }
    let min = Math.min(...input)
    let max = Math.max(...input)
    for(let i = 0; i < input.length; i++){
         if ( input[i] === min) { 
            input.splice(i, 1);
            break;
        }
    }
    for(let i = 0; i < input.length; i++){
        if ( input[i] === max) { 
           input.splice(i, 1);
           break;
       }
   }
   let mid = input[0]

    if((min+mid)<=max){
        return "ไม่ใช่สามเหลี่ยม"
    }else if(((min*min)+(mid*mid))==(max*max)){
        return "สามเหลี่ยมมุมฉาก"
    }else if(min==mid && mid==max){
        return "สามเหลี่ยมด้านเท่า"
    }else if(min==mid || mid==max){
        return "สามเหลี่ยมหน้าจั่ว"
    }
    return "สามเหลี่ยมด้านไม่เท่า"
}