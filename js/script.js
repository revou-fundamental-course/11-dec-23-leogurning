function setName(pname) {
    document.getElementById('visitor-name').innerHTML = pname;
}

let visitorName = prompt("Halo, siapa nama anda?", "")
setName(visitorName);

function validateForm() {
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    let gender = document.forms["message-form"]["gender"].value;
    if (gender === 'male') {
        gender = "Laki-Laki";
    } else if (gender === 'female') {
        gender = "Perempuan";
    } else {
        gender = "Tidak Terdefinisi";
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
