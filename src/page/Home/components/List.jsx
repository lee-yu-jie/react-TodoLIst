import React from "react";
import Item from "./Item";

const List = ({ ListData, deleteData }) => {
  return (
    <div className="list">
      {ListData.map((item) => {
        const { id, note, date, time } = item;
        return (
          <Item
            key={id}
            id={id}
            noteData={note}
            dateData={date}
            timeData={time}
            deleteData={deleteData}
          />
        );
      })}
    </div>
  );
};

export default List;
