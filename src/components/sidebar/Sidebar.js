import React from "react";
import { Link } from "react-router-dom";
import { MdAddAlert } from "react-icons/md";
import { FiRadio } from "react-icons/fi";
import { RiFlightTakeoffLine } from "react-icons/ri";
import { GoDiffModified, GoGitPullRequest } from "react-icons/go";
import { GiCancel, GiArrowFlights, GiRocketFlight } from "react-icons/gi";
import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaAccusoft,
  FaQuestionCircle,
} from "react-icons/fa";
import { BsCone, BsFillGridFill } from "react-icons/bs";
import { FcAcceptDatabase } from "react-icons/fc";



const Sidebar = () => {
  return (
    <div id="sidebar-wrapper">
      <ul className="sidebar-nav " style={{ height: "1030px" }}>
        <li>
          <Link to="/alerting">
            {" "}
            <MdAddAlert color="green" size="1.5rem" />
            &nbsp; &nbsp; &nbsp;Alerting
          </Link>
        </li>
        <li>
          <Link to="/radio_communication_failure">
            <FiRadio color="green" size="1.5rem" />
            &nbsp; &nbsp; &nbsp; Radio Comm Failure
          </Link>
        </li>

        <li>
          <Link to="/filed_flight_plan">
            <RiFlightTakeoffLine color="green" size="1.5rem" />
            &nbsp; &nbsp; &nbsp; Filed Flight Plan
          </Link>
        </li>
        <li>
          <Link to="/modification">
            <GoDiffModified color="green" size="1.5rem" />
            &nbsp; &nbsp; &nbsp; Modification
          </Link>
        </li>
        <li>
          <Link to="/cancellation">
            <GiCancel color="green" size="1.5rem" />
            &nbsp; &nbsp; &nbsp; Cancellation
          </Link>
        </li>
        <li>
          <Link to="/delay">
            <GoDiffModified color="green" size="1.5rem" />
            &nbsp; &nbsp; &nbsp; Delay
          </Link>
        </li>
        <li>
          <Link to="/departure">
            <FaPlaneDeparture color="green" size="1.5rem" />
            &nbsp; &nbsp; &nbsp; Departure
          </Link>
        </li>
        <li>
          <Link to="/arrival">
            <FaPlaneArrival color="green" size="1.5rem" />
            &nbsp; &nbsp; &nbsp; Arrival
          </Link>
        </li>

        <li>
          <Link to="/current_flight_plan">
            <GiArrowFlights color="green" size="1.5rem" />
            &nbsp; &nbsp; &nbsp; Current Flight Plan
          </Link>
        </li>
        <li>
          <Link to="/estimate">
            <FaQuestionCircle color="green" size="1.5rem" />
            &nbsp; &nbsp; &nbsp; Estimate
          </Link>
        </li>
        <li>
          <Link to="/coordination">
            <BsFillGridFill color="green" size="1.5rem" />
            &nbsp; &nbsp; &nbsp; Coordination
          </Link>
        </li>
        <li>
          <Link to="/acceptance">
            <FcAcceptDatabase color="green" size="1.5rem" />
            &nbsp; &nbsp; &nbsp; Acceptance
          </Link>
        </li>
        <li>
          <Link to="/logical_acknowledgement">
            <FaAccusoft color="green" size="1.5rem" />
            &nbsp; &nbsp; &nbsp; Logical Acknowledgement
          </Link>
        </li>

        <li>
          <Link to="/request_flight_plan">
            <GiRocketFlight color="green" size="1.5rem" />
            &nbsp; &nbsp; &nbsp; Request Flight Plan
          </Link>
        </li>
        <li>
          <Link to="/request_supplementary_flight_plan">
            <GoGitPullRequest color="green" size="1.5rem" />
            &nbsp; &nbsp; &nbsp; ReqSupplementaryFlight Plan
          </Link>
        </li>
        <li>
          <Link to="/supplementary_flight_plan">
            <BsCone color="green" size="1.5rem" />
            &nbsp; &nbsp; &nbsp; Supplementary Flight Plan
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
