import card from './graphCard.module.css';
import summary from '../summaryCard.module.css';

const GraphCard = ({ title, value, addBottomBorder }) => {
    return (
        <div className={`${card.container} ${addBottomBorder ? card.bottomBorder : ``}`}>
            <div className={summary.title}>
                {title}
            </div>
            <div className={summary.value}>
                {value}
            </div>
        </div>
    )
}

export default GraphCard;