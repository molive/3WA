<?php


class BookingController
{
	public function httpGetMethod(Http $http)
	{
		$userSession = new UserSession();
		if($userSession->isAuthenticated() == false)
		{
            // On ne peut pas réserver sans être connecté !
			$http->redirectTo('/user/login');
		}
	}

	public function httpPostMethod(Http $http, array $formFields)
	{
        $userSession = new UserSession();
        if($userSession->isAuthenticated() == false)
        {
            // On ne peut pas réserver sans être connecté !
            $http->redirectTo('/user/login');
        }

        // Récupération du compte client de l'utilisateur connecté.
        $userId = $userSession->getUserId();

		// Création de la réservation.
        $bookingModel = new BookingModel();
		$bookingModel->create
		(
			$userId,
			$formFields['bookingYear'].'-'.
                $formFields['bookingMonth'].'-'.
				$formFields['bookingDay'],
		    $formFields['bookingHour'].':'.
                $formFields['bookingMinute'],
			$formFields['numberOfSeats']
		);

        // Redirection vers la page d'accueil.
		$http->redirectTo('/');
	}
}