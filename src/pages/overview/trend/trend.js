import { useState, useEffect } from 'react';
import Graph from './graph';
import GraphCard from './graphCard';

import trend from './trend.module.css';
import topbar from '../topBar.module.css';


const Trend = ({ trends }) => {

    const [cards, setCards] = useState([]);
    const trendsLength = Object.entries(trends).length - 1;
    // console.log(trendsLength);
    useEffect(() => {
        const cards = [];
        let index = 0;
        for (const [title, value] of Object.entries(trends)) {
            if (title === "data") {
                continue
            }
            // add bottom border to all cards except last one.
            cards.push(<GraphCard key={index} title={title} value={value} addBottomBorder={index !== trendsLength - 1}/>);
            index += 1;
        }
        setCards(cards);
    }, [])
    

    return (
        <div className={topbar.container}>
            <div className={trend.container}>
                <Graph data={trends.data} />
                <div className={trend.cards}>
                    {cards}
                </div>
            </div>
        </div>
    )
}

export default Trend;