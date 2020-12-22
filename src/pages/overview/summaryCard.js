
import summary from './summaryCard.module.css';

const summaryCard = ({ title, value }) => {
    const isSelected = title === "overdue";
    return (
        <div className={`${summary.container}${isSelected ? ` ${summary.selectedContainer}`: ``}`}>
            <div className={`${summary.title}${isSelected ? ` ${summary.selected}`: ``}`}>
                {title}
            </div>
            <div className={`${summary.value}${isSelected ? ` ${summary.selected}`: ``}`}>
                {value}
            </div>
        </div>
    )
}

export default summaryCard;