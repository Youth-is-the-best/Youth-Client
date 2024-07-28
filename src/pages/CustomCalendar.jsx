import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { MdOutlineEditCalendar } from 'react-icons/md';

const CustomCalendar = ({ onChange, value }) => {
  const [nowDate, setNowDate] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleCalendar = () => {
    setIsOpen(!isOpen);
  };

  const handleDateChange = (selectedDate) => {
    onChange(selectedDate);
    setIsOpen(false);
    setNowDate(moment(selectedDate).format("YYYY.MM.DD"));
  };

  return (
    <CalendarContainer>
      <MdOutlineEditCalendar onClick={handleToggleCalendar}></MdOutlineEditCalendar>
      <CalendarWrapper isOpen={isOpen}>
        <Calendar onChange={handleDateChange} value={value}></Calendar>
      </CalendarWrapper>
    </CalendarContainer>
  );
};

export default CustomCalendar;

const CalendarContainer = styled.div`
  position: relative;
  display: flex;
  border-radius: 0px, 20px, 20px, 20px;
`;

const CalendarWrapper = styled.div`
  z-index: 11;
  position: absolute;
  top: 100%;
  left: 0;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;