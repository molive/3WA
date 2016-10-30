// Pour communiquer avec l'extérieur une fonction peut aussi avoir des arguments en entrée...
function sayHello(firstName, lastName)
{
    document.write('<p>Bonjour ' + firstName + ' ' + lastName + ' !</p>');
}



// (...)

// Appel de la fonction en indiquant autant de paramètres que la fonction possède.
sayHello('Marie', 'MAYERS');

// Nouvel appel de la fonction.
sayHello('Ailton', 'CHRISTIAN');