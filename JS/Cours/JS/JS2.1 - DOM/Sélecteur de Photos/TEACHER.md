## Objectifs

- Faire un bilan des sharecodes de la journée sur la recherche dans le **DOM**, l'installation d'un gestionnaire d'évènements, l'écriture dans une balise, l'**API** classList.
- Introduire la notion de *this* en JavaScript.

## Organisation

    /css/main.js   Feuille de styles principale
    /images        Les photos à afficher
    /js/main.js    Programme principal
    /index.html    Page principale

## Points importants

- Les éléments de la liste doivent se voir ajouter ou retirer la classe *selected* quand on clique dessus : comment le gestionnaire d'évènements peut distinguer sur quel élément de la liste on a cliqué ? Avec le *this*.

Présenter le *this* en trois étapes :

- C'est un mot-clé spécial de JavaScript, une sorte de variable pré-définie. Il ne faut **surtout pas** la déclarer auparavant.
- Cette variable spéciale a **une valeur différente** selon l'endroit où on se trouve dans le code.
- Dans un gestionnaire d'évènements, *this* représente **la balise qui a déclenché l'évènement**.

Prendre l'exemple d'une balise *p* avec un gestionnaire d'évènements *click* installé sur la balise, à l'intérieur du gestionnaire d'évènements, avec le code :

    this.textContent = 'Hello World';

On changerait le contenu du paragraphe quand on cliquerait dessus.

## Parcours

1. Commencer par déclarer les variables globales nécessaires.
2. Dans le code principal initialiser les variables globales puis installer le gestionnaire d'évènements.
3. Ecrire le code du gestionnaire d'évènements en parlant du **point important** expliqué ci-dessus.