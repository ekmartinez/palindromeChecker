function palindrome(str) {

    function stripper(str){
        const special = [",", ".", "*", " ", ":", "/", 
        "-", "\\", ":", "_", "|", "(", ")"];
        
        let strippedStr = "";
    
        for (let x = 0; x < str.length; x++) { 
            if (special.includes(str[x])) {
                strippedStr += "";
            } else {
                strippedStr += str[x].toLowerCase();
            }
        }
        return strippedStr;
    }

    const strArray = stripper(str).split("");

    let reversed = "";

    for (let j = strArray.length-1; j >= 0; j--) {
        reversed += (strArray[j]);
    }
    if (stripper(str) == reversed) {
        return true;
    } 
    else {
        return false;
    }
}

palindrome("eye");