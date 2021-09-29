import React from 'react'
import './Cards.scss'
import Card from './Card';

function Cards() {
    const content = [
        {
          id: 'e1',
          title: 'About',
          text: "lorem ipsum",
          btn: "Find out more!",
          path: "About",
        },
        { id: 'e2', 
        title: 'How to Start', 
        text: "lorem", 
        btn: "Find out more",
        path: "HowTo", },
        {
          id: 'e3',
          title: 'Advice',
          text: "lorem",
          btn: "Find out more",
          path: "Advice",
        },
        {
          id: 'e4',
          title: 'Resources',
          text: "lorem",
          btn: "Find out more",
          path: "Resources",
        },
      ];
    return (
        <div>
            <main className="page-content">
            <Card
            title={content[0].title}
            text={content[0].text}
            btn={content[0].btn}
            path={content[0].path}
            
            />
            <Card
            title={content[1].title}
            text={content[1].text}
            btn={content[1].btn}
            path={content[1].path}
      
            />
            <Card
            title={content[2].title}
            text={content[2].text}
            btn={content[2].btn}
            path={content[2].path}
            
            />
            <Card
            title={content[3].title}
            text={content[3].text}
            btn={content[3].btn}
            path={content[3].path}
            
            />
</main>
        </div>
    )
}


export default Cards
