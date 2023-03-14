let errors = new Array()
let voornaam = document.querySelector('#firstName').value
let familienaam = document.querySelector('#lastName').value
let gebruikersnaam = document.querySelector('#username').value
let emailadres = document.querySelector('#email').value
let wachtwoord = document.querySelector('#Password').value
let herhaalWachtwoord = document.querySelector('#Herhaalwachtwoord').value
let adres = document.querySelector('#address').value
let land = document.querySelector('#land').value
let provincie = document.querySelector('#provincie').value
let postcode = document.querySelector('#postcode').value

checkEmptyField(voornaam, 'Het veld voornaam is vereist.')
checkEmptyField(familienaam, 'Het veld naam is vereist.')
checkEmptyField(gebruikersnaam, 'Het veld gebruikersnaam is vereist.')
validateEmail(emailadres)
checkEmptyField(wachtwoord, 'Het veld wachtwoord is vereist.')
checkEmptyField(herhaalWachtwoord, 'Het veld herhaal wachtwoord is vereist.')
checkEmptyField(adres, 'Het veld adres is vereist.')
checkEmptyField(provincie, 'Het veld provincie is vereist.')
checkPC(postcode)

let validateForm = () => {

}

let checkEmptyField = (veld, melding) => {
    if (veld == '') {
        errors.push(melding)
    }
}

let validateEmail = (emailadres) => {
    checkEmptyField(emailadres, 'Het veld email is vereist.')
}

let validatePayment = (veld) => {

}

let checkPC = (veld) => {
    checkEmptyField(veld, 'Het veld postcode is vereist.')
}