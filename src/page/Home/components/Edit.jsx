import React, { useState } from "react";
import { API_DATA } from '../../../global/constants';

const Edit = ({ add }) => {
  const [note, setNote] = useState("");
  function noteChange(e) {
    setNote(e.target.value);
  }

  const [date, setDate] = useState("");
  function dateChange(e) {
    setDate(e.target.value);
  }

  const [time, setTime] = useState("");
  function timeChange(e) {
    setTime(e.target.value);
  }
  
  function addItem() {
    fetch(API_DATA, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({note, date, time})
    }).then(() => {
      fetch(API_DATA)
      .then((res)=> res.json())
      .then((data) => {
        add(data.reverse());
      })
    })
    setDate('');
    setNote('');
    setTime('');
  }

  return (
    <div>
      <h1>備忘錄</h1>
      <p>記事：</p>
      <input type="text" value={note} onChange={noteChange} className='text'/>
      <div className='date-time'>
        <div>
          <p>日期：</p>
          <input type="date" value={date} onChange={dateChange} />
        </div>
        <div>
          <p>時間：</p>
          <input type="time" value={time} onChange={timeChange} />
        </div>
      </div>
      <button className="add" onClick={addItem}>
        新增
      </button>
    </div>
  );
};

export default Edit;
