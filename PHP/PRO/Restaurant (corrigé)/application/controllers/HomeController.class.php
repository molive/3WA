<?php

class HomeController
{
    public function httpGetMethod()
    {
        // Récupération de tous les produits alimentaires.
        $mealModel = new MealModel();
        $meals     = $mealModel->listAll();

        return
        [
            'flashBag' => new FlashBag(),
            'meals'    => $meals,
        ];
    }
}
