<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Login Form</title>
    <link rel="stylesheet" href="login.css">
  </head>
  <body>
    <div class="center">
      <h1>Login</h1>
      <form method="POST" action="authentication.php">
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
        <div class="pass"><a href="fp.php">Forgot Password?</a></div>
        <input type="submit" value="Login" name="login">
        <div class="signup_link">
          Not a member? <a href="signup.php">Signup</a>
        </div>
      </form>
    </div>
  </body>
</html>
