import React, { useState } from 'react'
import image from '../../meow.jpg';
import './resume.css';

function resume() {
  return (
    <form><div>
    <img src={image} className="App-img" alt='' />
    <p>
      PRITHVI
    </p>
    <h1>Information</h1>
    <h2>Name : prithvi</h2>
    <h2>Email : shettigarprithviraj8@gmail.com</h2>
    <h2>Phone :8197767212</h2>
    <h2 ><a
    >https://www.linkedin.com/in/srishti-d-6b6b42268/</a></h2>
    <h1>About</h1>
    <h2>To work with an organization where can learn new
      skills and increase my abilities for the organizational
      goal as well as myself</h2>
    <h1>Education</h1>
    <h2>B.E (Pursuing: 2nd year) <h2 />
      Shri Madhwa Vadhiraja Institute of Technology and
      Managements. .Bantakal Udupi.
      CGPA: 7.62
    </h2>
    <h2>Passed out 12th from SR PU College Hebri. in 2021.</h2>
    <h2>Mark: 85.2%</h2>
    <h2>Passed out 10th from Amratha Barathi Vidyalaya Hebri in 2019.</h2>
    <h2>Marks: 86.42</h2>
    <h1>Technical skills </h1>
    <h2>➢ Programing Language: C, C++, JAVA, PYTHON.</h2>
    <h2>➢ Technical _MS Word.</h2>
    <h2>➢Html , CSS and Javascript </h2>
    <h1>Achievements/Certification </h1>
    <h2>➢Ethical hacking and Cybersecurity </h2>
    <h2>➢Introduction to Git-Hub </h2>
    <h2>➢Programming Skills Development on 10th March 2023</h2>
  </div></form>
    


  )


}


export default resume