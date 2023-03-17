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
let algemeneVoorwaarden = document.querySelector('#algemeneVoorwaarden')
let betalingsWijze = document.querySelector('#betalingsWijze')

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

let validatePassword = () => {
    if (wachtwoord.value != herhaalWachtwoord.value) 
    {
        errors.push('Je wachtwoorden komen niet overeen.')
    }
}

let validatePasswordLength = () => {
    if (wachtwoord.value.length < 7 && herhaalWachtwoord.value.length < 7) 
    {
        errors.push('Je wachtwoord moet langer dan 7 karakters zijn.')
    }
}

//Controleren of het veld 'E-mailadres' geldig is, zo niet een melding tonen
let validateEmail = (emailadres) => {
    if (condition) {
        
    }
    else {

    }
    errors.push('E-mailaders is niet correct.')
}

let validateAlgemeneVoorwaarden = () => {
    if (algemeneVoorwaarden.checked == false) {
        errors.push('Je moet de algemene voorwaarden accepteren.')
    }
}

//Controleren of er een betalingswijze is aangeduid, zo niet een melding tonen
let validatePayment = () => {
    if (document.querySelector('#bankingapp').checked == true) {
        betalingsWijze.innerHTML += 'Je betalingswijze is Banking app.'
    }
    else if (document.querySelector('#overschrijving').checked == true) {
        betalingsWijze.innerHTML += 'Je betalingswijze is Overschrijving.'
    } 
    else if (document.querySelector('#visacard').checked == true) {
        betalingsWijze.innerHTML += 'Je betalingswijze is Visa card.'
    }
    else if (document.querySelector('#paypal').checked == true){
        betalingsWijze.innerHTML += 'Je betalingswijze is PayPal.'
    }
}

//Controleren of het veld 'Postcode' ingevuld is, zo niet een melding tonen
let checkPC = (veld) => {
    if (veld.value != '') {
        if (veld.value >= 1000 && veld.value <10000) {
            
        }
        else {
            errors.push('De waarde van postcode moet tussen 1000 en 9999 liggen.')
        }
    }
    else {
        errors.push('Postcode is vereist.')
    }
}

//Loopen door de array 'errors' en telkens de melding tonen als er een fout is
let showErrors = () => {
    for (let i = 0; i < errors.length; i++) {
        let error = errors[i]
        
        document.querySelector('#error').innerHTML += error + '<br>'
    }
}

//Controleren of het formulier is ingevuld, zo niet word de bijhorende melding getoond
let validateForm = () => {
    document.querySelector('#error').innerHTML = ''
    errors = []
    event.preventDefault()
    checkEmptyField(voornaam, 'Het veld voornaam is vereist.')
    checkEmptyField(familienaam, 'Het veld naam is vereist.')
    checkEmptyField(gebruikersnaam, 'Het veld gebruikersnaam is vereist.')
    checkEmptyField(emailadres, 'Het veld email is vereist.')
    checkEmptyField(wachtwoord, 'Het veld wachtwoord is vereist.')
    checkEmptyField(herhaalWachtwoord, 'Het veld herhaal wachtwoord is vereist.')
    validatePassword()
    validatePasswordLength()
    checkEmptyField(adres, 'Adres is vereist.')
    checkEmptyField(land, 'Land is vereist.')
    checkEmptyField(provincie, 'Provincie is vereist.')
    checkPC(postcode)
    validateAlgemeneVoorwaarden()

    errorAlert.style.display = 'block'
    showErrors()
}

let noErrors = () => {
    if (errors == 0) {
        errorAlert.style.display = 'none'
        successAlert.style.display = 'block'
        betalingsAlert.style.display = 'block'

        betalingsWijze += validatePayment()
    }
}

button.addEventListener('click', validateForm, false)
button.addEventListener('click', noErrors, false)