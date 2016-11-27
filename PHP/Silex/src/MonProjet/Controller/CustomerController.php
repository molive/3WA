<?php

namespace MonProjet\Controller;

use MonProjet\Model\CustomerModel;

use Silex\Application;

use Symfony\Component\HttpFoundation\Request;


class CustomerController
{
    /*
     * L'argument de la classe Application peut porter n'importe quel nom du moment
     * qu'il y a le type hint Application. Il peut se trouver n'importe où dans la
     * liste des arguments de la méthode.
     *
     * L'argument de la classe Request peut porter n'importe quel nom du moment
     * qu'il y a le type hint Request. Il peut se trouver n'importe où dans la
     * liste des arguments de la méthode.
     */
    public function handleSearchForm(Application $app, Request $request)
    {
        // Equivalent Silex à $_POST['country']
        $country = $request->request->get('country');

        // Recherche des clients du pays spécifié.
        $customerModel = new CustomerModel();
        $customers     = $customerModel->findByCountry($country);

        // Demande à Twig de générer la vue en partant du template customer.html.twig.
        return $app['twig']->render
        (
            'customer.html.twig',
            [   // Liste des variables Twig disponibles dans le template.
                'country'   => $country,
                'customers' => $customers
            ]
        );
    }

    /*
     * L'argument de la classe Application peut porter n'importe quel nom du moment
     * qu'il y a le type hint Application. Il peut se trouver n'importe où dans la
     * liste des arguments de la méthode.
     */
    public function showSearchForm(Application $app)
    {
        return $app['twig']->render('customer.html.twig');
    }
}