/* 브라우저 호환성 검사 */
const userAgent = document.getElementById("foo_userAgent");
const userBrowser = navigator.userAgent.indexOf('Trident');

function isIE(){
    if  (userBrowser !== -1){
        return true;
    }

    else{
        return false;
    }
};

const IECheck = isIE();

function browser(){
    if (IECheck === true){
        alert('This is an incompatible browser.');
    }
    else{
        userAgent .innerText = "This is a supported browser.";
    }
};

browser();
/* 브라우저 호환성 검사끝 */