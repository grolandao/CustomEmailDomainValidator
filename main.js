const domainList = [
    'google.com',
    'gmail.com',
    'hotmail.com',
    'hotmail.com.br',
    'yahoo.com',
    'yahoo.com.br',
    'bol.com.br',
    'outlook.com',
    'outlook.com.br',
    'mail.com',
    'mail.com.br'
];

const emailDomainCheck = (email) => {
    const parts = email.split('@');
    if (parts.length !== 2) {
        return false;
    }

    let validation = true;
    domainList.forEach(function (domain){
        if (parts[1] === domain) {
            validation = false;
        }
    });
    return validation;
}

const validateEmail = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const validate= () => {
    const email= document.getElementById("email").value;
    if (!validateEmail(email)) {
        return false;
    }

    const validation = emailDomainCheck(email);
    if(!validation){
        notificaEmailInvalido();
    }
    return validation;
}

const notificaEmailInvalido = () => {
    alert('Por favor inserir um email Corporativo!');
}




