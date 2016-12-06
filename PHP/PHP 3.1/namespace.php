<?php

namespace Test;

function moi(){

	echo 'kk';

}

$lol = 'ok';



namespace Ok;



echo $lol;
use \Test\moi;
moi();