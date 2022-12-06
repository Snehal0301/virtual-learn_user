import React from "react";
import "./MyCourse.css";
import { design } from "../../../utils/svgIcons";
import Ongoing from "./ongoing/Ongoing";
import { NavLink, Route, Routes } from "react-router-dom";
import Completed from "./completed/Completed";
import {
    useSelector, useDispatch
} from 'react-redux'
import OngoingOverview from './ongoing-overview/OngoingOverview'
import { mycoursetabToggleState } from "../../../redux/reducers/myCourseReducer";
const MyCourse = () => {
    const dispatch = useDispatch();
    const Categories = [
        "Design",
        "Development",
        "Business",
        "Finance",
        "Health & Fitness",
        "Music",
        "IT & Software",
        "Marketing",
        "Lifestyle",
        "Photography",
    ];
    const tabState = useSelector((state) => state.mycourse.tab)
    const mycoursetabState = useSelector((state) => state.mycourse.mycoursetab)
    return (
        <div className='mycourse'>
            <div className="breadcrumbs">
                <ul class="breadcrumb">
                    <li><a href="#">My Course</a></li>
                    <li><a href="#">Ongoing</a></li>
                    {
                        tabState === 2 &&
                        <li><a href="#">Learn Figma - UI/UX Design Essential Training</a></li>
                    }


                </ul>
            </div>

            <div className="mycourse-body">
                {/* Case if array length = 0 */}
                {/* <div className="mycourse-emptyImg-section">
                    <div className="mycourse-imgSection">{ }</div>
                    <div className="mycourse-imgText">
                        <p>What will you learn first?</p>
                    </div>
                    <div className="mycourse-Desc">
                        <p>Your courses will go here</p>
                    </div>

                </div>
                <div className="mycourse-categoriesSection">
                    <div className="categories-heading">
                        <p>Categories</p>
                    </div>
                    <div className="categories-eachCategories">
                        {Categories.map((ele, i) => {
                            return (
                                <div
                                    className="categoriesDisplay-parent categories-chipBorder"
                                    key={i}
                                >
                                    <div className="categoriesDisplay-Icons">{design}</div>
                                    <div className="categoriesDisplay-Names">{ele}</div>
                                </div>
                            );
                        })}
                    </div>
                </div> */}
                {/* --------------------------- */}
                
                {/* <div className="mycourse-tabs">
                    <div className={mycoursetabState === 1 ? "mycourse-tab-active" : "mycourse-tab"} onClick={() => dispatch(mycoursetabToggleState(1))}>Ongoing</div>
                    <div className={mycoursetabState === 2 ? "mycourse-tab-active" : "mycourse-tab"} onClick={() => dispatch(mycoursetabToggleState(2))}>Completed</div>
                </div>
                {
                    mycoursetabState === 1
                        ?
                        <Ongoing />
                        :
                        <Completed />
                } */}
                <OngoingOverview /> 
            </div>
        </div>
    );
};

export default MyCourse;
