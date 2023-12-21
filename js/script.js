function setName() {
    let visitorName = prompt("Halo, siapa nama anda?", "")
    if (visitorName) {
        document.getElementById('visitor-name').innerHTML = visitorName;    
    } else {
        document.getElementById('visitor-name').innerHTML = "No Name";
    }    
}

setName();

//Limit the date input to avoid future date
function limitBirthDateInput(inputName) {
    var input = document.forms["message-form"][inputName];
    var today = new Date();
    var day = today.getDate();

    // Set month to string to add leading 0
    var mon = new String(today.getMonth()+1); //January is 0!
    var yr = today.getFullYear();

    if(mon.length < 2) { mon = "0" + mon; }
    if(day.length < 2) { day = "0" + day; }

    var date = new String( yr + '-' + mon + '-' + day );

    input.disabled = false; 
    input.setAttribute('max', date);
}

limitBirthDateInput("birth-date");

function validateForm() {
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    let gender = document.forms["message-form"]["gender"].value;
    if (gender === 'male') {
        gender = "Laki-Laki";
    } else if (gender === 'female') {
        gender = "Perempuan";
    } else {
        gender = "";
    }
    
    const messages = document.forms["message-form"]["messages"].value;

    if (name == "" || birthDate == "" || gender == "" || messages == "") {
        alert("Tidak boleh ada yang kosong");
        setSenderUI("", "", "", "");    
        return false;
    }
        
    setSenderUI(name, birthDate, gender, messages);
    return false;
}

function setSenderUI(pName, pBirthDate, pGender, pMessages) {
    document.getElementById("sender-full-name").innerHTML = pName;
    document.getElementById("sender-birth-date").innerHTML = pBirthDate;
    document.getElementById("sender-gender").innerHTML = pGender;
    document.getElementById("sender-messages").innerHTML = pMessages;
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs((slideIndex += n));    
}

function showDivs(n) {
    var i;
    var imgList = document.getElementsByClassName("img-slideshow");
    
    if (n > imgList.length) {
        slideIndex = 1;
    } else if (n < 1) {
        slideIndex = imgList.length;
    }

    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
    }

    imgList[slideIndex - 1].style.display = "block";
}

setInterval(() => {
    plusDivs(1);
}, 3000)
