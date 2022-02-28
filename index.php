<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Personal Web Resume" />
        <meta name="author" content="Barbara Morantes" />
        <title>Barbara Morantes - Resume</title>
        <!-- Favicon-->
        <link rel="icon" type="image/x-icon" href="assets/img/favicon.ico" />
        <!-- Font Awesome icons (free version)-->
        <script src="https://use.fontawesome.com/releases/v5.15.3/js/all.js" crossorigin="anonymous"></script>
        <!-- Google fonts-->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,700;1,100&display=swap" rel="stylesheet">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;700&family=Roboto:ital,wght@0,100;0,700;1,100&display=swap" rel="stylesheet"> 
        <link href="css/styles.css" rel="stylesheet" />
        <link href="css/normalize.css" rel="stylesheet" />
    </head>
    <body>
        <!--Navbar section-->
        <div>
            <ul>
                <a href="#workExperience"><li class="listElement">Work Expirence</li></a>
                <a href="#skillsTools"><li class="listElement">Skills and tools</li></a>
                <a href="#projects"><li class="listElement">Projects</li></a>
                <a href="#contact"><li class="listElement">Contact</li></a>
            </ul>
        </div>
        
        <!--Navbar social media icons-->
        <div class="socialMediaContainer">
            <a class="socialMediaNavBar" target="_blank" href="https://www.linkedin.com/in/barbara-morantes-carvajal/">
                <i class="fab fa-linkedin-in"></i>
            </a>
            <a class="socialMediaNavBar" target="_blank" href="https://github.com/BarbDMC">
                <i class="fab fa-github"></i>
            </a>
            <a class="socialMediaNavBar" target="_blank" href="https://twitter.com/BarbDMG">
                <i class="fab fa-twitter"></i>
            </a>
        </div>
        
        <!--Main section-->
        <div>
            <img class="rectangle leftRectangle" src="assets/img/leftRectangle.png" />
            <img class="firstRectangle" src="assets/img/centerRectangle.png" />
            <img class="bigCircle" src="assets/img/bigCircle.png" />
            <img class="smallCircle" src="assets/img/smallCircle.png" />
            <img class="profilePicture" src="assets/img/avatar.jpg" />
            <img class="rectangle rigthRectangle" src="assets/img/rightRectangle.png" />
        </div>

        <div class="divisor-200"></div>

        <div class="main">
            <p class="mainText">Hey, there!</p>
            <h1 class="mainTitle">I am <span class="mainTitle name">Barbara Morantes</span></h1>
            <p class="mainText">In each area in which I have had the opportunity to</p>
            <p class="mainText">perform, I always give my best so my work and</p>
            <p class="mainText">my  relationships with the team are excellent. My main</p>
            <p class="mainText">objective is to stay in constant development at a</p>
            <p class="mainText">personal, academic and professional level.</p>
        </div>
        
        <!-- work experience section -->
        <div id="workExperience" class="workExpirenceSection">
            <h2 class="sectionTitle">Work <span class="sectionTitle sectionHighlighter">Expirence</span></h2>
            <div class="sectionDivider"><img src="assets/img/titleLines.png" /></div>
            
            <div class="workImages">
                <img  src="assets/img/bigWave.png" />
                <img class="smallWave" src="assets/img/smallWave.png" />
                <img class="workLogo" src="assets/img/idukay.svg" />
            </div>
            
            <div class="workText">
                <h3 class="workTitle">Full Stack Developer Intern</h3>
                <p class="mainText lineSpacer"><b>Urban Lab</b> 4 month(s)</p>
                <p class="mainText lineSpacer">Quito - Ecuador</p>
                <p class="mainText lineSpacer">Functional responsibilities: Maintenance and bug fixing of  <br />
                    the idukay platform in frontend and backend.</p>
            </div>
        </div>
        
        <div class="divisor-200"></div>

        <!-- skills and tools section -->
        <div id="skillsTools" class="skillsToolsSection">
            <h2 class="sectionTitle">Skills <span class="sectionTitle sectionHighlighter">and tools</span></h2>
            <div class="sectionDivider"><img src="assets/img/titleLines.png" /></div>
            
            <div class="skillAreas">
                <div class="areasContainer">
                    <div class="area left">
                        <div class="iconMargin">
                            <img class="areaIcon" src="assets/img/skills/frontend.svg"/>
                            <div class="areaTitle">Fronted</div>
                            <ul class="areaList">
                                <li class="areaListElement">
                                    HTML
                                </li>
                                <li class="areaListElement">
                                    CSS
                                </li>
                                <li class="areaListElement">
                                    AngularJs
                                </li>
                                <li class="areaListElement">
                                    Javascript
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="area center">
                        <div class="iconMargin">
                            <img class="areaIcon" src="assets/img/skills/backend.png"/>
                            <div class="areaTitle">Backend</div>
                            <ul class="areaList">
                                <li class="areaListElement">
                                    NodeJs
                                </li>
                                <li class="areaListElement">
                                    MongoDB
                                </li>
                                <li class="areaListElement">
                                    Python
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="area right">
                        <div class="iconMargin">
                            <img class="areaIcon" src="assets/img/skills/testing.png"/>
                            <div class="areaTitle">Testing</div>
                            <ul class="areaList">
                                <li class="areaListElement">
                                   Jasmine
                                </li>
                                <li class="areaListElement">
                                    Cypress
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Projects Section -->
        <div id="projects" class="projectsSection">
            <h2 class="sectionTitle">Projects</h2>
            <div class="sectionDivider"><img src="assets/img/titleLines.png" /></div>
            <div class="divisor-80"></div>

            <div class="projectContainer">
                <img class="projectImage" src="assets/img/portfolio/mysql-logo.svg"/>
                <img class="projectWave" src="assets/img/projectsWave.png" />

                <div class="projectContainer projectDescriptionContainer">
                    <h3 class="projectTitle">Academic offer in Ecuador</h3>
                        <h4 class="projectStatus">In progress</h4>
                        <p class="projectDescription">Search engine with the university  offer in Ecuador for students that  need to
                            investigate about the  careers oportunities in their cities
                        </p>
                        <p class="projectTechnologies">Technologies used: <br />
                            HTML, CSS, MySQL, Javascript</p>
                </div>
            </div>
        </div>

        <div class="divisor-600"></div>

        <!-- footer -->
        <div id="contact" class="footer">

            <div class="contact">
                <h3 class="contactTitle">Contact</h3>
                <div>
                    <a class="socialMediaFooter" target="_blank" href="https://www.linkedin.com/in/barbara-morantes-carvajal/">
                        <i class="fab fab fa-linkedin-in"></i>
                    </a>
                    <a class="socialMediaFooter" target="_blank" href="https://github.com/BarbDMC">
                        <i class="fab fa-github"></i>
                    </a>
                    <a class="socialMediaFooter" target="_blank" href="https://twitter.com/BarbDMG">
                        <i class="fab fa-twitter"></i>
                    </a>
                </div>
            </div>

            <div class="contactForm">
                <input class="firstFieldSpace formFields formText inputSize" type="text" id="firstName" name="firstName" placeholder="First Name" />
                <input class="fieldsSpace formFields formText inputSize" type="text" id="lastName" name="lastName" placeholder="Last Name" />
                <input class="fieldsSpace formFields formText inputSize" type="text" id="email" name="email" placeholder="E-mail" />
                <textarea class="fieldsSpace formFields formText textAreaSize" name="message" id="" cols="30" rows="10" placeholder="Message"></textarea>
                <input class="formButton" type="submit" value="Send">
            </div>
        </div>
    </body>
</html>