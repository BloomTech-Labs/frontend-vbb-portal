import React,  { useState, useEffect } from 'react'
import axios from 'axios';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import { Input , Button, Modal } from 'antd';
import useModal from '../Modal/useModal';
import SearchModalContent from '../Modal/SeachModalFragment';
import useStyles from './styles';

const SearchField = ({ value }) => {
    //state variables
    const [ toggle, setToggle ] = useState(false);
    const [ options, setOptions ] = useState();
    const [ list, setList ] = useState([]);
    //custom hooks
    const classes = useStyles();
    const SearchModal = Modal;
    const {isVisible, selectedUser, toggleModal } = useModal(SearchModal)


    const filterData = (value,options) => {
        setList([{}])
        console.log(list)
        const newList =  options.filter((val) => {
            if(val.first_name.toLowerCase().includes(value.name.toLowerCase() )) {
            return val
        }
        }).filter((val, idx) => idx < 10).map((val) => val) 
                return(
                    newList
                )

      }
    
      useEffect(() => {
        axios.get(`http://localhost:8000/mentees`)
          .then(async res => {
            const data = await res
            if (!res) {
              const err = (data && data.message) || res.status;
              return Promise.reject(err);
              console.log('no response')
            }
            setOptions(data.data);

          })
          .catch(error => {
            //setErrorMessage(error);
            console.error("error", error);
          });
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
        {name: "calendar", url: "/calendar/"},
        {name: "donate", url: "/donate/"},
        {name: "signup", url: "/signup/"},
        {name: "signin", url: "/signin/"},
        {name: "booking", url: "/booking/"},
        {name: "dashboard", url: "/"},
        {name: "register", url: "/register/"},
        {name: "Create Mentor", url: ""}
      ]
      
    //Search
      const handleClick = () => {

      }
    return (
        <>
        { toggle ?
            <>
            <Card 
                style= {{backgroundColor: 'rgba(255,255,255,1.5)' , width: '500px'}}
            >
                {list.map((e) => <li
                                    className = {classes.listItem}
                                    onClick = {() => toggleModal(SearchModal, e)}
                > {`${e.first_name} ${e.last_name}`} </li> )}
              
                {features.map((feature) => <Link className = {classes.featureItem} to = {`${feature.url}`}> {`${feature.name}`} </Link>) }
              
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