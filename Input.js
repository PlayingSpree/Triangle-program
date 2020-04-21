function getInput() {
    let i1 = validateInput(document.getElementById('input1').value)
    let i2 = validateInput(document.getElementById('input2').value)
    let i3 = validateInput(document.getElementById('input3').value)
    return [i1,i2,i3]
}

function validateInput(input) {
    if (/^\d+$/.test(input)){
        let i = parseInt(input, 10)
        return i<=1000000000? i:NaN
    }
    else{
        return NaN
    }
}