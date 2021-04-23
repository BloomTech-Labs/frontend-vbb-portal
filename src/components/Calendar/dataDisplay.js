import React from 'react';
import { fakeData } from './data';

const DataToBeDisplayed = () => {

    return(
        <form>
            <select name="cars" id="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
        </form>
    )
}

export default DataToBeDisplayed