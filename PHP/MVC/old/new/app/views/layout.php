<DOCTYPE html>
<html>
  <head>
  <meta title = "<?php echo $title; ?>">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
 <style>
 body {
 padding-top:60px;
 }
 </style>
 </head>
  <body>
  <nav class="navbar navbar-inverse navbar-fixed-top">
   
   <div class="container"><div style="float:right;margin-top:10px;"><?php if($this->user != null)  echo '<span style="color:#fff;"><a href="'.$this->user->getUrl().'">'.$this->user->getUsername().'</a></span> <a href="'.BASE_URL.'user/logout"><i class="glyphicon glyphicon-off"></i></a>'; else echo '<a class="btn btn-primary" href="'.BASE_URL.'user/login">Login</a>'?> </div>

        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Bootstrap theme</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" class="divider"></li>
                <li class="dropdown-header">Nav header</li>
                <li><a href="#">Separated link</a></li>
                <li><a href="#">One more separated link</a></li>
              </ul>
            </li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>

<div class="container theme-showcase" role="main">
<?php if(isset($error)) {

echo '<div class="alert alert-danger">'.$error.'</div>';

}?>
    <?php require_once($include); ?>
</div>

  <body>
<html>