import React, { Component } from "react";

// MetisMenu
import MetisMenu from "metismenujs";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
// import { AiOutlineFileSearch } from "react-icons/ai";
import { BiDesktop } from "react-icons/bi";
import { BsFillBagFill } from "react-icons/bs";
import { BsCardHeading, BsBarChartFill } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { GiAirBalloon } from "react-icons/gi";
import { FiSettings } from "react-icons/fi";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
//i18n
import { withNamespaces } from "react-i18next";

import { connect } from "react-redux";
import {
  changeLayout,
  changeLayoutWidth,
  changeSidebarTheme,
  changeSidebarType,
  changePreloader,
} from "../../store/actions";

class SidebarContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.initMenu();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      if (this.props.type !== prevProps.type) {
        this.initMenu();
      }
    }
  }

  initMenu() {
    new MetisMenu("#side-menu");

    var matchingMenuItem = null;
    var ul = document.getElementById("side-menu");
    var items = ul.getElementsByTagName("a");
    for (var i = 0; i < items.length; ++i) {
      if (this.props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      this.activateParentDropdown(matchingMenuItem);
    }
  }

  activateParentDropdown = (item) => {
    item.classList.add("active");
    const parent = item.parentElement;

    if (parent) {
      parent.classList.add("mm-active");
      const parent2 = parent.parentElement;

      if (parent2) {
        parent2.classList.add("mm-show");

        const parent3 = parent2.parentElement;

        if (parent3) {
          parent3.classList.add("mm-active"); // li
          parent3.childNodes[0].classList.add("mm-active"); //a
          const parent4 = parent3.parentElement;
          if (parent4) {
            parent4.classList.add("mm-active");
          }
        }
      }
      return false;
    }
    return false;
  };

  render() {
    return (
      <React.Fragment>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">{this.props.t("Menu")}</li>

            <li>
              <Link to="/dashboard" className="waves-effect">
                <strong className="me-2">
                  <BiDesktop></BiDesktop>
                </strong>
                <span className="badge rounded-pill bg-success float-end">
                  3
                </span>
                <span className="ms-1">{this.props.t("Dashboard")}</span>
              </Link>
            </li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <strong className="me-2">
                  <BsFillBagFill></BsFillBagFill>
                </strong>
                <span className="ms-1">{this.props.t("Job Pool")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/job-portal">{this.props.t("Job List")}</Link>
                </li>
                <li>
                  <Link to="#">{this.props.t("Create Job")}</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <strong className="me-2">
                  <BsCardHeading></BsCardHeading>
                </strong>
                <span className="ms-1">{this.props.t("Questionaries")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="#">{this.props.t("Questionaries List")}</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <strong className="me-2">
                  <FiUsers></FiUsers>
                </strong>
                <span className="ms-1">{this.props.t("Users")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/ecommerce-products">
                    {this.props.t("User List")}
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <strong className="me-2">
                  <GiAirBalloon></GiAirBalloon>
                </strong>
                <span className="ms-1">{this.props.t("Brands")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="#">{this.props.t("Brands List")}</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <strong className="me-2">
                  <BsBarChartFill></BsBarChartFill>
                </strong>
                <span className="ms-1">{this.props.t("Job Report")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="#">{this.props.t("Job Report List")}</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <strong className="me-2">
                  <MdOutlineSupervisorAccount></MdOutlineSupervisorAccount>
                </strong>
                <span className="ms-1">{this.props.t("Supervisors")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="#">{this.props.t("Supervisors List")}</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <strong className="me-2">
                  <FaHandsHelping></FaHandsHelping>
                </strong>
                <span className="ms-1">{this.props.t("Sponsers")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="#">{this.props.t("Sponsers List")}</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <strong className="me-2">
                  <FiSettings></FiSettings>
                </strong>
                <span className="ms-1">{this.props.t("Settings")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="#">{this.props.t("Settings")}</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

const mapStatetoProps = (state) => {
  return { ...state.Layout };
};

export default withRouter(
  connect(mapStatetoProps, {
    changeLayout,
    changeSidebarTheme,
    changeSidebarType,
    changeLayoutWidth,
    changePreloader,
  })(withNamespaces()(SidebarContent))
);
