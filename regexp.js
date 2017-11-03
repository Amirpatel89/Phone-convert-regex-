// take str and return 555-555-5555
function convertPhone(phoneStr) {
    // var case1 = new RegExp('/d/d/d-/d/d/d-/d/d/d/d')
    var test = phoneStr.replace(/[^\d]/g,'')
    
    return test
    }
// possible inputs
var numbers = [
    '555-555-5555',
    '(555)555-5555',
    '555 555 5555',
    '555 555-5555',
    '1-555-555-5555',
    '(1)555-555-5555',
    '5555555555',
    '555-five-55-aebdgtxi;;3tt4greqr6seven',
    '5-trumprules-555-5-5-5-5-5-5',
    '2798504trumpforprez23587928579428795458792',
    '1-800-ninjas-are-cool',
    '1900-acdc4life',
]
numbers.map((number)=>{
    console.log(convertPhone(number));  
})
