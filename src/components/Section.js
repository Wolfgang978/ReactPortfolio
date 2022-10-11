import React from 'react';
import '../styles/reset.css';
import '../styles/style.css';

{/* <img src={require('/images/image-name.png')} /> */}

function Section() {
  return (
    
    <div>
    <h2>Max Wright</h2>
    
    <div className="divImage">
      <img className="aboutMeImg" src={require("../images/Max.JPG")} alt="A photograph of a man sitting on a wall. He is wearing blue jeans and a nice patterned button down short sleeve shirt."/>
      <img className="aboutMeImg" src={require("../images/Dog.jpg")} alt="A picture of a black fluffy dog. He is laying amongst fallen leaves and has a majestic air about him."/>
    </div>
    <section>
      <h3 id="aboutMe">About Me</h3>
      <p>I'm Max Wright. I have many different hobbies. I enjoy playing with my dog, Ciel. He is a beautiful black
        labradoodle and he loves to run around.
        One of my favorite things to do is play Ultimate Frisbee. I got into it in high school and have been playing
        pick up as much as I can.
        I worked at Panera Bread for around 3 years and I worked at Rogue Fitness for just under a year. Both were good
        jobs that I gained good experiance from.

      </p>
    </section>
    <h3 id="myWork">My Work</h3>
    <section className="myWork">

      <div className="myWorkDiv">
        <a className="myWorka" target="_blank" href="https://ancient-cliffs-85623.herokuapp.com/">
          <div className="container">
          <img className="myWorkimg" src={require("../images/Files.jpg")} alt="A picture of Files"/>
            <div className="textDeceration">Project 2 battle simulator</div>
        </div>
        </a>
        <a className="myWorka" target="_blank" href="https://github.com/Wolfgang978/First-Landing-Page">
          <div className="container">
          <img className="myWorkimg" src={require("../images/Files.jpg")} alt="A picture of Files"/>
          <div className="textDeceration">Wolfgang First-Landing-Page Repo</div>
        </div>
        </a>
        <a className="myWorka" target="_blank" href="https://wolfgang978.github.io/Horiseon-code-refactor/">
          <div className="container">
          <img className="myWorkimg" src={require("../images/Files.jpg")} alt="A picture of Files"/>
          <div className="textDeceration">Horiseon-code-refactor Site</div>
        </div>
        </a>
        <a className="myWorka" target="_blank" href="https://galdronis.github.io/Travel-Guide/index.html">
          <div className="container">
          <img className="myWorkimg" src={require("../images/Files.jpg")} alt="A picture of Files"/>
          <div className="textDeceration">Link to Travel Guide</div>
        </div>
        </a>
      </div>
    </section>
    <h3 id="contactMe">Contact Me</h3>
    <section className="contactMe">

      <form action="" type="submit">
        <input type="text" placeholder="First Name"/>
        <input type="text" placeholder="Last Name"/>
        <input type="email" placeholder="Email"/>
        <button type="submit">Submit</button>
      </form>
    </section>
  </div>
  );
}

export default Section;
