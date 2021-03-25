export const getFilterCourses = (state) => {

    let courses = state.coursePage.courses;
    let searchTextToLowerCase = state.coursePage.searchText.toLowerCase();

    return courses.filter(course => {
        if(course.name.toLowerCase().includes(searchTextToLowerCase)){
            return true
        } else {
            return course.modules.some(module => {
                return module.title.toLowerCase().includes(searchTextToLowerCase)})
        }
    })
}