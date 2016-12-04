<?php
// index.php
try
{
  if(array_key_exists('search', $_GET) == false)
  {
    throw new InvalidArgumentException('Il manque le paramètre search !');
  }
  if(ctype_alpha($_GET['search']) == false)
  {
    throw new Exception('Le paramètre search ne doit contenir que des lettres !');
  }

  echo "Vous avez demandé la recherche suivante : ".$_GET['search'];
}

catch(Exception $exception)
{
  echo "ERREUR - ".$exception->getMessage();
}