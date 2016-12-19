<?php namespace app\controller;
use system\AbstractController as Controller;
use app\models\User ;
class UserController extends Controller {



public function profile($id=null){
$user = User::find($id);
/*
$post = new Post;
$post->setContent('Bienvenue sur mon mur !');
$post->setUser($this->user);
$post->save();
*/
/*

$user->setPassword('ytreza');
$user->save();
*/
$data['user'] = User::find($id);
$data['title'] = 'Profil de '.$data['user']->getUsername();
$this->render('user/profile',$data);
}

	public function checkLogin($username,$password){

	 $user = User::findOneByField('username',$username);
	if($user !=null) {
	 if($user->getPassword() == sha1($password)) return $user;
	 else return false;
	 }
	 else return false;
	 
	}

	public function login(){

	$data['title'] = 'Connexion';
	if($_POST) {
	$user = $this->checkLogin($_POST['username'],$_POST['password']);
	if($user != false) {
	$_SESSION['user_id'] = $user->getId();
	$this->user = $user;
	header('location : '.$user->getUrl().'');
	}
	else $data['error'] = 'Identifiants incorrects';
	}

	$this->render('user/login',$data);


	}

function logout() { $data['title'] = 'déconnexion';
unset($_SESSION['user_id']);
$this->user = null;
$this->render('default/home',$data);

}


public function all(){
$data['title'] = 'Listes des membres';
$data['users'] = User::findAll();
$this->render('user/list',$data);

}



public function register(){

$user = new User;
$user->setUsername('Tomy2');
$user->setPassword('ytreza2');
$user->save();

}



}

?>