import React,  { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Modal, Card } from 'antd';
import useModal from '../Modal/useModal';
import SearchModalContent from '../Modal/SeachModalFragment';
import  data from '../search-bar/MOCK_DATA.json';
import classes from  '../search-bar/Modal.css';
import register from '../../registerServiceWorker';

const SearchField = ({ value }) => {
    //state variables
    const [ toggle, setToggle ] = useState(false);
    const [ options, setOptions ] = useState();
    const [ list, setList ] = useState([]);
    //custom hooks
    const {isVisible, selectedUser, toggleModal } = useModal(SearchModalContent)
    
   //custom made filter funtion without any hard specificity currently, I'd like to make this better
    const filterData = (value,options) => {
        setList([{}])
        const newList =  options.filter((val) => {
            const fullName = `${val.first_name.toLowerCase()} ${val.last_name.toLowerCase()}`;
            if(val.first_name[0].toLowerCase().includes(value.name[0]?.toLowerCase()) || val.last_name[0].toLowerCase().includes(value.name[0]?.toLowerCase()))
                if(fullName.includes(value.name.toLowerCase())) {
            return val
        }
        }).filter((val, idx) => idx < 10).map((val) => val) 
                return(
                    newList
                )

      }

    //wrote out the api call originally going to local host and everything seemed to work , reverted to local mockdata file for development

      useEffect(() => {
          setOptions(data);
      },[]);
      useEffect(() => {
        if(toggle) {
            if( value?.name?.length < 1 ) {
                setToggle(!toggle)
                setList(filterData(value,options))
            }
            else{
             setList(filterData(value,options))
            }
        }
        else{
            if(value?.name?.length >= 1 ){
            setToggle(!toggle)
            setList(filterData(value,options))
            }
            else{
                return null;
            }
        }
       }, [value])

       //setting up perma features first 
       const features = [
        {name: "Calendar", url: "/calendar/"},
        {name: "Donate", url: "/donate/"},
        {name: "Sign up", url: "/signup/"},
        {name: "Sign in", url: "/signin/"},
        {name: "Booking", url: "/booking/"},
        {name: "Dashboard", url: "/"},
        {name: "Register", url: "/register/"},
        {name: "Create Mentor", url: ""}
      ]
      
    return (
        <>
        { toggle ?
            <>
            <Card 
                style= {{backgroundColor: 'rgba(255,255,255,2.5)', width:"80%" , margin: "0 100px", overflow: "hidden", overflowY: "scroll", height: "20vh" }}
            >
                {list.map((e) => <li
                                    className = 'searchBar'
                                    onClick = {() => toggleModal(SearchModalContent, e)}
                > {`${e.first_name} ${e.last_name}`} </li> )}
                { value && list.length === 0 ?
                        <p>Need to register a new mentee? click here <Link to = {register.url}> register </Link></p>
                        : null
                            }
              
                {features.map((feature) => <Link style = {{margin:"5px"}} to = {`${feature.url}`} onClick = {() => setToggle(false)}> {`${feature.name}`} </Link>) }
              <Button type= "primary" danger onClick = {() => setToggle(false)} style = {{position:"relative", float:"right"}}> close </Button>
            </Card>
             <Modal visible={isVisible} onOk={toggleModal} onCancel={toggleModal} destroyOnClose={true} >
             <SearchModalContent user={selectedUser}/>
             <Button>Edit</Button>
           </Modal>
           </>
             :null
        }
             
        </>
    )
}

export default SearchField