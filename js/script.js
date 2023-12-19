function setName(pname) {
    document.getElementById('visitor-name').innerHTML = pname;
}

let visitorName = prompt("Halo, siapa nama anda?", "")
setName(visitorName);

function validateForm() {
    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const messages = document.forms["message-form"]["messages"].value;

    if (name == "" || birthDate == "" || gender == "" || messages == "") {
        alert("Tidak boleh ada yang kosong");
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