<?php


class MealController
{
	public function httpGetMethod(Http $http, array $queryFields)
	{
        // Validation de la query string.
        if(array_key_exists('id', $queryFields) == true)
        {
            if(ctype_digit($queryFields['id']) == true)
            {
				// Récupération des informations sur l'aliment.
                $mealModel = new MealModel();
				$meal      = $mealModel->find($queryFields['id']);

				/*
				 * Sérialisation de l'aliment (qui est un tableau PHP) en une
				 * chaîne de caractères JSON puis envoi de la réponse HTTP.
				 */
				$http->sendJsonResponse($meal);
            }
        }

        // En cas d'erreur, redirection vers la page d'accueil.
        $http->redirectTo('/');
	}
}