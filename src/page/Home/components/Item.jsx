import React from "react";
import { API_DATA } from '../../../global/constants';

const Item = ({ id, noteData, dateData, timeData, deleteData}) => {
  function deleteItem() {
    deleteData(function (prev) {
      return prev.filter((item) => item.id !== id);
    });
    const deleteAPI = `${API_DATA}/${id}`  
    fetch(deleteAPI, {
      method: 'delete',
    }).catch(err => console.log(err));
  }

  return (
    <div className="item">
      <div>
        <p className="content">{noteData}</p>
        <p>{`${dateData} ${timeData}`}</p>
      </div>
      <button className="remove" onClick={deleteItem}>
        刪除
      </button>
    </div>
  );
};

export default Item;
