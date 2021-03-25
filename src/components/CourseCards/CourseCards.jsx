import React from "react";
import Cards from "./Cards";
import {connect} from "react-redux";
import {selectCard, selectModule, selectModuleAndCard} from "../../redux/course-reducer";
import {getFilterCourses} from "../../redux/curses-selectors";

const CourseCards = (props) => {
    let courses = props.courses;
    let array = [];
    courses.forEach( i => {
        i.modules.forEach(item => {
            array.push(item.status)
        })
    });
    function unique(arr) {
        let result = [];
        for (let str of arr) {
            if (!result.includes(str)) {
                result.push(str);
            }
        }
        return result;
    }

    let statusBlocks = unique(array);

    return <div className={props.isPopUp ? "cards-wrapper" : "cards-wrapper active"}>
        { statusBlocks.map(status => {
            return <div className="cards-block" key={status}>
                <div className="status">{status}</div>
                <Cards status={status} {...props}/>
            </div>
        })}
    </div>
}

const mapStateToProps = (state) => {
    return {
        courses: getFilterCourses(state),
        selectCourseId: state.coursePage.selectedCourseId,
        activeId: state.coursePage.activeId,
        activeModuleId: state.coursePage.activeModuleId,
        isPopUp: state.coursePage.isPopUp,
    }
}

export default connect(mapStateToProps,
    {selectCard, selectModuleAndCard,
        selectModule})(CourseCards);