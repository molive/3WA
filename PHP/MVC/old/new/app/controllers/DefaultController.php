<?php class DefaultController extends Controller {



public function index() {
$data['title'] = 'Bienvenue !';
$this->render('default/home',$data);
}

}

?>