import "./AssesmentDesktop.css";
import { MdOutlineDashboard, MdOutlineContentPaste } from "react-icons/md";
import {
  PiNotePencilLight,
  PiLinkSimpleHorizontalBold,
  PiPlusBold,
  PiLinkSimpleBold,
} from "react-icons/pi";
import { BiPaste } from "react-icons/bi";
import { AiOutlineLine } from "react-icons/ai";
import { TiEqualsOutline } from "react-icons/ti";
import { RiParentLine } from "react-icons/ri";
import { TbWorldUp } from "react-icons/tb";
import { ImMobile } from "react-icons/im";
import { BsBagCheck } from "react-icons/bs";
import { useState } from "react";
import NewAssesment from "./NewAssesment";

const AssesmentDesktop = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="frame-parentM">
      <div className="frame-childM" />
      <div className="frame-groupM">
        <div className="frame-wrapperM">
          <div className="frame-containerM">
            <div className="assessmentM-parentM">
              <div className="assessmentM">assessment</div>
              <img className="frame-itemM" alt="" src="/vector-298.svg" />
              <div className="frame-divM">
                <div className="my-assessmentMs-wrapperM">
                  <div className="my-assessmentMs">My assessments</div>
                </div>
              </div>
            </div>
            <div className="mobile-screen-share-wrapperM">
              <ImMobile className="mobile-screen-share-iconM" />
            </div>
          </div>
        </div>
        <div className="frame-wrapperM1">
          <div className="frame-wrapperM2">
            <div className="frame-parentM1">
              <div className="assessmentMs-overview-parentM">
                <div className="assessmentMs-overview">
                  assessments Overview
                </div>
                <div className="frame-parentM2">
                  <div className="total-assessmentM-parentM">
                    <div className="assessmentM">Total assessment</div>
                    <div className="frame-parentM3">
                      <TiEqualsOutline className="frame-innerM" />
                      <b className="bM">34</b>
                    </div>
                  </div>
                  <img className="vector-icon" alt="" src="/vector-251.svg" />
                  <div className="candidates-parent">
                    <div className="assessmentM">Candidates</div>
                    <div className="frame-parentM4">
                      <RiParentLine className="frame-innerM" />
                      <div className="frame-parentM5">
                        <div className="parent">
                          <b className="bM">11,145</b>
                          <div className="div">+89</div>
                        </div>
                        <div className="total-candidate">Total Candidate</div>
                      </div>
                      <img
                        className="frame-childM1"
                        alt=""
                        src="/vector-250.svg"
                      />
                      <div className="frame-parentM5">
                        <div className="parent">
                          <b className="bM">1,14</b>
                          <div className="divM">+89</div>
                        </div>
                        <div className="total-candidate">Who Attamped</div>
                      </div>
                    </div>
                  </div>
                  <img className="vector-icon" alt="" src="/vector-251.svg" />
                  <div className="candidates-source-parent">
                    <div className="assessmentM">Candidates Source</div>
                    <div className="frame-parentM4">
                      <TbWorldUp className="frame-innerM" />
                      <div className="frame-parentM5">
                        <div className="parent">
                          <b className="bM">11,000</b>
                          <div className="divM">+89</div>
                        </div>
                        <div className="total-candidate">E-mail</div>
                      </div>
                      <img
                        className="frame-childM1"
                        alt=""
                        src="/vector-250.svg"
                      />
                      <div className="frame-parentM5">
                        <div className="parent">
                          <b className="bM">145</b>
                          <div className="divM">+89</div>
                        </div>
                        <div className="total-candidate">Social Share</div>
                      </div>
                      <img
                        className="frame-childM1"
                        alt=""
                        src="/vector-250.svg"
                      />
                      <div className="frame-parentM5">
                        <div className="parent">
                          <b className="bM">145</b>
                          <div className="divM">+89</div>
                        </div>
                        <div className="total-candidate">Unique Link</div>
                      </div>
                    </div>
                  </div>
                  <img className="vector-icon" alt="" src="/vector-251.svg" />
                  <div className="total-purpose-parent">
                    <div className="assessmentM">Total Purpose</div>
                    <div className="frame-parentM3">
                      <PiLinkSimpleHorizontalBold className="frame-innerM" />
                      <b className="bM">11</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="assessmentMs-overview-parentM">
                <div className="my-assessmentM-parentM">
                  <div className="assessmentMs-overview">My Assessment</div>
                  <div className="frame-wrapperM3">
                    <div className="frame-childM8" />
                  </div>
                </div>
                <div className="frame-parentM13">
                  <div className="frame-parentM14">
                    <div className="frame-parentM15">
                      <div className="frame-parentM16">
                        <div className="add-wrapperM" onClick={openModal}>
                          <PiPlusBold className="add-icon" />
                        </div>
                        <div className="new-assessmentM">New assessmentM</div>
                      </div>
                      <div className="from-here-you">
                        From here you can add questions of multiple types like
                        MCQs, subjective (text or paragraph)!
                      </div>
                      <img className="vector-icon1" alt="" src="/vector.svg" />
                    </div>
                    <div className="frame-parentM17">
                      <div className="frame-parentM18">
                        <div className="frame-parentM19">
                          <BsBagCheck className="frame-childM9" />
                          <div className="math-assessmentM-parentM">
                            <div className="assessmentMs-overview">
                              Math Assessment
                            </div>
                            <div className="job-parent">
                              <div className="job">Job</div>
                              <img
                                className="frame-childM10"
                                alt=""
                                src="/vector-333.svg"
                              />

                              <div className="calendar-today-parent">
                                <img
                                  className="calendar-today-icon"
                                  alt=""
                                  src="/calendar-today.svg"
                                />
                                <div className="new-assessmentM">
                                  20 Apr 2023
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="dot-wrapperM">
                          <img
                            className="dot-iconM"
                            alt=""
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRAls7r9RiZjrpWZKLHKrvCtAyJp2WutzEjxcuEtTaZHzDUPqmRHwm2iLb50GoWGY266I&usqp=CAU"
                          />
                        </div>
                      </div>
                      <img
                        className="frame-childM11"
                        alt=""
                        src="/vector-332.svg"
                      />
                      <div className="frame-parentM20">
                        <div className="frame-parentM21">
                          <div className="parent3">
                            <div className="assessmentM">00</div>
                            <div className="duration">Duration</div>
                          </div>
                          <div className="parent3">
                            <div className="assessmentM">00</div>
                            <div className="duration">Questions</div>
                          </div>
                        </div>
                        <div className="frame-parentM22">
                          <div className="link-parent">
                            <PiLinkSimpleBold className="link-icon" />
                            <div className="assessmentMs-overview">Share</div>
                          </div>
                          <div className="frame-wrapperM4">
                            <div className="lp-wrapperM">
                              <b className="lp">LP</b>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="frame-childM12" />
                    </div>
                    <div className="frame-parentM17">
                      <div className="frame-parentM18">
                        <div className="frame-parentM19">
                          <BsBagCheck className="frame-childM9" />
                          <div className="math-assessmentM-parentM">
                            <div className="assessmentMs-overview">
                              Math Assessment
                            </div>
                            <div className="job-parent">
                              <div className="job">Job</div>
                              <img
                                className="frame-childM10"
                                alt=""
                                src="/vector-333.svg"
                              />
                              <div className="calendar-today-parent">
                                <img
                                  className="calendar-today-icon"
                                  alt=""
                                  src="/calendar-today1.svg"
                                />
                                <div className="new-assessmentM">
                                  20 Apr 2023
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="dot-wrapperM">
                          <img
                            className="dot-iconM"
                            alt=""
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRAls7r9RiZjrpWZKLHKrvCtAyJp2WutzEjxcuEtTaZHzDUPqmRHwm2iLb50GoWGY266I&usqp=CAU"
                          />
                        </div>
                      </div>
                      <img
                        className="frame-childM11"
                        alt=""
                        src="/vector-332.svg"
                      />
                      <div className="frame-parentM20">
                        <div className="frame-parentM21">
                          <div className="parent3">
                            <div className="assessmentM">00</div>
                            <div className="duration">Duration</div>
                          </div>
                          <div className="parent3">
                            <div className="assessmentM">00</div>
                            <div className="duration">Questions</div>
                          </div>
                        </div>
                        <div className="frame-parentM22">
                          <div className="link-parent">
                            <PiLinkSimpleBold className="link-icon" />
                            <div className="assessmentMs-overview">Share</div>
                          </div>
                          <div className="frame-wrapperM4">
                            <div className="frame-parentM29">
                              <div className="lp-wrapperM">
                                <b className="lp">LP</b>
                              </div>
                              <div className="lp-frame">
                                <b className="lp">LP</b>
                              </div>
                              <div className="lp-wrapperM1">
                                <b className="lp">LP</b>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="frame-childM12" />
                    </div>
                  </div>
                  <div className="frame-childM17" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-wrapperM6">
        <div className="frame-parentM30">
          <div className="frame-parentM31">
            <div className="dashboard-parent">
              <MdOutlineDashboard className="dashboard-icon" />
              <div className="dashboard">Dashboard</div>
              <div className="rectangle-div" />
            </div>
            <div className="note-alt-parent">
              <PiNotePencilLight className="note-alt-icon" />
              <div className="dashboard">Assessment</div>
              <div className="rectangle-div" />
            </div>
            <div className="quiz-parentM">
              <BiPaste className="note-alt-icon" />
              <div className="assessmentMs-overview">My Library</div>
            </div>
            <div className="frame-childM19" />
            <div className="frame-childM19" />
            <div className="frame-childM19" />
          </div>
          <div className="vector-parent">
            <AiOutlineLine className="frame-childM22" />
            <div className="frame-parentM32">
              <div className="admin-wrapperM">
                <div className="new-assessmentM">Admin</div>
              </div>
              <div className="admin-meds-parent">
                <MdOutlineContentPaste className="dot-iconM" />
                <div className="assessmentMs-overview">
                  <p className="round">Round</p>
                  <p className="round">Status</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        isOpen && (
          <div className="openModal-frame">
            <NewAssesment closeModal={closeModal} />
          </div>
        )
      }
    </div>
  );
};

export default AssesmentDesktop;
