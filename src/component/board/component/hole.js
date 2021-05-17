import '../../../index.css';

const Hole = ({ classes, handleClick, isSmiley }) => isSmiley?<button className={classes} onClick={handleClick}>&#128512;</button>:<button className={classes} onClick={handleClick}></button>;

export default Hole;
