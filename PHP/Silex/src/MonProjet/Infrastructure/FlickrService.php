<?php

namespace MonProjet\Infrastructure;


use MonProjet\Model\FlickrPhoto;

class FlickrService
{
    const API_KEY = '814772198ec9aa500687da8dcc184605';


    private function callFlickrMethod($method, array $queryFields = array())
    {
        $queryFields = array_merge($queryFields,
        [
            'api_key'        => FlickrService::API_KEY,
            'format'         => 'json',
            'method'         => $method,
            'nojsoncallback' => true
        ]);

        // Construction de l'URL de connexion au service web Flickr.
        $url = 'https://api.flickr.com/services/rest/?'.http_build_query($queryFields);

        /*
         * Envoi d'une requête HTTP GET au service web Flickr, récupération
         * de la réponse HTTP au format JSON.
         */
        $jsonResponse = file_get_contents($url);

        return json_decode($jsonResponse);
    }

    public function searchPhotos($tagList)
    {
        // Appelle le service web Flickr de moteur de recherche de photos.
        $result = $this->callFlickrMethod
        (
            'flickr.photos.search',
            [
                'content_type' => 7,            // tout type de contenu
                'per_page'     => 25,           // pagination
                'tags'         => $tagList
            ]
        );

        /*
         * Construction d'un tableau d'objets FlickrPhoto représentant chaque photo
         * trouvé par le moteur de recherche.
         */
        $flickrPhotos = array();
        if(isset($result->photos) == true)
        {
            foreach($result->photos->photo as $photo)
            {
                $flickrPhoto = new FlickrPhoto
                (
                    $photo->farm,
                    $photo->server,
                    $photo->id,
                    $photo->secret,
                    $photo->title
                );

                array_push($flickrPhotos, $flickrPhoto);
            }
        }

        return $flickrPhotos;
    }
}