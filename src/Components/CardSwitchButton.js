import './CardSwitchButton.css'

//props=getActiveTab,allTab,activeTab,getTotalTask
function CardSwitchButton(props){
    return(
        <>
          <div className="cardButton">
            <span>{props.getTotalTask} item left</span>
            <button className={props.getActiveTab===1? 'activeButton':'switchButton'} onClick={props.allTab}><span className="textClass">All</span></button>
            <button className={props.getActiveTab===2? 'activeButton':'switchButton'} onClick={props.activeTab} ><span className="textClass">Active</span></button>
            <button className={props.getActiveTab===3? 'activeButton':'switchButton'} onClick={props.completedTab}><span className="textClass">Completed</span></button>
          </div>
        
        </>
    );
}

export default CardSwitchButton;