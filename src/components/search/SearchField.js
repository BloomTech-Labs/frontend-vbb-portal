import React,  { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Modal, Card } from 'antd';
import useModal from '../Modal/useModal';
import SearchModalContent from '../Modal/SeachModalFragment';
import styled from "styled-components";
import  data from '../search-bar/MOCK_DATA.json';

const SearchField = ({ value }) => {
    //state variables
    const [ toggle, setToggle ] = useState(false);
    const [ options, setOptions ] = useState();
    const [ list, setList ] = useState([]);
    //custom hooks
    const SearchModal = Modal;
    const {isVisible, selectedUser, toggleModal } = useModal(SearchModal)
    
    //styled components
    const ListItem = styled.li `
    width:100%;
    &:hover {
      background-color:rgba(0,0,0,.025);
            cursor:pointer;
     }
    `;
   //custom made filter funtion without any hard specificity currently, I'd like to make this better
    const filterData = (value,options) => {
        setList([{}])
        const newList =  options.filter((val) => {
            const fullName = `${val.first_name.toLowerCase()} ${val.last_name.toLowerCase()}`;
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
      //   axios.get(`http://localhost:8000/mentees`)
      //     .then(async res => {
      //       const data = await res
      //       if (!res) {
      //         const err = (data && data.message) || res.status;
      //         return Promise.reject(err);
      //         console.log('no response')
      //       }
      //       setOptions(data.data);

         // })
          // .catch(error => {
          //   //setErrorMessage(error);
          //   console.error("error", error);
          // });
          setOptions(data);
      },[]);
      useEffect(() => {
        if(toggle) {
            if( value.name.length < 1 ) {
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
                {list.map((e) => <ListItem
                                    onClick = {() => toggleModal(SearchModal, e)}
                > {`${e.first_name} ${e.last_name}`} </ListItem> )}
              
                {features.map((feature) => <Link style = {{margin:"5px"}} to = {`${feature.url}`} onClick = {() => setToggle(false)}> {`${feature.name}`} </Link>) }
              <Button type= "primary" danger onClick = {() => setToggle(false)} style = {{position:"relative", float:"right"}}> close </Button>
            </Card>
             <SearchModal visible={isVisible} onOk={toggleModal} onCancel={toggleModal} destroyOnClose={true} >
             <SearchModalContent user={selectedUser}/>
             <Button>Edit</Button>
           </SearchModal>
           </>
             :null
        }
             
        </>
    )
}

export default SearchField