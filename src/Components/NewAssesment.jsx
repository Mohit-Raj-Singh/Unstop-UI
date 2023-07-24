import React from "react";
import "./NewAssesment.css";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const NewAssesment = ({closeModal}) => {
  return (
    <div className="frame-parent">
      <div className="create-new-assessment-parent">
        <div className="create-new-assessment">Create new assessment</div>
        <RxCross2 className="cut-icon" onClick={closeModal} />
      </div>
      <div className="frame-group">
        <div className="frame-container">
          <div className="name-of-assessment-wrapper">
            <div className="name-of-assessment">Name of assessment</div>
          </div>
          <div className="type-here-wrapper">
            <div className="name-of-assessment">Type Here</div>
          </div>
        </div>
        <div className="frame-container">
          <div className="name-of-assessment-wrapper">
            <div className="name-of-assessment">Purpose of the test is</div>
          </div>
          <div className="select-parent">
            <div className="name-of-assessment">Select</div>
            <MdOutlineKeyboardArrowDown className="keyboard-arrow-down-icon" />
          </div>
        </div>
        <div className="frame-container">
          <div className="name-of-assessment-wrapper">
            <div className="name-of-assessment">Description</div>
          </div>
          <div className="select-parent">
            <div className="name-of-assessment">Select</div>
            <MdOutlineKeyboardArrowDown className="keyboard-arrow-down-icon" />
          </div>
        </div>
        <div className="frame-container">
          <div className="name-of-assessment-wrapper">
            <div className="name-of-assessment">Skills</div>
          </div>
          <div className="frame-parent3">
            <div className="frame-parent4">
              <div className="frame-parent5">
                <div className="frame-wrapper">
                  <div className="uiux-and-design-parent">
                    <div className="name-of-assessment">UI/UX and Design</div>
                    <RxCross2 className="close-icon" />
                  </div>
                </div>
                <div className="frame-wrapper">
                  <div className="uiux-and-design-parent">
                    <div className="name-of-assessment">No of Question</div>
                    <RxCross2 className="close-icon" />
                  </div>
                </div>
                <div className="frame-wrapper">
                  <div className="uiux-and-design-parent">
                    <div className="name-of-assessment">Web Development</div>
                    <RxCross2 className="close-icon" />
                  </div>
                </div>
              </div>
              <div className="frame-parent5">
                <div className="frame-wrapper">
                  <div className="uiux-and-design-parent">
                    <div className="name-of-assessment">UI/UX and Design</div>
                    <RxCross2 className="close-icon" />
                  </div>
                </div>
                <div className="frame-wrapper">
                  <div className="uiux-and-design-parent">
                    <div className="name-of-assessment">Web Development</div>
                    <RxCross2 className="close-icon" />
                  </div>
                </div>
              </div>
            </div>
            <div className="type-here-container">
              <div className="name-of-assessment">Type here</div>
            </div>
          </div>
        </div>
        <div className="frame-container">
          <div className="name-of-assessment-wrapper">
            <div className="name-of-assessment">Duration of assessment</div>
          </div>
          <div className="hhmmss-parent">
            <div className="name-of-assessment">HH:MM:SS</div>
            <img
              className="keyboard-arrow-down-icon2"
              alt=""
              src="/keyboard-arrow-down1.svg"
            />
          </div>
        </div>
      </div>
      <div className="buttons-wrapper">
        <div className="buttons">
          <div className="create-new-assessment">Save</div>
        </div>
      </div>
    </div>
  );
};

export default NewAssesment;
