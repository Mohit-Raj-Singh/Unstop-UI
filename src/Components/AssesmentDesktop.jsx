import "./AssesmentDesktop.css";
import { MdOutlineDashboard, MdOutlineContentPaste } from "react-icons/md";
import {
  PiNotePencilLight,
  PiLinkSimpleHorizontalBold,
  PiPlusBold,
  PiLinkSimpleBold,
  PiCalendarBold,
} from "react-icons/pi";
import { BiPaste } from "react-icons/bi";
import { AiOutlineLine } from "react-icons/ai";
import { TiEqualsOutline } from "react-icons/ti";
import { RiParentLine } from "react-icons/ri";
import { TbWorldUp } from "react-icons/tb";
import { ImMobile } from "react-icons/im";
import { BsBagCheck } from "react-icons/bs";
import { useState } from "react";
import AssesmentMobile from "./AssesmentMobile";
import NewAssesment from "./NewAssesment";

const AssesmentDesktop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMobile, setShowMobile] = useState(true);

  const handleMobileView = () => {
    setShowMobile(!showMobile);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {showMobile ? (
        <div className="main-frame-boxMS">
        <div className="frame-parentMS">
          <div className="frame-childMS" />
          <div className="frame-groupMS">
            <div className="frame-wrapperMS">
              <div className="frame-containerMS">
                <div className="assessment-parentMS">
                  <div className="assessmentMS">Assessment</div>
                  <img className="frame-itemMS" alt="" src="/vector-298.svg" />
                  <div className="frame-divMS">
                    <div className="my-assessments-wrapperMS">
                      <div className="my-assessmentsMS">My Assessments</div>
                    </div>
                  </div>
                </div>
                <div
                  className="mobile-screen-share-wrapperMS"
                  onClick={handleMobileView}
                >
                  <ImMobile className="mobile-screen-share-iconMS" />
                </div>
              </div>
            </div>
            <div className="frame-wrapper1MS">
              <div className="frame-wrapper2MS">
                <div className="frame-parent1MS">
                  <div className="assessments-overview-parentMS">
                    <div className="assessments-overviewMS">
                      Assessments Overview
                    </div>
                    <div className="frame-parent2MS">
                      <div className="total-assessment-parentMS">
                        <div className="assessmentMS">Total Assessment</div>
                        <div className="frame-parent3MS">
                          <div className="frame-equalsMS-box">
                            <TiEqualsOutline className="frame-equalsMS" />
                          </div>
                          <b className="b">34</b>
                        </div>
                      </div>
                      <div className="candidates-parentMS">
                        <div className="assessmentMS">Candidates</div>
                        <div className="frame-parent4MS">
                          <div className="frame-parentMS-box">
                            <RiParentLine className="frame-equalsMS" />
                          </div>
                          <div className="frame-parent5MS">
                            <div className="parentMS">
                              <b className="b">11,145</b>
                              <div className="divMS">+89</div>
                            </div>
                            <div className="total-candidateMS">
                              Total Candidate
                            </div>
                          </div>
                          <img
                            className="frame-child1MS"
                            alt=""
                            src="/vector-250.svg"
                          />
                          <div className="frame-parent5MS">
                            <div className="parentMS">
                              <b className="b">1,14</b>
                              <div className="divMS">+89</div>
                            </div>
                            <div className="total-candidateMS">
                              Who Attamped
                            </div>
                          </div>
                        </div>
                      </div>
                      <img
                        className="vector-iconMS"
                        alt=""
                        src="/vector-251.svg"
                      />
                      <div className="candidates-source-parentMS">
                        <div className="assessmentMS">Candidates Source</div>
                        <div className="frame-parent4MS">
                          <div className="frame-worldMS-box">
                            <TbWorldUp className="frame-worldMS" />
                          </div>
                          <div className="frame-parent5MS">
                            <div className="parentMS">
                              <b className="b">11,000</b>
                              <div className="divMS">+89</div>
                            </div>
                            <div className="total-candidateMS">E-mail</div>
                          </div>
                          <img
                            className="frame-child1MS"
                            alt=""
                            src="/vector-250.svg"
                          />
                          <div className="frame-parent5MS">
                            <div className="parentMS">
                              <b className="b">145</b>
                              <div className="divMS">+89</div>
                            </div>
                            <div className="total-candidateMS">
                              Social Share
                            </div>
                          </div>
                          <img
                            className="frame-child1MS"
                            alt=""
                            src="/vector-250.svg"
                          />
                          <div className="frame-parent5MS">
                            <div className="parentMS">
                              <b className="b">145</b>
                              <div className="divMS">+89</div>
                            </div>
                            <div className="total-candidateMS">Unique Link</div>
                          </div>
                        </div>
                      </div>
                      <img
                        className="vector-iconMS"
                        alt=""
                        src="/vector-251.svg"
                      />
                      <div className="total-purpose-parentMS">
                        <div className="assessmentMS">Total Purpose</div>
                        <div className="frame-parent3MS">
                          <div className="frame-innerMS-box">
                            <PiLinkSimpleHorizontalBold className="frame-innerMS" />
                          </div>

                          <b className="b">11</b>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="assessments-overview-parentMS">
                    <div className="my-assessment-parentMS">
                      <div className="assessments-overviewMS">
                        My Assessment
                      </div>
                      <div className="frame-wrapper3MS">
                        <div className="frame-child8MS" />
                      </div>
                    </div>
                    <div className="frame-parent13MS">
                      <div className="frame-parent14MS">
                        <div className="frame-parent15MS">
                          <div className="frame-parent16MS">
                            <div className="add-wrapperMS" onClick={openModal}>
                              <PiPlusBold className="add-iconMS" />
                            </div>
                            <div className="new-assessmentMS">
                              New Assessment
                            </div>
                          </div>
                          <div className="from-here-youMS">
                            From here you can add questions of multiple types
                            like MCQs, subjective (text or paragraph)!
                          </div>
                          <img
                            className="vector-icon1MS"
                            alt=""
                            src="/vector.svg"
                          />
                        </div>
                        <div className="frame-parent17MS">
                          <div className="frame-parent18MS">
                            <div className="frame-parent19MS">
                              <div className="frame-child-box-19">
                                <BsBagCheck className="frame-child9MS" />
                              </div>
                              <div className="math-assessment-parentMS">
                                <div className="assessments-overviewMS">
                                  Math Assessment
                                </div>
                                <div className="job-parentMS">
                                  <div className="jobMS">Job</div>
                                  <img
                                    className="frame-child10MS"
                                    alt=""
                                    src="/vector-333.svg"
                                  />
                                  <div className="calendar-today-parentMS">
                                    <PiCalendarBold className="calendar-today-iconMS" />
                                    <div className="new-assessmentMS">
                                      20 Apr 2023
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="dot-wrapperMS">
                              <img
                                className="dot-iconMS"
                                alt=""
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRAls7r9RiZjrpWZKLHKrvCtAyJp2WutzEjxcuEtTaZHzDUPqmRHwm2iLb50GoWGY266I&usqp=CAU"
                              />
                            </div>
                          </div>
                          <img
                            className="frame-child11MS"
                            alt=""
                            src="/vector-332.svg"
                          />
                          <div className="frame-parent20MS">
                            <div className="frame-parent21MS">
                              <div className="parent3MS">
                                <div className="assessmentMS">00</div>
                                <div className="durationMS">Duration</div>
                              </div>
                              <div className="parent3MS">
                                <div className="assessmentMS">00</div>
                                <div className="durationMS">Questions</div>
                              </div>
                            </div>
                            <div className="frame-parent22MS">
                              <div className="link-parentMS">
                                <PiLinkSimpleBold className="link-iconMS" />
                                <div className="assessments-overviewMS">
                                  Share
                                </div>
                              </div>
                              <div className="frame-wrapper4MS">
                                <div className="lp-wrapperMS">
                                  <b className="lpMS">LP</b>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="frame-child12MS" />
                        </div>
                        <div className="frame-parent17MS">
                          <div className="frame-parent18MS">
                            <div className="frame-parent19MS">
                              <div className="frame-child-box-19">
                                <BsBagCheck className="frame-child9MS" />
                              </div>
                              <div className="math-assessment-parentMS">
                                <div className="assessments-overviewMS">
                                  Math Assessment
                                </div>
                                <div className="job-parentMS">
                                  <div className="jobMS">Job</div>
                                  <img
                                    className="frame-child10MS"
                                    alt=""
                                    src="/vector-333.svg"
                                  />
                                  <div className="calendar-today-parentMS">
                                    <PiCalendarBold className="calendar-today-iconMS" />
                                    <div className="new-assessmentMS">
                                      20 Apr 2023
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="dot-wrapperMS">
                              <img
                                className="dot-iconMS"
                                alt=""
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRAls7r9RiZjrpWZKLHKrvCtAyJp2WutzEjxcuEtTaZHzDUPqmRHwm2iLb50GoWGY266I&usqp=CAU"
                              />
                            </div>
                          </div>
                          <img
                            className="frame-child11MS"
                            alt=""
                            src="/vector-332.svg"
                          />
                          <div className="frame-parent20MS">
                            <div className="frame-parent21MS">
                              <div className="parent3MS">
                                <div className="assessmentMS">00</div>
                                <div className="durationMS">Duration</div>
                              </div>
                              <div className="parent3MS">
                                <div className="assessmentMS">00</div>
                                <div className="durationMS">Questions</div>
                              </div>
                            </div>
                            <div className="frame-parent22MS">
                              <div className="link-parentMS">
                                <PiLinkSimpleBold className="link-iconMS" />
                                <div className="assessments-overviewMS">
                                  Share
                                </div>
                              </div>
                              <div className="frame-wrapper4MS">
                                <div className="frame-parent29MS">
                                  <div className="lp-wrapperMS">
                                    <b className="lpMS">LP</b>
                                  </div>
                                  <div className="lp-frameMS">
                                    <b className="lpMS">LP</b>
                                  </div>
                                  <div className="lp-wrapper1MS">
                                    <b className="lpMS">LP</b>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="frame-child12MS" />
                        </div>
                      </div>
                      <div className="frame-child17MS" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-wrapper6MS">
            <div className="frame-parent30MS">
              <div className="frame-parent31MS">
                <div className="dashboard-parentMS">
                  <MdOutlineDashboard className="dashboard-iconMS" />
                  <div className="dashboardMS">Dashboard</div>
                  <div className="rectangle-divMS" />
                </div>
                <div className="note-alt-parentMS">
                  <PiNotePencilLight className="note-alt-iconMS" />
                  <div className="dashboardMS">Assessment</div>
                  <div className="rectangle-divMS" />
                </div>
                <div className="quiz-parentMS">
                  <BiPaste className="note-alt-icon" />
                  <div className="assessments-overviewMS">My Library</div>
                </div>
                <div className="frame-child19MS" />
                <div className="frame-child19MS" />
                <div className="frame-child19MS" />
              </div>
              <div className="vector-parentMS">
                <AiOutlineLine className="frame-child22MS" />
                <div className="frame-parent32MS">
                  <div className="admin-wrapperMS">
                    <div className="new-assessmentMS">Admin</div>
                  </div>
                  <div className="admin-meds-parentMS">
                    <MdOutlineContentPaste className="dot-iconMS" />
                    <div className="assessments-overviewMS">
                      <p className="roundMS">Round</p>
                      <p className="roundMS">Status</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {isOpen && (
            <div className="openModal-frameMS">
              <NewAssesment closeModal={closeModal} />
            </div>
          )}
        </div>
        </div>
      ) : (
        <AssesmentMobile />
      )}
    </>
  );
};

export default AssesmentDesktop;
