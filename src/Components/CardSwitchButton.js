import store from '../Redux/store';
import './CardSwitchButton.css'

//props=getActiveTab,allTab,activeTab,getTotalTask
function CardSwitchButton(props){
  console.log("cardSwitchButton");
    return(
        <>
          <div className="cardButton">
            <span>{store.getState().totalTaskReducer} item left</span>
            <button className={store.getState().setActiveTab===1? 'activeButton':'switchButton'} onClick={props.allTab}><span className="textClass">All</span></button>
            <button className={store.getState().setActiveTab===2? 'activeButton':'switchButton'} onClick={props.activeTab} ><span className="textClass">Active</span></button>
            <button className={store.getState().setActiveTab===3? 'activeButton':'switchButton'} onClick={props.completedTab}><span className="textClass">Completed</span></button>
          </div>
        </>
    );
}

export default CardSwitchButton;