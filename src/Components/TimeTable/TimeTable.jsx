import React, { useState } from "react";
import "./TimeTable.css";
//logo
import logo from "../../Assets/Images/Anix-Logo.png";
import user from "../../Assets/Images/images.jpg";
//list icons
import { CiHome } from "react-icons/ci";
import { IoIosArrowUp } from "react-icons/io";

import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { MdOutlineInbox } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { IoIosNotificationsOutline } from "react-icons/io";
//plus
import { HiPlus } from "react-icons/hi";
//end
import { IoIosArrowDown } from "react-icons/io";
import WeektimeTable from "../WeektimeTable/WeektimeTable";
import MonTable from "../MonTable/MonTable";
import WeekEnd from "../WeekEnd/WeekEnd";

const TimeTable = () => {


    let mon="Mon"
    let mon1="Tue"
    let mon2="Wed"
    let mon3="Thu"
    let mon4="Fri"
    let mon5="Sat"

  const [open, setopen] = useState(false);
  function opendiv(params) {
    setopen(!open);
  }
  return (
    <>
      <div className="tableContainer">
        <div className="tableleftContainer">
          <img src={logo} alt="" className="tableLogo" />

          <div className="tableList">
            <div className="tableList1">
              <CiHome />
              <p>Dasboard</p>
            </div>
            <div className="tableList2" onClick={opendiv}>
              <div className="tableList2Tropdown">
                <div className="tableList12">
                  <LiaChalkboardTeacherSolid />
                  <p>Teaching Staff</p>
                </div>
                {open ? (
                  <IoIosArrowDown className="" />
                ) : (
                  <IoIosArrowUp className="" />
                )}
              </div>
              {open && (
                <div className="dropdown">
                  <div className="time"></div>
                  <div className="time1"></div>
                  <div className="time2"></div>
                </div>
              )}
            </div>
            <div className="tableList1">
              <p>
                <MdOutlineInbox />
              </p>
              <p>Non-Teaching staff</p>
            </div>
            <div className="tableList1">
              <p>
                <PiStudent />
              </p>
              <p>Students</p>
            </div>
            <div className="tableList1">
              <p>
                <IoIosNotificationsOutline />
              </p>
              <p>Notifiactions</p>
            </div>
            <div className="tableleftEnd">
              <div className="tableleftEnd1">
                <img src={user} alt="" className="tableUser" />
                <div className="tableUserContent">
                  <p className="fontsize17px fontweight600">Lorem Ipsum</p>
                  <p className="fontsize17px1">Lorem@ipsum.com</p>
                </div>
                <IoIosArrowDown className="fontsize17px fontweight600 marginleft15px " />
              </div>
            </div>
          </div>
        </div>

        <div className="tablerightContainer">
          <div className="tablerightHeader">
            <h1 className="tablerightHeading">Time Table Management</h1>
            <p>
              Efficiently organize teacher schedules and class assignment for a
              smooth and sturctured learning experience
            </p>
          </div>

          <div className="tablerightbtns3">
            <div className="tableright2">
              <button>Class</button>
              <button>Teacher</button>
            </div>
            <button className="plus">
              <HiPlus />
            </button>
          </div>

          <div className="tablerightSelect">
            <div className="tablerightSelect1">
              <h3 >Class</h3>
              <select name="" id="">
                <option value="">Grade 8</option>
                <option value="">Grade 7</option>
                <option value="">Grade 6</option>
              </select>
            </div>

            <div className="tablerightSelect2">
              <h3>Section</h3>
              <select name="" id="">
                <option value="">A</option>
                <option value="">B</option>
                <option value="">C</option>
              </select>
            </div>
          </div>

          <div className="timetableWeekcon">
            <div className="ops">
              <WeektimeTable />
            </div>
            <MonTable wekday ={mon}/>
            <MonTable wekday={mon1}/>
            <MonTable wekday={mon2}/>
            <MonTable wekday={mon3}/>
            <MonTable wekday={mon4}/>
            <MonTable wekday={mon5}/>
            <div className="ops">
            <WeekEnd />
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeTable;
