import graphHeading from './graphHeading.module.css';

const graphHeadingHeading = () => {
    return (
        (
            <div className={graphHeading.container}>
                <div className={graphHeading.title}>Today's trends</div>
                
                <div className={graphHeading.subtitleAndLegend}>
                    
                    <div className={graphHeading.subtitle}>as of March 2019, 09:41 PM</div>
                    
                    <div className={graphHeading.legend}>
                        <div className={graphHeading.legendInstance}>
                            <div className={`${graphHeading.bar} ${graphHeading.blue}`}></div>
                            <div className={graphHeading.legendText}>Today</div>
                        </div>
                        <div className={graphHeading.legendInstance}>
                            <div className={`${graphHeading.bar} ${graphHeading.gray}`}></div>
                            <div className={graphHeading.legendText}>Yesterday</div>
                        </div>
                    </div>
    
                </div>
    
            </div>
        )
    )
}

export default graphHeadingHeading;