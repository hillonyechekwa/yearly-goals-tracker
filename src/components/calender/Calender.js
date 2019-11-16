import React, { useState } from 'react';
import dateFns from 'date-fns';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortaswsome/free-solid-svg-icons';
import './calender.scss';

const Calender = () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectDate, setSelectDate] = useState(new Date())


  const header = () => {
    const dateFormat = "MMMM YYYY";

    return(
      <div className="header row d-flex-md">
        <div className="col-md">
          <FontAwesomeIcon icon={faChevronLeft} className="icon" onClick={prevMonth} />
        </div>
      </div>
    )
  }



    return (
      <div className="calender">
        <div>{header()}</div>
        {/* <div>{daysOfWeek()}</div>
        <div>{cells()}</div> */}
      </div>
    )

  
}

export default Calender
