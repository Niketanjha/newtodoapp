import './CardSwitchButton.css'

//props=getActiveTab,allTab,activeTab,getTotalTask
function CardSwitchButton(props){
    return(
        <>
          <div className="cardButton">
            <span>{props.getTotalTask} item left</span>
            <button className={props.getActiveTab===1? 'activeButton':'switchButton'} onClick={props.allTab}>All</button>
            <button className={props.getActiveTab===2? 'activeButton':'switchButton'} onClick={props.activeTab}>Active</button>
            <button className={props.getActiveTab===3? 'activeButton':'switchButton'} onClick={props.completedTab}>Completed</button>
          </div>
        
        </>
    );
}

export default CardSwitchButton;