<?php 
class User {

protected $id;
protected $username;
protected $password;
protected $salt;
protected $email;
protected $created_at;


function getId() {
return $this->id;
}

function setId($id) {
$this->id = $data;
}

function getUsername() {
return $this->username;
}

function setUsername($username) {
$this->username = $username;
}

function getPassword() {
return $this->password;
}

function setPassword($password) {
$this->password = $password;
}

function getSalt() {
return $this->salt;
}

function setSalt($salt) {
$this->salt = $salt;
}

function getEmail() {
return $this->email;
}

function setEmail($email) {
$this->email = $email;
}

function getCreatedAt() {
return $this->create_at;
}

function setCreatedAt($created_at) {
$this->created_at = $created_at;
}

}