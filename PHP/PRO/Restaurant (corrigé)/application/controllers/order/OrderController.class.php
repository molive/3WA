<?php


class OrderController
{
	public function httpGetMethod(Http $http)
	{
        $userSession = new UserSession();
        if($userSession->isAuthenticated() == false)
        {
            // On ne peut pas commander sans être connecté !
            $http->redirectTo('/user/login');
        }


        // Récupération de tous les produits alimentaires.
        $mealModel = new MealModel();
        $meals     = $mealModel->listAll();

		return
		[
			'meals' => $meals
		];
	}
}