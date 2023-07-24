import "./SubSection.css";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const SubSection = ({closeModal}) => {
  return (
    <div className="frame-parenttt">
      <div className="frame-wrapperrr">
        <div className="frame-grouppp">
          <div className="sub-section-details-wrapperrr">
            <div className="sub-section-detailsss">Sub-Section Details</div>
          </div>
          <div className="frame-containerrr">
            <div className="check-wrapperrr">
              <img className="check-iconnn" alt="" src="/check.svg" />
            </div>
            <div className="cut-wrapperrr" onClick={closeModal}>
              <RxCross2 className="cut-iconnn" />
            </div>
          </div>
        </div>
      </div>
      <div className="frame-divvv">
        <div className="frame-parenttt1">
          <div className="name-of-assessmenttt-wrapperrr">
            <div className="name-of-assessmenttt">Name of assessment</div>
          </div>
          <div className="type-here-wrapperrr">
            <div className="name-of-assessmenttt">Type Here</div>
          </div>
        </div>
        <div className="frame-parenttt1">
          <div className="name-of-assessmenttt-wrapperrr">
            <div className="name-of-assessmenttt">Purpose of the test is</div>
          </div>
          <div className="select-parenttt">
            <div className="name-of-assessmenttt">Select</div>

            <MdOutlineKeyboardArrowDown className="check-iconnn" />
          </div>
        </div>
        <div className="frame-parenttt1">
          <div className="name-of-assessmenttt-wrapperrr">
            <div className="name-of-assessmenttt">Description</div>
          </div>
          <div className="select-parenttt">
            <div className="name-of-assessmenttt">Select</div>
            <MdOutlineKeyboardArrowDown className="check-iconnn" />
          </div>
        </div>
        <div className="frame-parenttt1">
          <div className="name-of-assessmenttt-wrapperrr">
            <div className="name-of-assessmenttt">Skills</div>
          </div>
          <div className="frame-parenttt5">
            <div className="frame-wrapperrr1">
              <div className="frame-parenttt6">
                <div className="frame-wrapperrr2">
                  <div className="uiux-and-design-parenttt">
                    <div className="name-of-assessmenttt">UI/UX and Design</div>
                    <RxCross2 className="close-iconnn" />
                  </div>
                </div>
                <div className="frame-wrapperrr2">
                  <div className="uiux-and-design-parenttt">
                    <div className="name-of-assessmenttt">Web Development</div>
                    <RxCross2 className="close-iconnn" />
                  </div>
                </div>
                <div className="frame-wrapperrr2">
                  <div className="uiux-and-design-parenttt">
                    <div className="name-of-assessmenttt">UI/UX and Design</div>
                    <RxCross2 className="close-iconnn" />
                  </div>
                </div>
                <div className="frame-wrapperrr2">
                  <div className="uiux-and-design-parenttt">
                    <div className="name-of-assessmenttt">No of Question</div>
                    <RxCross2 className="close-iconnn" />
                  </div>
                </div>
                <div className="frame-wrapperrr2">
                  <div className="uiux-and-design-parenttt">
                    <div className="name-of-assessmenttt">Web Development</div>
                    <RxCross2 className="close-iconnn" />
                  </div>
                </div>
              </div>
            </div>
            <div className="type-here-containerrr">
              <div className="name-of-assessmenttt">Type here</div>
            </div>
          </div>
        </div>
        <div className="frame-parenttt1">
          <div className="name-of-assessmenttt-wrapperrr">
            <div className="name-of-assessmenttt">Duration of assessment</div>
          </div>
          <div className="select-parenttt">
            <div className="name-of-assessmenttt">HH:MM:SS</div>
            <img
              className="keyboard-arrow-down-iconnn2"
              alt=""
              src="/check.svg"
            />
          </div>
        </div>
      </div>
      <div className="buttons-wrapperrr">
        <div className="buttonsss">
          <div className="sub-section-detailsss">Next</div>
        </div>
      </div>
    </div>
  );
};

export default SubSection;
