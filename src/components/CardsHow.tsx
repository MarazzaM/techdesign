import React from 'react'
import CardHow from './CardHow'
import './CardsHow.scss'

function CardsHow() {
    const cards = [
        {
        id: 'a1',
        step: 'HTML',
        texthow: 'HTML (HyperText Markup Language) should be your first step to start in web development, it defines the meaning and structure of the web content',
        icons: <><i className='bx bxl-html5'></i></>,
        },
        {
            id: 'a2',
            step: 'CSS',
            texthow: 'CSS (Cascading Style Sheets) is used to stylize the elements of your HTML',
            icons: <><i className='bx bxl-css3'></i></>,
        },
        {
            id: 'a3',
            step: 'JavaScript',
            texthow: 'JavaScript',
            icons: <><i className='bx bxl-javascript'></i></>,
        },
        {
            id: 'a4',
            step: 'Step 4',
            texthow: 'lorem ipsum dolor',
            icons: <><i className='bx bxl-html5'></i><i className='bx bxl-css3'></i><i className='bx bxl-javascript'></i></>,
            }
    ]
    return (
<div>
    <div className="containercards">
        <h1>First steps</h1>
        <div className="textcc">quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut</div>
        <div className="cardshow">
            <CardHow
            step={cards[0].step}
            texthow={cards[0].texthow}
            icons={cards[0].icons}
            />
            <CardHow
            step={cards[1].step}
            texthow={cards[1].texthow}
            icons={cards[1].icons}
            />
            <CardHow
            step={cards[2].step}
            texthow={cards[2].texthow}
            icons={cards[2].icons}
            />
        </div>
    </div>

    <div className="containercards">
        <h1>Digging deeper</h1>
        <div className="textcc">quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut</div>
        <div className="cardshow">
            <CardHow
            step={cards[0].step}
            texthow={cards[0].texthow}
            icons={cards[0].icons}
            />
            <CardHow
            step={cards[1].step}
            texthow={cards[1].texthow}
            icons={cards[1].icons}
            />
            <CardHow
            step={cards[2].step}
            texthow={cards[2].texthow}
            icons={cards[2].icons}
            />
        </div>
    </div>

    <div className="containercards">
        <h1>Back to back!</h1>
        <div className="textcc">quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut</div>
        <div className="cardshow">
            <CardHow
            step={cards[0].step}
            texthow={cards[0].texthow}
            icons={cards[0].icons}
            />
            <CardHow
            step={cards[1].step}
            texthow={cards[1].texthow}
            icons={cards[1].icons}
            />
            <CardHow
            step={cards[2].step}
            texthow={cards[2].texthow}
            icons={cards[2].icons}
            />
        </div>
    </div>
</div>
    )
}

export default CardsHow
