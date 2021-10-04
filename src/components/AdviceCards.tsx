import React from 'react'
import AdviceCard from './AdviceCard'
import "./AdviceCards.scss";

const content = [
    {
      id: 'ac1',
      title: 'Codecademy',
      text: "From building websites to analyzing data, the choice is yours. No matter your experience level, you'll be writing real, working code in minutes.",
      btn: "Go to website!",
      path: "https://www.codecademy.com",
    },
    { id: 'ac2', 
    title: 'The Odin Project', 
    text: "This project is designed to fill in the gap for people who are trying to hack it on their own but still want a high quality education.", 
    btn: "Go to website!",
    path: "https://www.theodinproject.com", 
    },
    {
      id: 'ac3',
      title: 'Clever Programmer',
      text: "How to become a developer in 6-10 months even if you're a complete beginner",
      btn: "Go to website!",
      path: "https://www.cleverprogrammer.com/",
    },
    {
      id: 'ac4',
      title: 'freeCodeCamp',
      text: "They’re a nonprofit community that helps you learn to code by building projects.",
      btn: "Go to website!",
      path: "https://www.freecodecamp.org",
    },
    {
      id: 'ac5',
      title: 'W3Schools',
      text: "W3Schools is a website for learning web technologies online",
      btn: "Go to website!",
      path: "https://www.w3schools.com/html/",
    },
    {
      id: 'ac6',
      title: 'Pug preprocessor',
      text: "Pug is a templating engine focused on making HTML encoding faster",
      btn: "Go to website!",
      path: "https://pugjs.org/api/getting-started.html",
    },
    {
      id: 'ac7',
      title: 'MDN Web Docs',
      text: "Open community of developers building resources for a better Web",
      btn: "Go to website!",
      path: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      id: 'ac8',
      title: 'HTML5 ROCKS',
      text: "Several tutorials for HTML development",
      btn: "Go to website!",
      path: "https://www.html5rocks.com/en/resources.html",
    },
    {
      id: 'ac9',
      title: 'Undraw',
      text: "The design project with open-source illustrations for any idea you can imagine and create",
      btn: "Go to website!",
      path: "https://undraw.co/",
    },
    {
      id: 'ac10',
      title: 'Animated Gradient Background Generator',
      text: "A tool for creating animated background gradients in pure CSS.",
      btn: "Go to website!",
      path: "https://animated-gradient-background-generator.netlify.app/",
    },
    {
      id: 'ac11',
      title: 'CSS Tricks',
      text: "Web with tricks and tutorials of all kinds about CSS",
      btn: "Go to website!",
      path: "https://css-tricks.com",
    },
    {
      id: 'ac12',
      title: 'Grid generator',
      text: "Generate grids fast and simple",
      btn: "Go to website!",
      path: "https://cssgrid-generator.netlify.app",
    },
    {
      id: 'ac13',
      title: 'JavaScript references',
      text: "Repository of facts about the JavaScript language",
      btn: "Go to website!",
      path: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference",
    },
    {
      id: 'ac14',
      title: 'Eloquent JavaScript',
      text: "An online book about JavaScript, programming, and the wonders of the digital.",
      btn: "Go to website!",
      path: "https://eloquentjavascript.net",
    },
    {
      id: 'ac15',
      title: 'JSbooks',
      text: "An extensive collection of free JavaScript books.",
      btn: "Go to website!",
      path: "https://jsbooks.revolunet.com",
    },
    {
      id: 'ac16',
      title: 'JavaScript for Cats',
      text: "So easy your human companion could do it too!",
      btn: "Go to website!",
      path: "http://jsforcats.com",
    },
    
  ];

function AdviceCards() {
    return (
      <div>
        <div>
          {/* GENERAL */}
          <h1>Learning Resources</h1>
            <main className="page-content">
           <AdviceCard
            title={content[0].title}
            text={content[0].text}
            btn={content[0].btn}
            path={content[0].path}
            id={content[0].id}
            />
            <AdviceCard
            title={content[1].title}
            text={content[1].text}
            btn={content[1].btn}
            path={content[1].path}
            id={content[1].id}
            />
            <AdviceCard
            title={content[2].title}
            text={content[2].text}
            btn={content[2].btn}
            path={content[2].path}
            id={content[2].id}
            />
            <AdviceCard
            title={content[3].title}
            text={content[3].text}
            btn={content[3].btn}
            path={content[3].path}
            id={content[3].id}
            />
            </main>
        </div>
        {/* HTML */}
        <div>
          <h1>HTML Resources</h1>
            <main className="page-content">
           <AdviceCard
            title={content[4].title}
            text={content[4].text}
            btn={content[4].btn}
            path={content[4].path}
            id={content[4].id}
            />
            <AdviceCard
            title={content[5].title}
            text={content[5].text}
            btn={content[5].btn}
            path={content[5].path}
            id={content[5].id}
            />
            <AdviceCard
            title={content[6].title}
            text={content[6].text}
            btn={content[6].btn}
            path={content[6].path}
            id={content[6].id}
            />
            <AdviceCard
            title={content[7].title}
            text={content[7].text}
            btn={content[7].btn}
            path={content[7].path}
            id={content[7].id}
            />
            </main>
        </div>
        {/* CSS */}
        <div>
          <h1>CSS Resources</h1>
            <main className="page-content">
           <AdviceCard
            title={content[8].title}
            text={content[8].text}
            btn={content[8].btn}
            path={content[8].path}
            id={content[8].id}
            />
            <AdviceCard
            title={content[9].title}
            text={content[9].text}
            btn={content[9].btn}
            path={content[9].path}
            id={content[9].id}
            />
            <AdviceCard
            title={content[10].title}
            text={content[10].text}
            btn={content[10].btn}
            path={content[10].path}
            id={content[10].id}
            />
            <AdviceCard
            title={content[11].title}
            text={content[11].text}
            btn={content[11].btn}
            path={content[11].path}
            id={content[11].id}
            />
            </main>
        </div>
        {/* JS */}
        <div>
          <h1>JavaScript Resources</h1>
            <main className="page-content">
           <AdviceCard
            title={content[12].title}
            text={content[12].text}
            btn={content[12].btn}
            path={content[12].path}
            id={content[12].id}
            />
            <AdviceCard
            title={content[13].title}
            text={content[13].text}
            btn={content[13].btn}
            path={content[13].path}
            id={content[13].id}
            />
            <AdviceCard
            title={content[14].title}
            text={content[14].text}
            btn={content[14].btn}
            path={content[14].path}
            id={content[14].id}
            />
            <AdviceCard
            title={content[15].title}
            text={content[15].text}
            btn={content[15].btn}
            path={content[15].path}
            id={content[15].id}
            />
            </main>
        </div>
    </div>
    )
}

export default AdviceCards
