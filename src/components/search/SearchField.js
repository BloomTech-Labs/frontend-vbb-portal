import React,  { useState, useEffect } from 'react'
import axios from 'axios';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const SearchField = ({ value }) => {
    const [ toggle, setToggle ] = useState(false);
    const [ options, setOptions ] = useState();
    const [ list, setList ] = useState([])

    const filterData = (value,options) => {
        //take in input
        //compare input to options 
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
    //SearchField needs to take state in SearchBar & pull options in from store and pull in options with an API call 
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
       const letOptions = [
        {
            label:"Features",
            options: features.map((feature) => <ul> <li> {`${feature.name}`} </li> </ul>),
          },
       ]
    //Search

    return (
        <>
        { toggle ?
            <Card >
                {list.map((e) => <li> {`${e.first_name} ${e.last_name}`} </li> )}
              
                {features.map((feature) => <Link> {`${feature.name}`} </Link>) }
              
            </Card>
             :null
        }
             
        </>
    )
}

export default SearchField