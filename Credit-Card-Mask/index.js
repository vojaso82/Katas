// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.
// Examples
// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""

// // "What was the name of your first pet?"
// maskify("Skippy")                                   == "##ippy"
// maskify("Nananananananananananananananana Batman!") == "####################################man!"


// Solution1
function maskify(cc) {
    let string1 = cc.slice(Math.max(cc.length -4, 1))
    let string2 = cc.slice(0, cc.length-4).split("").map(each => each = "#").join("")
    if(cc.length <= 4 ){
      return cc
    } else{
      return string2+string1
    }
    }


    // Solution2

    function maskify(cc) {
        let string1 = "";
        for(let i = 0; i < cc.length; i++) {
          if(i < cc.length - 4) {
            string1 = string1 + "#";
          } else {
            string1 = string1 + cc.charAt(i);
          };
        }
        return string1;
      }