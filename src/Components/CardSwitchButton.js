import { useSelector } from 'react-redux';
import store from '../Redux/store';
import './CardSwitchButton.css'

//props=getActiveTab,allTab,activeTab,getTotalTask
function CardSwitchButton(props){
  const activebuttontab=useSelector(state=>state.setActiveTab);
  const totalTask=useSelector(state=>state.totalTaskReducer);
  const globalstate=useSelector(state=>state.globalToDoReducer);
  const totalCompletedTask= globalstate.filter(o=>o.done===true).length
  const actvTab=useSelector(state=>state.setActiveTab);
  console.log("cardSwitchButton");
    return( 
        <>
          <div className="cardButton">
            <span className="itemLeftText">{actvTab===3?"Completed "+totalCompletedTask:"Items left "+totalTask} </span>
            <button className={activebuttontab===1? 'activeButton':'switchButton'} onClick={props.allTab}><span className="textClass">All</span></button>
            <button className={activebuttontab===2? 'activeButton':'switchButton'} onClick={props.activeTab} ><span className="textClass">Active</span></button>
            <button className={activebuttontab===3? 'activeButton':'switchButton'} onClick={props.completedTab}><span className="textClass">Completed</span></button>
          </div>
        </>
    );
}

export default CardSwitchButton;