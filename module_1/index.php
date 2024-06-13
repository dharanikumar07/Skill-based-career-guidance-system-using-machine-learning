<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resume Generator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body style="background-color:#BFBFBF">
    <div class="container text-light">
    <h1 class="text-center my-5 fw-bold">Resume Form</h1>
    <div class="form-container">
        <form action="submit.php" method="POST" enctype="multipart/form-data">
            <input type="hidden" name="token" value="HGsZOXpfNC">
            <div class="border border-dark p-3 mb-3">    
                <h2 style="color:black;">Profile Image</h2>
                <div class="mb-3">
                    <label class="form-label" style="color:black;">Select a square (or) passport size image 1:1 (Recommended)</label>
                    <input class="form-control" name="profile_image" type="file" required>
                </div>
            </div>
            <div class="border border-dark p-3 mb-3">    
                <h2 style="color:black;">Contact</h2>
                <div class="d-flex justify-content-between mb-3">
                    <div>
                        <label class="form-label" style="color:black;">First Name</label>
                        <input type="text" name="first_name" class="form-control" required>
                    </div>
                    <div>
                        <label class="form-label" style="color:black;">Last Name</label>
                        <input type="text" name="last_name" class="form-control" required>
                    </div>
                </div>
                <div class="mb-3">
                    <label class="form-label" style="color:black;">Profession</label>
                    <input type="text" class="form-control" name="profession" required>
                </div>
                <div class="mb-3">
                    <label class="form-label" style="color:black;">Email address</label>
                    <input type="email" class="form-control" name="email" required>
                </div>
                <div class="mb-3">
                    <label class="form-label" style="color:black;">Phone number</label>
                    <input type="tel" class="form-control" id="phone" name="phone" placeholder="0300-1234567" pattern="[0-9]{10}" required>
                </div>
            </div>
            <div class="border border-dark p-3 mb-3">                                                      
                <h2>Skills</h2>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label" style="color:black;">Skillset Name</label>
                    <input type="text" class="form-control" name="skill1" required>
                    <select class="form-select mt-2" name="skill_level1" required>
                        <option value="" style="color:black;">Select stars based upon your skill level</option>
                        <option value="1" style="color:black;">1 - Novice</option>
                        <option value="2" style="color:black;">2 - Advanced Beginner</option>
                        <option value="3" style="color:black;">3 - Competent</option>
                        <option value="4" style="color:black;">4 - Proficient</option>
                        <option value="5" style="color:black;">5 - Expert</option>
                    </select>
                </div>
                <div id="addSkill"></div>
                <div class="mb-3">
                    <button type="button" id="skill_hide" class="btn btn-primary form-control" onclick="addSkill()">+</button>
                </div>
            </div>
            <div class="border border-dark p-3 mb-3">    
                <h2 style="color:black;">Hobbies</h2>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label" style="color:black;">Hobby</label>
                    <input type="text" name="hobby1" class="form-control" required>
                </div>
                <div id="addHobby"></div>
                <div class="mb-3">
                    <button type="button" id="hobby_hide" class="btn btn-primary form-control" onclick="addHobby()">+</button>
                </div>
            </div>
            <div class="border border-dark p-3 mb-3">    
                <h2 style="color:black;">About Me</h2>
                <div class="form-floating">
                    <textarea class="form-control" name="about_me" style="height: 100px" required></textarea>
                </div>
            </div>
            <div class="border border-dark p-3 mb-3">    
                <h2 style="color:black;">Education</h2>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label" style="color:black;">School/College/University</label>
                    <input type="text" name="institute1" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label" style="color:black;">Degree Name</label>
                    <input type="text" name="degree1" class="form-control">
                </div>
                <div class="mb-3 d-flex justify-content-between">
                    <div>
                        <label for="exampleInputEmail1" class="form-label" style="color:black;">From</label>
                        <input type="text" name="from1" class="form-control">
                    </div>
                    <div>
                        <label for="exampleInputEmail1" class="form-label" style="color:black;">To</label>
                        <input type="text" name="to1" class="form-control">
                    </div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label" style="color:black;">Grade/Score/CGPA</label>
                    <input type="text" name="grade1" class="form-control">
                </div>
                <div id="addEducation"></div>
                <div class="mb-3">
                    <button type="button" id="education_hide" class="btn btn-primary form-control" onclick="addEducation()">+</button>
                </div>
            </div>
            <div class="border border-dark p-3 mb-3">    
                <h2 style="color:black;">Experience</h2>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label" style="color:black;">Title</label>
                    <input type="text" name="title1" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label" style="color:black;">Description</label>
                    <input type="text" name="description1" class="form-control">
                </div>
                <div id="addExperience"></div>
                <div class="mb-3">
                    <button type="button" id="experience_hide" class="btn btn-primary form-control" onclick="addExperience()">+</button>
                </div>
            </div>
            <input type="submit" class="form-control my-2">
        </form>
    </div>
    </div>
    <script src="app.js"></script>
</body>
</html>