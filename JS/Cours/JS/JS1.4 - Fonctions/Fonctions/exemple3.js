// Une fonction peut aussi renvoyer une valeur en sortie.
function sayHello()
{
    return 'Bonjour à toutes et à tous !';
}



// (...)

// Déclaration d'une variable.
var message;

// Appel de la fonction et récupération de la valeur renvoyée dans une variable intermédiaire.
message = sayHello();
document.write('<h1>' + message + '</h1>');

// Nouvel appel de la fonction.
message = sayHello();
document.write('<h4>' + message + '</h4>');