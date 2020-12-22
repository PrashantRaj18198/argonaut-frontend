import TopBar from './topBar';
import SummaryCard from './summaryCard';
import Trend from './trend/trend';

import overview from './overview.module.css';
import topbar from './topBar.module.css';

const Overview = () => {

    const { summary, trends  } = jsonData;

    const summaryCards = [];
    let index = 0;
    for (const [title, value] of Object.entries(summary)) {
        summaryCards.push(<SummaryCard key={index++} title={title} value={value}/>)
    }

    return (
        <div className={overview.container}>
            <TopBar />
            
            <div className={topbar.container}>
                {summaryCards}
            </div>

            <Trend trends={trends}/>
        </div>
    )
}

const jsonData = {
    "summary": {
        "unresolved": 60,
        "overdue": 15,
        "open": 40,
        "resolved": 500
    },
    "trends": {
        "resolved": 500,
        "received": 615,
        "timeToResponse": "33m",
        "timeToResolution": "3h 8m",
        "withinSLA": "93.7%",
        "data": [
        1,
        2,
        3,
        4,
        5,
        6,
        5,
        4,
        3,
        2,
        11,
        12,
        13,
        14,
        15,
        16,
        15,
        14,
        13,
        12,
        21,
        24,
        23,
        22
        ]
    }
}

export default Overview;