const lowerCaseAlphabets = 'abcdefghijklmnopqrstuvwxyz';
const upperCaseAlphabets = 'ABCDEFGHIJKLMNOPQRSTUVEW';
const digits = '0123456789';
const lowerCaseAlphaNumericChars = 'abcdefghijklmnopqrstuvwxyz0123456789';
const upperCaseAlphaNumericChars = 'ABCDEFGHIJKLMNOPQRSTUVEW0123456789';

const randomiseLowerCaseAplhabetsString = (noOfChars) => {
    let str = '';
    for(let i = 0; i < noOfChars; i++){
        str += lowerCaseAlphabets.charAt(Math.floor(Math.random() * lowerCaseAlphabets.length));
    }
    return str;
}

const randomiseLowerCaseAplhaNumericString = (noOfChars) => {
    let str = '';
    for(let i = 0; i < noOfChars; i++){
        str += lowerCaseAlphaNumericChars.charAt(Math.floor(Math.random() * lowerCaseAlphaNumericChars.length));
    }
    return str;
}

const randomiseNumber = (noOfDigits) => {
    let num = '';
    for(let i = 0; i < noOfDigits; i++){
        num += digits.charAt(Math.floor(Math.random() * digits.length));
    }
    return num;
}

const randomiseEmailAddress = () => {
    return `${randomiseLowerCaseAplhaNumericString(10)}@${randomiseLowerCaseAplhabetsString(5)}.com`;
}

const selectOptByVisibleTxtFromDropdownUsingDOMMtd = async (drpdwnSelector, optTxt) => {
    browser.execute((selector, txt) => {
        let elem = document.evaluate(`${selector}/option[contains(text(),"${txt}")]`, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        if(elem !== null) {
            elem.selected = true;
        } else {
            throw new Error(`An option with ${txt} isn't exists in ${selector}.`);
        }    
    }, drpdwnSelector, optTxt);
}

export {
    lowerCaseAlphabets,
    upperCaseAlphabets,
    digits,
    lowerCaseAlphaNumericChars,
    upperCaseAlphaNumericChars,
    randomiseLowerCaseAplhabetsString,
    randomiseLowerCaseAplhaNumericString,
    randomiseNumber,
    randomiseEmailAddress,
    selectOptByVisibleTxtFromDropdownUsingDOMMtd
}