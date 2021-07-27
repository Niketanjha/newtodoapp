import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import store from '../Redux/store';
import './ContentCards.css'

import 'moment-timezone';
import moment from 'moment-timezone';

function ContentCards(props){
    console.log("contentCard");
    const data=useSelector(state=>state.localToDoReducer);
    const acttab=useSelector(state=>state.setActiveTab);
    const date=new Date();
    return(
        <div className="contentCards">
        {data.map((list,i)=>{
            console.log(i,moment(list.date).fromNow());
            return(
                <div className="card1" key={list.id}>
                    <input type="checkbox" 
                        id={list.id}
                        onChange={()=>{props.checkChange(i)}}
                        defaultChecked={list.done}
                        style={{width:"30px",height:"30px",
                        borderRadius:"15px"
                        }}
                    >    
                    </input>
                    <span className="task" style={{textDecoration:list.done?"line-through":"none"}}>{list.task}</span>
                    <span className="dateAndTimeText">
                        {(list.date.getTime()-Date.now())>0?("Deadline "+moment(list.date).fromNow()):"Deadline Expired "+(moment(list.date).fromNow())}
                    </span>
                    <button className="delButton" 
                        onClick={()=>{
                            if(acttab===3){
                            console.log("this is I from contentcomponent:",i);
                            
                            props.deleteButton(i);
                            }else{
                            props.openModal(i)}}} //()=>{deleteButton(i)}
                        style={{marginLeft:"auto"}}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                    </button>
                </div>);
        })}
        </div>
    );
}


export default ContentCards;