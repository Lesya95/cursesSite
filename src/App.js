import './App.css';
import CourseCards from "./components/CourseCards/CourseCards";
import PopUp from "./components/PopUp/PopUp";
import Header from "./components/Header/Header";
import React, { useEffect} from "react";
import {connect} from "react-redux";
import dataCourses from "./data.json"
import {setCoursesPage, setIsLoading} from "./redux/course-reducer";
import Loading from "./components/LoadingSkeleton/Loading";

function App(props) {

    useEffect(() => {

        const fetchData = async () => {
            try {
                setTimeout(() => {
                    props.setCoursesPage(dataCourses.courses)
                    props.setIsLoading(false);
                },2000);

            } catch (error) {

            }
        }
        if(props.courses.length === 0){
            fetchData();
        };

    }, [])

    if(props.isLoading){
        return <Loading/>
    }

    return (
        <div className="App">
            <Header/>
            <div className="App-body">
                <div className="content">
                    <CourseCards/>
                    <PopUp/>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        courses: state.coursePage.courses,
        isLoading: state.coursePage.isLoading,
    }
}

export default connect(mapStateToProps, {setIsLoading, setCoursesPage})(App);
