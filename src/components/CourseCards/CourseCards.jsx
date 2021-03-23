import React from "react";
import Cards from "./Cards";
import {connect} from "react-redux";
import {selectCardAC, selectModuleAC, selectModuleAndCardAC} from "../../redux/course-reducer";

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
                <Cards status={status} courses={props.courses}
                       selectCard={props.selectCard}
                       selectCourseId={props.selectCourseId}
                       activeId={props.activeId}
                       selectModuleAndCard={props.selectModuleAndCard}
                       activeModuleId={props.activeModuleId}
                    {...props}
                />
            </div>
        })}

    </div>
}

const mapStateToProps = (state) => {
    let courses = state.coursePage.courses;
    let searchTextToLowerCase = state.coursePage.searchText.toLowerCase()

    return {
        courses: courses.filter(course => {
            if(course.name.toLowerCase().includes(searchTextToLowerCase)){
                return true
            } else {
            return course.modules.some(module => {
                return module.title.toLowerCase().includes(searchTextToLowerCase)})
            }

        }),
        selectCourseId: state.coursePage.selectedCourseId,
        activeId: state.coursePage.activeId,
        activeModuleId: state.coursePage.activeModuleId,
        isPopUp: state.coursePage.isPopUp,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectCard: (cardId, activeId) => {
            dispatch(selectCardAC(cardId, activeId))
        },
        selectModuleAndCard: (moduleId, cardId, activeId) =>{
            dispatch(selectModuleAndCardAC(moduleId, cardId, activeId))
        },
        selectModule: (moduleId) =>{
            dispatch(selectModuleAC(moduleId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseCards);