import React from "react";
import {connect} from "react-redux";
import {closingPopUpAC, selectModuleAC} from "../../redux/course-reducer";

const PopUp = (props) => {

    if(props.selectCourseId) {

        let course;
        props.courses.forEach(item => {
            if(item.id === props.selectCourseId){
                course = item
            }
        })

        return <div className={props.isPopUp ? "pop-up active" : "pop-up"}>
        <span onClick={() => {
            props.closingPopUp()
        }
        } className={"icon"}> ✖ </span>
            <div className="title">{course.name}</div>
            <div className="card-items">
                {course.modules.map(module => {
                    let activeModuleId = module.id + "." + course.id;
                    return <div className={props.activeModuleId === activeModuleId
                        ? "card-item active"
                        : "card-item"}
                                key={module.id}
                                onClick={() => {props.selectModule(activeModuleId)}}>
                        <div className="item-title">{module.title}</div>
                        <div className="item-status">{module.status}</div>
                    </div>
                })}
            </div>
        </div>
    }

    return <div></div>
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectModule: (moduleId) =>{
            dispatch(selectModuleAC(moduleId))
        },
        closingPopUp: () => {
            dispatch(closingPopUpAC())
        }
    }
}

const mapStateToProps = (state) => {
    return {
        courses: state.coursePage.courses,
        selectCourseId: state.coursePage.selectedCourseId,
        activeModuleId: state.coursePage.activeModuleId,
        isPopUp: state.coursePage.isPopUp,
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(PopUp);