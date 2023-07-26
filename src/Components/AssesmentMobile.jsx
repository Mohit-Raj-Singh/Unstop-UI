import "./AssesmentMobile.css";
import { MdSegment } from "react-icons/md";
import { PiPlusBold, PiLinkSimpleBold } from "react-icons/pi";
import { FaFilter } from "react-icons/fa";
import { BiSearchAlt2, BiSolidBarChartAlt2, BiLaptop } from "react-icons/bi";
import { BsBagCheck, BsClock } from "react-icons/bs";
import { useState } from "react";
import AssesmentDesktop from "./AssesmentDesktop";
import Sidebar from "./Sidebar";
import SubSection from "./SubSection";

const AssesmentMobile = () => {
  const [showDesktop, setShowDesktop] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleDesktop = () => {
    setShowDesktop(!showDesktop);
  };

  const handleShow = () => {
    setShowSidebar(true);
    console.log(showSidebar);
  };

  const closeSide = () => {
    setShowSidebar(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {showDesktop ? (
        <div className="mobile-frame-MRS">
        <div className="iphone-13-mini-7">
          <div className="status-bar-group">
            <div className="status-bar-parent">
              <div className="status-bar1">
                <div className="frame1"></div>
              </div>
              <div className="frame-parent57">
                <div className="frame-parent58">
                  <div className="segment-wrapper"></div>
                  <div className="assessment">Assessment</div>
                </div>
                <div className="laptop-mac-wrapper"></div>
              </div>
              <div className="frame-wrapper8">
                <div className="frame-parent59">
                  <div className="my-assessments-wrapper">
                    <div className="my-assessments">My Assessments</div>
                  </div>
                  <div className="unstop-assessments-wrapper">
                    <div className="my-assessments">Unstop Assessments</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="component-61-wrapper">
              <div className="status-bar-parent">
                <div className="frame-parent60">
                  <div className="my-assessment-group">
                    <div className="my-assessment1">My Assessment</div>
                    <div className="frame-parent61">
                      <div className="search-container">
                        <BiSearchAlt2 className="search-icon1" />
                      </div>
                      <div className="search-container">
                        <FaFilter className="filter-list-alt-icon1" />
                      </div>
                      <div className="search-container">
                        <div className="bar-chart-container">
                          <BiSolidBarChartAlt2 className="bar-chart-icon1" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-parent62">
                    <div className="frame-parent63">
                      <div className="frame-parent64">
                        <div className="add-container" onClick={openModal}>
                          <PiPlusBold className="add-icon1" />
                        </div>
                        <div className="my-assessment1">New Assessment</div>
                      </div>
                      <div className="from-here-you1">
                        From here you can add questions of multiple types like
                        MCQs, subjective (text or paragraph)!
                      </div>
                      <img className="vector-icon5" alt="" src="/vector5.svg" />
                    </div>
                    <div className="frame-parent65">
                      <div className="frame-parent66">
                        <div className="frame-parent58">
                          <div className="frame-bag-child20">
                            <BsBagCheck className="frame-child20" />
                          </div>

                          <div className="math-assessment-parent5">
                            <div className="my-assessment1">
                              Math Assessment
                            </div>
                            <div className="job-parent5">
                              <div className="job7">Job</div>
                              <img
                                className="frame-child21"
                                alt=""
                                src="/vector-333.svg"
                              />
                              <div className="frame-wrapper9">
                                <div className="schedule-parent5">
                                  <BsClock className="schedule-icon7" />
                                  <div className="my-assessments">
                                    20 Apr 23
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="dot-wrapper5">
                          <img
                            className="bar-chart-icon1"
                            alt=""
                            src="/3-dot1.svg"
                          />
                        </div>
                      </div>
                      <img
                        className="frame-child22"
                        alt=""
                        src="/vector-332.svg"
                      />
                      <div className="frame-parent68">
                        <div className="frame-parent69">
                          <div className="parent12">
                            <div className="my-assessment1">00</div>
                            <div className="duration7">Duration</div>
                          </div>
                          <div className="parent12">
                            <div className="my-assessment1">00</div>
                            <div className="duration7">Questions</div>
                          </div>
                        </div>
                        <div className="frame-parent70">
                          <div className="link-parent5">
                            <PiLinkSimpleBold className="link-icon7" />
                            <div className="share7">Share</div>
                          </div>
                          <div className="frame-wrapper10">
                            <div className="lp-wrapper16">
                              <b className="lp18">LP</b>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-parent65">
                      <div className="frame-parent66">
                        <div className="frame-parent58">
                          <div className="frame-bag-child20">
                            <BsBagCheck className="frame-child20" />
                          </div>
                          <div className="math-assessment-parent5">
                            <div className="my-assessment1">
                              Math Assessment
                            </div>
                            <div className="job-parent5">
                              <div className="job7">Job</div>
                              <img
                                className="frame-child21"
                                alt=""
                                src="/vector-333.svg"
                              />
                              <div className="frame-wrapper9">
                                <div className="schedule-parent5">
                                  <BsClock className="schedule-icon7" />
                                  <div className="my-assessments">
                                    20 Apr 23
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="dot-wrapper5">
                          <img
                            className="bar-chart-icon1"
                            alt=""
                            src="/3-dot1.svg"
                          />
                        </div>
                      </div>
                      <img
                        className="frame-child22"
                        alt=""
                        src="/vector-332.svg"
                      />
                      <div className="frame-parent68">
                        <div className="frame-parent69">
                          <div className="parent12">
                            <div className="my-assessment1">00</div>
                            <div className="duration7">Duration</div>
                          </div>
                          <div className="parent12">
                            <div className="my-assessment1">00</div>
                            <div className="duration7">Questions</div>
                          </div>
                        </div>
                        <div className="frame-parent76">
                          <div className="link-parent5">
                            <PiLinkSimpleBold className="link-icon7" />
                            <div className="share7">Share</div>
                          </div>
                          <div className="frame-parent77">
                            <div className="frame-parent78">
                              <div className="lp-wrapper17">
                                <b className="lp18">LP</b>
                              </div>
                              <div className="lp-wrapper18">
                                <b className="lp18">LP</b>
                              </div>
                              <div className="lp-wrapper19">
                                <b className="lp18">LP</b>
                              </div>
                            </div>
                            <div className="div24">+324</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-parent65">
                      <div className="frame-parent66">
                        <div className="frame-parent58">
                          <div className="frame-bag-child20">
                            <BsBagCheck className="frame-child20" />
                          </div>
                          <div className="math-assessment-parent5">
                            <div className="my-assessment1">
                              Math Assessment
                            </div>
                            <div className="job-parent5">
                              <div className="job7">Job</div>
                              <img
                                className="frame-child21"
                                alt=""
                                src="/vector-333.svg"
                              />
                              <div className="frame-wrapper9">
                                <div className="schedule-parent5">
                                  <BsClock className="schedule-icon7" />
                                  <div className="my-assessments">
                                    20 Apr 23
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="dot-wrapper5">
                          <img
                            className="bar-chart-icon1"
                            alt=""
                            src="/3-dot1.svg"
                          />
                        </div>
                      </div>
                      <img
                        className="frame-child22"
                        alt=""
                        src="/vector-332.svg"
                      />
                      <div className="frame-parent68">
                        <div className="frame-parent69">
                          <div className="parent12">
                            <div className="my-assessment1">00</div>
                            <div className="duration7">Duration</div>
                          </div>
                          <div className="parent12">
                            <div className="my-assessment1">00</div>
                            <div className="duration7">Questions</div>
                          </div>
                        </div>
                        <div className="frame-parent76">
                          <div className="link-parent5">
                            <PiLinkSimpleBold className="link-icon7" />
                            <div className="share7">Share</div>
                          </div>
                          <div className="frame-parent77">
                            <div className="frame-parent78">
                              <div className="lp-wrapper17">
                                <b className="lp18">LP</b>
                              </div>
                              <div className="lp-wrapper18">
                                <b className="lp18">LP</b>
                              </div>
                              <div className="lp-wrapper19">
                                <b className="lp18">LP</b>
                              </div>
                            </div>
                            <div className="div24">+324</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-parent65">
                      <div className="frame-parent66">
                        <div className="frame-parent58">
                          <div className="frame-bag-child20">
                            <BsBagCheck className="frame-child20" />
                          </div>
                          <div className="math-assessment-parent5">
                            <div className="my-assessment1">
                              Math Assessment
                            </div>
                            <div className="job-parent5">
                              <div className="job7">Job</div>
                              <img
                                className="frame-child21"
                                alt=""
                                src="/vector-333.svg"
                              />
                              <div className="frame-wrapper9">
                                <div className="schedule-parent5">
                                  <BsClock className="schedule-icon7" />
                                  <div className="my-assessments">
                                    20 Apr 23
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="dot-wrapper5">
                          <img
                            className="bar-chart-icon1"
                            alt=""
                            src="/3-dot1.svg"
                          />
                        </div>
                      </div>
                      <img
                        className="frame-child22"
                        alt=""
                        src="/vector-332.svg"
                      />
                      <div className="frame-parent68">
                        <div className="frame-parent69">
                          <div className="parent12">
                            <div className="my-assessment1">00</div>
                            <div className="duration7">Duration</div>
                          </div>
                          <div className="parent12">
                            <div className="my-assessment1">00</div>
                            <div className="duration7">Questions</div>
                          </div>
                        </div>
                        <div className="frame-parent76">
                          <div className="link-parent5">
                            <PiLinkSimpleBold className="link-icon7" />
                            <div className="share7">Share</div>
                          </div>
                          <div className="frame-parent77">
                            <div className="frame-parent78">
                              <div className="lp-wrapper17">
                                <b className="lp18">LP</b>
                              </div>
                              <div className="lp-wrapper18">
                                <b className="lp18">LP</b>
                              </div>
                              <div className="lp-wrapper19">
                                <b className="lp18">LP</b>
                              </div>
                            </div>
                            <div className="div24">+324</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-parent65">
                      <div className="frame-parent66">
                        <div className="frame-parent58">
                          <div className="frame-bag-child20">
                            <BsBagCheck className="frame-child20" />
                          </div>
                          <div className="math-assessment-parent5">
                            <div className="my-assessment1">
                              Math Assessment
                            </div>
                            <div className="job-parent5">
                              <div className="job7">Job</div>
                              <img
                                className="frame-child21"
                                alt=""
                                src="/vector-333.svg"
                              />
                              <div className="frame-wrapper9">
                                <div className="schedule-parent5">
                                  <BsClock className="schedule-icon7" />
                                  <div className="my-assessments">
                                    20 Apr 23
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="dot-wrapper5">
                          <img
                            className="bar-chart-icon1"
                            alt=""
                            src="/3-dot1.svg"
                          />
                        </div>
                      </div>
                      <img
                        className="frame-child22"
                        alt=""
                        src="/vector-332.svg"
                      />
                      <div className="frame-parent68">
                        <div className="frame-parent69">
                          <div className="parent12">
                            <div className="my-assessment1">00</div>
                            <div className="duration7">Duration</div>
                          </div>
                          <div className="parent12">
                            <div className="my-assessment1">00</div>
                            <div className="duration7">Questions</div>
                          </div>
                        </div>
                        <div className="frame-parent76">
                          <div className="link-parent5">
                            <PiLinkSimpleBold className="link-icon7" />
                            <div className="share7">Share</div>
                          </div>
                          <div className="frame-parent77">
                            <div className="frame-parent78">
                              <div className="lp-wrapper17">
                                <b className="lp18">LP</b>
                              </div>
                              <div className="lp-wrapper18">
                                <b className="lp18">LP</b>
                              </div>
                              <div className="lp-wrapper19">
                                <b className="lp18">LP</b>
                              </div>
                            </div>
                            <div className="div24">+324</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-parent65">
                      <div className="frame-parent66">
                        <div className="frame-parent58">
                          <div className="frame-bag-child20">
                            <BsBagCheck className="frame-child20" />
                          </div>
                          <div className="math-assessment-parent5">
                            <div className="my-assessment1">
                              Math Assessment
                            </div>
                            <div className="job-parent5">
                              <div className="job7">Job</div>
                              <img
                                className="frame-child21"
                                alt=""
                                src="/vector-333.svg"
                              />
                              <div className="frame-wrapper9">
                                <div className="schedule-parent5">
                                  <BsClock className="schedule-icon7" />
                                  <div className="my-assessments">
                                    20 Apr 23
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="dot-wrapper5">
                          <img
                            className="bar-chart-icon1"
                            alt=""
                            src="/3-dot1.svg"
                          />
                        </div>
                      </div>
                      <img
                        className="frame-child22"
                        alt=""
                        src="/vector-332.svg"
                      />
                      <div className="frame-parent68">
                        <div className="frame-parent69">
                          <div className="parent12">
                            <div className="my-assessment1">00</div>
                            <div className="duration7">Duration</div>
                          </div>
                          <div className="parent12">
                            <div className="my-assessment1">00</div>
                            <div className="duration7">Questions</div>
                          </div>
                        </div>
                        <div className="frame-parent76">
                          <div className="link-parent5">
                            <PiLinkSimpleBold className="link-icon7" />
                            <div className="share7">Share</div>
                          </div>
                          <div className="frame-parent77">
                            <div className="frame-parent78">
                              <div className="lp-wrapper17">
                                <b className="lp18">LP</b>
                              </div>
                              <div className="lp-wrapper18">
                                <b className="lp18">LP</b>
                              </div>
                              <div className="lp-wrapper19">
                                <b className="lp18">LP</b>
                              </div>
                            </div>
                            <div className="div24">+324</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="frame-parent65">
                      <div className="frame-parent66">
                        <div className="frame-parent58">
                          <div className="frame-bag-child20">
                            <BsBagCheck className="frame-child20" />
                          </div>
                          <div className="math-assessment-parent5">
                            <div className="my-assessment1">
                              Math Assessment
                            </div>
                            <div className="job-parent5">
                              <div className="job7">Job</div>
                              <img
                                className="frame-child21"
                                alt=""
                                src="/vector-333.svg"
                              />
                              <div className="frame-wrapper9">
                                <div className="schedule-parent5">
                                  <BsClock className="schedule-icon7" />
                                  <div className="my-assessments">
                                    20 Apr 23
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="dot-wrapper5">
                          <img
                            className="bar-chart-icon1"
                            alt=""
                            src="/3-dot1.svg"
                          />
                        </div>
                      </div>
                      <img
                        className="frame-child22"
                        alt=""
                        src="/vector-332.svg"
                      />
                      <div className="frame-parent68">
                        <div className="frame-parent69">
                          <div className="parent12">
                            <div className="my-assessment1">00</div>
                            <div className="duration7">Duration</div>
                          </div>
                          <div className="parent12">
                            <div className="my-assessment1">00</div>
                            <div className="duration7">Questions</div>
                          </div>
                        </div>
                        <div className="frame-parent76">
                          <div className="link-parent5">
                            <PiLinkSimpleBold className="link-icon7" />
                            <div className="share7">Share</div>
                          </div>
                          <div className="frame-parent77">
                            <div className="frame-parent78">
                              <div className="lp-wrapper17">
                                <b className="lp18">LP</b>
                              </div>
                              <div className="lp-wrapper19">
                                <b className="lp18">LP</b>
                              </div>
                            </div>
                            <div className="div24">+32,4090</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="add-frame">
            <PiPlusBold className="add-icon1" />
          </div>
          <div className="status-bar-group">
            <div className="status-bar1">
              <img className="icon1" alt="" src="/941.svg" />
              <div className="frame1">
                <img className="vector-icon3" alt="" src="/vector3.svg" />
                <img className="vector-icon4" alt="" src="/vector4.svg" />
              </div>
            </div>
            <div className="frame-parent57">
              <div className="frame-parent58">
                <div className="segment-wrapper" onClick={handleShow}>
                  <MdSegment className="segment-icon" />
                </div>
                <div className="assessment">Assessment</div>
              </div>
              <div className="laptop-mac-wrapper" onClick={handleDesktop}>
                <BiLaptop className="laptop-mac-icon" />
              </div>
            </div>
            <div className="frame-wrapper8">
              <div className="frame-parent59">
                <div className="my-assessments-wrapper">
                  <div className="my-assessments">My Assessments</div>
                </div>
                <div className="unstop-assessments-wrapper">
                  <div className="my-assessments">Unstop Assessments</div>
                </div>
              </div>
            </div>
          </div>
          {isOpen && (
            <div className="openModal-frame">
              <SubSection closeModal={closeModal} />
            </div>
          )}
        </div>
        </div>
      ) : (
        <AssesmentDesktop />
      )}

      {showSidebar && (
        <div className="openSideBar">
          <Sidebar onClose={closeSide} />
        </div>
      )}
    </>
  );
};

export default AssesmentMobile;
