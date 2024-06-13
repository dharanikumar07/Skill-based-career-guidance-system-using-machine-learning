<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Signup Form</title>
    <link rel="stylesheet" href="login.css">
  </head>
  <body>
    <div class="center">
      <h1>Signup</h1>
      <form method="POST" action="signup.php">
      <div class="txt_field">
          <input type="text" name="fname" required>
          <span></span>
          <label>Name</label>
        </div>
        <div class="txt_field">
          <input type="text" name="email" required>
          <span></span>
          <label>Email Id</label>
        </div>
        <div class="txt_field">
          <input type="password" name="pass" required>
          <span></span>
          <label>Password</label>
        </div>
        <input type="submit" value="signup" name="signup">
        <div class="signup_link">
          already member? <a href="login.php">login</a>
        </div>
      </form>
    </div>
  </body>
</html>
<?php 
	 if(isset($_POST['signup']))
    {
	$name=$_POST['fname'];
	$emailid=$_POST['email'];
	$pass=$_POST['pass'];
	$con=mysqli_connect("localhost:3306","root","","career");
	$dis="INSERT INTO `register`(`name`, `emailid`, `password`) VALUES ('$name','$emailid','$pass')";
	$r=mysqli_query($con,$dis);
	if($r)
	{
    echo "<script>alert('Register successfully')</script>";
	}
	else{
		echo "<script>alert('please enter all details')</script>";
	}
}
?>
