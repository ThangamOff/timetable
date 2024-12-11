import React from "react";
import "./MonTable.css";

const MonTable = (props) => {
  

  return (
    <>
      <div className="montableContaner">
        <div className="mon">
          <h4>{props.wekday}</h4>
          <div className="tableSubject">
            <div className="physics">
              <p className="physics12">Physics</p>
              <p className="marry">Marry Williams</p>
            </div>
          </div>
          <div className="tableSubject">
            <div className="Chemistry">
              <p className="physics12">Chemistry</p>
              <p className="marry">Marry Williams</p>
            </div>
          </div>
          <div className="tableSubject">
            <div className="Break">
              <p className="physics12">Short Break</p>
              <p className="marry">11.00-11:15</p>
            </div>
          </div>
          <div className="tableSubject">
            <div className="English">
              <p className="physics12">English</p>
              <p className="marry">Marry Williams</p>
            </div>
          </div>
          <div className="tableSubject">
            <div className="Mathematics">
              <p className="physics12">Mathematics</p>
              <p className="marry">Marry Williams</p>
            </div>
          </div>
          <div className="tableSubject">
            <div className="Break">
              <p className="physics12">Lunch Break</p>
              <p className="marry">01.00-02.00</p>
            </div>
          </div>
          <div className="tableSubject">
            <div className="Tamil">
              <p className="physics12">Tamil</p>
              <p className="marry">Marry Williams</p>
            </div>
          </div>
          <div className="tableSubject">
            <div className="Coumputer">
              <p className="physics12">Coumputer science</p>
              <p className="marry">Marry Williams</p>
            </div>
          </div>
          <div className="tableSubject">
            <div className="Break">
              <p className="physics12">Short Break</p>
              <p className="marry">11.00-11:15</p>
            </div>
          </div>
          <div className="tableSubject">
            <div className="physics1">
              <p className="physics12">Physics</p>
              <p className="marry">Marry Williams</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MonTable;
