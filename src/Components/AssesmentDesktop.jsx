import "./AssesmentDesktop.css";
import { MdOutlineDashboard, MdOutlineContentPaste } from "react-icons/md";
import {
  PiNotePencilLight,
  PiLinkSimpleHorizontalBold,
  PiPlusBold,
  PiLinkSimpleBold
} from "react-icons/pi";
import { BiPaste } from "react-icons/bi";
import { AiOutlineLine } from "react-icons/ai";
import { TiEqualsOutline } from "react-icons/ti";
import { RiParentLine } from "react-icons/ri";
import { TbWorldUp } from "react-icons/tb";
import { ImMobile } from "react-icons/im";
import { BsBagCheck } from "react-icons/bs";

const AssesmentDesktop = () => {
  return (
    <div className="frame-parent">
      <div className="frame-child" />
      <div className="frame-group">
        <div className="frame-wrapper">
          <div className="frame-container">
            <div className="assessment-parent">
              <div className="assessment">Assessment</div>
              <img className="frame-item" alt="" src="/vector-298.svg" />
              <div className="frame-div">
                <div className="my-assessments-wrapper">
                  <div className="my-assessments">My Assessments</div>
                </div>
              </div>
            </div>
            <div className="mobile-screen-share-wrapper">
              {/* <img
                className="mobile-screen-share-icon"
                alt=""
                src="/mobile-screen-share.svg"
              /> */}
              <ImMobile className="mobile-screen-share-icon" />
            </div>
          </div>
        </div>
        <div className="frame-wrapper1">
          <div className="frame-wrapper2">
            <div className="frame-parent1">
              <div className="assessments-overview-parent">
                <div className="assessments-overview">Assessments Overview</div>
                <div className="frame-parent2">
                  <div className="total-assessment-parent">
                    <div className="assessment">Total Assessment</div>
                    <div className="frame-parent3">
                      {/* <img
                        className="frame-inner"
                        alt=""
                        src="/frame-1000009100.svg"
                      /> */}
                      <TiEqualsOutline className="frame-inner" />
                      <b className="b">34</b>
                    </div>
                  </div>
                  <img className="vector-icon" alt="" src="/vector-251.svg" />
                  <div className="candidates-parent">
                    <div className="assessment">Candidates</div>
                    <div className="frame-parent4">
                      {/* <img
                        className="frame-inner"
                        alt=""
                        src="/frame-1000009353.svg"
                      /> */}
                      <RiParentLine className="frame-inner" />
                      <div className="frame-parent5">
                        <div className="parent">
                          <b className="b">11,145</b>
                          <div className="div">+89</div>
                        </div>
                        <div className="total-candidate">Total Candidate</div>
                      </div>
                      <img
                        className="frame-child1"
                        alt=""
                        src="/vector-250.svg"
                      />
                      <div className="frame-parent5">
                        <div className="parent">
                          <b className="b">1,14</b>
                          <div className="div">+89</div>
                        </div>
                        <div className="total-candidate">Who Attamped</div>
                      </div>
                    </div>
                  </div>
                  <img className="vector-icon" alt="" src="/vector-251.svg" />
                  <div className="candidates-source-parent">
                    <div className="assessment">Candidates Source</div>
                    <div className="frame-parent4">
                      <TbWorldUp className="frame-inner" />
                      <div className="frame-parent5">
                        <div className="parent">
                          <b className="b">11,000</b>
                          <div className="div">+89</div>
                        </div>
                        <div className="total-candidate">E-mail</div>
                      </div>
                      <img
                        className="frame-child1"
                        alt=""
                        src="/vector-250.svg"
                      />
                      <div className="frame-parent5">
                        <div className="parent">
                          <b className="b">145</b>
                          <div className="div">+89</div>
                        </div>
                        <div className="total-candidate">Social Share</div>
                      </div>
                      <img
                        className="frame-child1"
                        alt=""
                        src="/vector-250.svg"
                      />
                      <div className="frame-parent5">
                        <div className="parent">
                          <b className="b">145</b>
                          <div className="div">+89</div>
                        </div>
                        <div className="total-candidate">Unique Link</div>
                      </div>
                    </div>
                  </div>
                  <img className="vector-icon" alt="" src="/vector-251.svg" />
                  <div className="total-purpose-parent">
                    <div className="assessment">Total Purpose</div>
                    <div className="frame-parent3">
                      {/* <img
                        className="frame-inner"
                        alt=""
                        src="/frame-10000091001.svg"
                      /> */}
                      <PiLinkSimpleHorizontalBold className="frame-inner" />
                      <b className="b">11</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="assessments-overview-parent">
                <div className="my-assessment-parent">
                  <div className="assessments-overview">My Assessment</div>
                  <div className="frame-wrapper3">
                    <div className="frame-child8" />
                  </div>
                </div>
                <div className="frame-parent13">
                  <div className="frame-parent14">
                    <div className="frame-parent15">
                      <div className="frame-parent16">
                        <div className="add-wrapper">
                          {/* <img className="add-icon" alt="" src="/add.svg" /> */}
                          <PiPlusBold className="add-icon" />
                        </div>
                        <div className="new-assessment">New Assessment</div>
                      </div>
                      <div className="from-here-you">
                        From here you can add questions of multiple types like
                        MCQs, subjective (text or paragraph)!
                      </div>
                      <img className="vector-icon1" alt="" src="/vector.svg" />
                    </div>
                    <div className="frame-parent17">
                      <div className="frame-parent18">
                        <div className="frame-parent19">
                          {/* <img
                            className="frame-child9"
                            alt=""
                            src="/frame-1000008703.svg"
                          /> */}
                          <BsBagCheck className="frame-child9" />
                          <div className="math-assessment-parent">
                            <div className="assessments-overview">
                              Math Assessment
                            </div>
                            <div className="job-parent">
                              <div className="job">Job</div>
                              <img
                                className="frame-child10"
                                alt=""
                                src="/vector-333.svg"
                              />
                              <div className="calendar-today-parent">
                                <img
                                  className="calendar-today-icon"
                                  alt=""
                                  src="/calendar-today.svg"
                                />
                                <div className="new-assessment">
                                  20 Apr 2023
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="dot-wrapper">
                          <img
                            className="dot-icon"
                            alt=""
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRAls7r9RiZjrpWZKLHKrvCtAyJp2WutzEjxcuEtTaZHzDUPqmRHwm2iLb50GoWGY266I&usqp=CAU"
                          />
                          {/* <PiDotsThreeOutlineVerticalFill className="dot-icon-option"  /> */}
                        </div>
                      </div>
                      <img
                        className="frame-child11"
                        alt=""
                        src="/vector-332.svg"
                      />
                      <div className="frame-parent20">
                        <div className="frame-parent21">
                          <div className="parent3">
                            <div className="assessment">00</div>
                            <div className="duration">Duration</div>
                          </div>
                          <div className="parent3">
                            <div className="assessment">00</div>
                            <div className="duration">Questions</div>
                          </div>
                        </div>
                        <div className="frame-parent22">
                          <div className="link-parent">
                            {/* <img className="link-icon" alt="" src="/link.svg" /> */}
                            <PiLinkSimpleBold className="link-icon" />
                            <div className="assessments-overview">Share</div>
                          </div>
                          <div className="frame-wrapper4">
                            <div className="lp-wrapper">
                              <b className="lp">LP</b>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="frame-child12" />
                    </div>
                    <div className="frame-parent17">
                      <div className="frame-parent18">
                        <div className="frame-parent19">
                          {/* <img
                            className="frame-child9"
                            alt=""
                            src="/frame-1000008703.svg"
                          /> */}
                          <BsBagCheck className="frame-child9" />
                          <div className="math-assessment-parent">
                            <div className="assessments-overview">
                              Math Assessment
                            </div>
                            <div className="job-parent">
                              <div className="job">Job</div>
                              <img
                                className="frame-child10"
                                alt=""
                                src="/vector-333.svg"
                              />
                              <div className="calendar-today-parent">
                                <img
                                  className="calendar-today-icon"
                                  alt=""
                                  src="/calendar-today1.svg"
                                />
                                <div className="new-assessment">
                                  20 Apr 2023
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="dot-wrapper">
                          <img
                            className="dot-icon"
                            alt=""
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRAls7r9RiZjrpWZKLHKrvCtAyJp2WutzEjxcuEtTaZHzDUPqmRHwm2iLb50GoWGY266I&usqp=CAU"
                          />
                        </div>
                      </div>
                      <img
                        className="frame-child11"
                        alt=""
                        src="/vector-332.svg"
                      />
                      <div className="frame-parent20">
                        <div className="frame-parent21">
                          <div className="parent3">
                            <div className="assessment">00</div>
                            <div className="duration">Duration</div>
                          </div>
                          <div className="parent3">
                            <div className="assessment">00</div>
                            <div className="duration">Questions</div>
                          </div>
                        </div>
                        <div className="frame-parent22">
                          <div className="link-parent">
                            {/* <img
                              className="link-icon"
                              alt=""
                              src="/link1.svg"
                            /> */}
                            <PiLinkSimpleBold className="link-icon" />
                            <div className="assessments-overview">Share</div>
                          </div>
                          <div className="frame-wrapper4">
                            <div className="frame-parent29">
                              <div className="lp-wrapper">
                                <b className="lp">LP</b>
                              </div>
                              <div className="lp-frame">
                                <b className="lp">LP</b>
                              </div>
                              <div className="lp-wrapper1">
                                <b className="lp">LP</b>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="frame-child12" />
                    </div>
                  </div>
                  <div className="frame-child17" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-wrapper6">
        <div className="frame-parent30">
          <div className="frame-parent31">
            <div className="dashboard-parent">
              {/* <img className="dashboard-icon" alt="" src="/dashboard.svg" /> */}
              <MdOutlineDashboard className="dashboard-icon" />
              <div className="dashboard">Dashboard</div>
              <div className="rectangle-div" />
            </div>
            <div className="note-alt-parent">
              {/* <img className="note-alt-icon" alt="" src="/note-alt.svg" /> */}
              <PiNotePencilLight className="note-alt-icon" />
              <div className="dashboard">Assessment</div>
              <div className="rectangle-div" />
            </div>
            <div className="quiz-parent">
              {/* <img className="dot-icon" alt="" src="/quiz.svg" /> */}
              <BiPaste className="dot-icon" />
              <div className="assessments-overview">My Library</div>
            </div>
            <div className="frame-child19" />
            <div className="frame-child19" />
            <div className="frame-child19" />
            {/* <div className="bill-and-plan-line-wrapper">
              <img className="link-icon" alt="" src="/bill-and-plan-line.svg" />
            </div> */}
          </div>
          <div className="vector-parent">
            {/* <img className="frame-child22" alt="" src="/vector-267.svg" /> */}
            <AiOutlineLine className="frame-child22" />
            <div className="frame-parent32">
              <div className="admin-wrapper">
                <div className="new-assessment">Admin</div>
              </div>
              <div className="admin-meds-parent">
                {/* <img className="dot-icon" alt="" src="/admin-meds.svg" /> */}
                <MdOutlineContentPaste className="dot-icon" />
                <div className="assessments-overview">
                  <p className="round">Round</p>
                  <p className="round">Status</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssesmentDesktop;
