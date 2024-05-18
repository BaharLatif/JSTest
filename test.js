let digits = [54,65,152,748,100,58]



function adjustArray(arr)
{
    return arr.map(value => {
        if(value <= 100) {
            return value *2;
        } else if (value > 100) {
            return Math.pow(value, 2);
        }
        return value;
    })
}

console.log(adjustArray(digits));