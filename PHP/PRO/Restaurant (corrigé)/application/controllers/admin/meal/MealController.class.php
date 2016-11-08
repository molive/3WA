<?php


class MealController
{
    public function httpGetMethod()
    {
    }

    public function httpPostMethod(Http $http, array $formFields)
    {
        if($http->hasUploadedFile('photo') == true)
        {
            $photo = $http->moveUploadedFile('photo', '/images/meals');
        }
        else
        {
            $photo = 'no-photo.png';
        }

        $mealModel = new MealModel();
        $mealModel->create
        (
            $formFields['name'],
            $formFields['description'],
            $photo,
            $formFields['initialStock'],
            $formFields['buyPrice'],
            $formFields['salePrice']
        );

        $http->redirectTo('/admin');
    }
}