<?php
if(isset($_POST['login']))
{
	$email=$_POST['email'];
	$pass=$_POST['pass'];
	$con=mysqli_connect("localhost:3306","root","","career");
    $c="SELECT * FROM `register` WHERE `emailid`='$email' AND `password`='$pass'";
	$r=mysqli_query($con,$c);
	$check=mysqli_num_rows($r);
	if($check>0)
	{
		header('location:indexlogin.php');
	}
	else
	{
		echo "<script>alert('password or emailid is incorrect');</script>";
		
	}
}
?>