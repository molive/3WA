<?php

namespace MonProjet\Model;


class FlickrPhoto
{
    private $farm;

    private $id;

    private $secret;

    private $server;

    private $title;


    public function __construct($farm, $server, $id, $secret, $title)
    {
        $this->farm   = $farm;
        $this->id     = $id;
        $this->secret = $secret;
        $this->server = $server;
        $this->title  = $title;
    }

    private function createFlickrUrl($size = 'z')
    {
        /*
         * Pour les différentes tailles possibles, consulter :
         * https://www.flickr.com/services/api/misc.urls.html
         */
        return
            "https://farm$this->farm.staticflickr.com/$this->server/$this->id".
            "_$this->secret"."_$size.jpg";
    }

    public function getBigUrl()
    {
        return $this->createFlickrUrl('b');
    }

    public function getMediumUrl()
    {
        return $this->createFlickrUrl('z');
    }

    public function getSmallUrl()
    {
        return $this->createFlickrUrl('m');
    }

    public function getThumbnailUrl()
    {
        return $this->createFlickrUrl('q');
    }

    public function getTitle()
    {
        return $this->title;
    }

    public function getUrl()
    {
        // Renvoie l'URL avec la taille de photo par défaut.
        return $this->createFlickrUrl();
    }
}