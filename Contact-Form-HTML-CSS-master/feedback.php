<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Feedback Form</title>
    <link rel="stylesheet" href="style.css" />
    <script
      src="https://kit.fontawesome.com/64d58efce2.js"
      crossorigin="anonymous"
    ></script>
  </head>
  <body>
    <div class="container">
      <span class="big-circle"></span>
      <img src="img/shape.png" class="square" alt="" />
      <div class="form">
        <div class="contact-info">
          <h3 class="title">Let's get in touch</h3>
          <p class="text">
            It effectively combines powerful messages with relatable examples, making it easy for users to connect and feel encouraged. 
          </p>

          <div class="info">
            <div class="information">
              <img src="img/location.png" class="icon" alt="" />
              <p>VSR Street, Karur, India</p>
            </div>
            <div class="information">
              <img src="img/email.png" class="icon" alt="" />
              <p>dharaniraja2004@gmail.com</p>
            </div>
            <div class="information">
              <img src="img/phone.png" class="icon" alt="" />
              <p>9360549206</p>
            </div>
          </div>

          <div class="social-media">
            <p>Connect with us :</p>
            <div class="social-icons">
              <a href="https://www.facebook.com/profile.php?id=100017089638820">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/dharanikumar_07/?next=%2F">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/dharanikumar-r07">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        <form action="feedback.php" method="POST">
        <div class="contact-form">
          <span class="circle one"></span>
          <span class="circle two"></span>

          <form action="index.html" autocomplete="off">
            <h3 class="title">Contact us</h3>
            <div class="input-container">
              <input type="text" name="name" class="input" />
              <label for="">Username</label>
              <span>Username</span>
            </div>
            <div class="input-container">
              <input type="email" name="email" class="input" />
              <label for="">Email</label>
              <span>Email</span>
            </div>
            <div class="input-container">
              <input type="tel" name="phone" class="input" />
              <label for="">Phone</label>
              <span>Phone</span>
            </div>
            <div class="input-container textarea">
              <textarea name="message" class="input"></textarea>
              <label for="">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" name="insert" class="btn" />
        </form>
        </div>
      </div>
    </div>

    <script src="app.js"></script>
  </body>
</html>
<?php 
	 if(isset($_POST['insert']))
    {
	$name=$_POST['name'];
	$emailid=$_POST['email'];
	$phone=$_POST['phone'];
  $message=$_POST['message'];
	$con=mysqli_connect("localhost:3306","root","","career");
	$dis="INSERT INTO `feedback`(`name`, `emailid`, `feedback`, `phoneno`) VALUES ('$name','$emailid','$message','	$phone')";
	$r=mysqli_query($con,$dis);
	if($r)
	{
    echo "<script>alert('send successfully')</script>";
	}
	else{
		echo "<script>alert('please enter all details')</script>";
	}
}
?>
