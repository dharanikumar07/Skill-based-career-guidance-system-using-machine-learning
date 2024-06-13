<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>forgot password</title>
    <link rel="stylesheet" href="login.css">
  </head>
  <body>
    <div class="center">
      <h1>Change a Password</h1>
      <form method="post" action="fp.php">
        <div class="txt_field">
          <input type="text"  name="email" required>
          <span></span>
          <label>Email Id</label>
        </div>
        <div class="txt_field">
          <input type="password"  name="pass" required>
          <span></span>
          <label>Password</label>
        </div>
        <input type="submit" value="change" name="change">
        <div class="signup_link">
          password known?<a href="login.php">login</a>
        </div>
      </form>
    </div>
  </body>
</html>
<?php 
	 if(isset($_POST['change']))
    {
	$emailid=$_POST['email'];
	$pass=$_POST['pass'];
	$con=mysqli_connect("localhost:3306","root","","career");
	$dis="UPDATE `register` SET `password`='$pass' WHERE `emailid`='$emailid'";
	$r=mysqli_query($con,$dis);
	if($r)
	{
    echo "<script>alert('password changed successfully')</script>";
	}
	else{
		echo "<script>alert('please enter valid email adress')</script>";
	}
}
?>

