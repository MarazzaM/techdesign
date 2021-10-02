import React from 'react'
import AdviceCard from './AdviceCard'
import "./AdviceCards.scss";

const content = [
    {
      id: 'ac1',
      title: 'About',
      text: "All about this project and who we are!",
      btn: "Find out more!",
      path: "About",
    },
    { id: 'ac2', 
    title: 'How to Start', 
    text: "Do you want to start developing websites? Here are some suggestions to get started", 
    btn: "Find out more",
    path: "DUCK", 
    },
    {
      id: 'ac3',
      title: 'Advice',
      text: "Some tips that we would have liked to hear when we started",
      btn: "Find out more",
      path: "Advice",
    },
    {
      id: 'ac4',
      title: 'Resources',
      text: "Resources of all kinds to have all the documentation and tools at hand",
      btn: "Find out more",
      path: "Resources",
    },
  ];

function AdviceCards() {
    return (
      <div>
        <div>
          {/* GENERAL */}
          <h1>General Resources</h1>
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
        {/* CSS */}
        <div>
          <h1>CSS Resources</h1>
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
        {/* JS */}
        <div>
          <h1>JavaScript Resources</h1>
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
        <div>
          <h1>Visual Resources</h1>
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
    </div>
    )
}

export default AdviceCards
