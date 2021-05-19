import React,{useEffect, useState} from 'react'
 
// import {resourcesArray,mentees,mentors} from './data'
import {mentees} from '../data'
import {mentors} from '../data'
 
const ComputersList = (props)=>{
 
    const[assigned,setAssigned] = useState({mentor: false,mentee:false})
  
    const newList =[]
    // const l= computers.length
    const numComputers = 10
 
    for(let i = 1;i<=numComputers;i++){
        newList.push('computer')
    }
    useEffect(()=>{
 
    })
 
    return(
        <div>
            <p style={{textAlign:"center",fontWeight:"600"}}>8AM to 9AM</p>
        <div className='label-container'>
            <div className='label'>
                <div >Ment/Computers</div>
                <div>Mentor</div>
                <div>Mentee</div>
            </div>
 
            <div className='computer-list-container'>
                
                {newList.map((computer,i)=>{
 
                return(
                    <div className='computer-list' key ={i}>
                        <div className={assigned.mentor && assigned.mentee ? `available mentee-mentors-container`: `unavailable`}>{computer+(i+1)}</div>
                        <div >
                        <select className = 'mentor-list' >
                            <option value="none" selected disabled>
                            Mentors List
                            </option>
                            {mentors.map(mentor=>{
                                return <option >{mentor}</option>
                                
                            })}
                        </select>
                        
                        <select  className = 'mentor-list' >
                            <option value="none" selected disabled>
                            Mentees List
                            </option>
                            {mentees.map(mentor=>{
                                return <option >{mentor}</option>
                                
                            })}
                        </select>
                            
                        </div>
                       
                    </div>)
                    
                })}
               
            </div>
            
        </div>
        <button >Submit</button>
 	   <button onClick = {()=>props.setShow(!props.show)} >Return </button>
 
        </div>
    )
}
 
export default ComputersList
