//Declaratie
let errors = new Array()
let button = document.querySelector('#button')
let errorAlert = document.querySelector('#wrongAlert')
let successAlert = document.querySelector('#successAlert')
let betalingsAlert = document.querySelector('#payAlert')
let voornaam = document.querySelector('#firstName')
let familienaam = document.querySelector('#lastName')
let gebruikersnaam = document.querySelector('#username')
let emailadres = document.querySelector('#email')
let wachtwoord = document.querySelector('#Password')
let herhaalWachtwoord = document.querySelector('#Herhaalwachtwoord')
let adres = document.querySelector('#address')
let land = document.querySelector('#land')
let provincie = document.querySelector('#provincie')
let postcode = document.querySelector('#postcode')

//Verbergen van alerts
errorAlert.style.display = 'none'
successAlert.style.display = 'none'
betalingsAlert.style.display = 'none'

//Controleren of een veld leeg is
let checkEmptyField = (veld, melding) => {
    if (veld.value == '') {
        errors.push(melding)
    }
}

//Controleren of het veld 'E-mailadres' geldig is, zo niet een melding tonen
let validateEmail = (emailadres) => {
    if (condition) {
        
    }
    else {

    }
    checkEmptyField(emailadres, 'E-mailaders is niet correct.')
}

//Controleren of er een betalingswijze is aangeduid, zo niet een melding tonen
let validatePayment = (veld) => {

}

//Controleren of het veld 'Postcode' ingevuld is, zo niet een melding tonen
let checkPC = (veld) => {
    checkEmptyField(veld, 'Het veld postcode is vereist.')
}

//Loopen door de array 'errors' en telkens de melding tonen als er een fout is
let showErrors = () => {
    for (let i = 0; i < errors.length; i++) {
        let error = errors[i]
        
        document.querySelector('#error').textContent += error
    }
}

//Controleren of het formulier is ingevuld, zo niet word de bijhorende melding getoond
let validateForm = () => {
    checkEmptyField(voornaam, 'Het veld voornaam is vereist.')
    checkEmptyField(familienaam, 'Het veld naam is vereist.')
    checkEmptyField(gebruikersnaam, 'Het veld gebruikersnaam is vereist.')
    checkEmptyField(emailadres, 'Het veld email is vereist.')
    checkEmptyField(wachtwoord, 'Het veld wachtwoord is vereist.')
    checkEmptyField(herhaalWachtwoord, 'Het veld herhaal wachtwoord is vereist.')
    checkEmptyField(adres, 'Adres is vereist.')
    checkEmptyField(provincie, 'Provincie is vereist.')
    checkEmptyField(postcode, 'Het veld postcode is vereist.')

    errorAlert.style.display = 'block'
    showErrors()
}

button.addEventListener('click', validateForm(), false)