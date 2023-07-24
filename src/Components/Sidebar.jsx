import "./Sidebar.css";
import { MdOutlineDashboard, MdOutlineContentPaste } from "react-icons/md";
import { BiPaste } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

const Sidebar = ({onClose}) => {
  return (
    <div className="frame-parentt">
      <div className="frame-groupp">
        <div className="menu-parentt">
          <div className="menuu">Menu</div>
          <RxCross2 className="cut-iconn" onClick={onClose} />
        </div>
        <div className="frame-wrapperr">
          <div className="dashboard-parentt">
            <MdOutlineDashboard className="dashboard-iconn" />
            <div className="menuu">Dashboard</div>
          </div>
        </div>
        <div className="frame-containerr">
          <div className="note-alt-parentt">
            <MdOutlineContentPaste className="note-alt-iconn" />
            <div className="assessmentt">Assessment</div>
          </div>
          <div className="frame-childd" />
        </div>
        <div className="frame-wrapperr">
          <div className="dashboard-parentt">
            <BiPaste className="note-alt-iconn" />
            <div className="menuu">My Library</div>
          </div>
        </div>
      </div>
      <img className="frame-itemm" alt="" src="/vector-267.svg" />
      <div className="frame-wrapperr1">
        <div className="frame-parentt1">
          <div className="dashboard-parentt">
            <MdOutlineContentPaste className="note-alt-iconn" />
            <div className="menuu">Round Status</div>
          </div>
          <div className="admin-wrapperr">
            <div className="adminn">Admin</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
