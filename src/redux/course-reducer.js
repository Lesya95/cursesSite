const SELECT_CARD = 'SELECT_CARD';
const SELECT_MODULE = 'SELECT_MODULE';
const SELECT_MODULE_AND_CARD = 'SELECT_MODULE_AND_CARD';
const CLOSING_POP_UP = 'CLOSING_POP_UP';
const UPDATE_SEARCH_TEXT = 'UPDATE_SEARCH_TEXT';
const SET_COURSES_PAGE = 'SET_COURSES_PAGE';
const SET_IS_LOADING = 'SET_IS_LOADING';

let initialSate = {
    courses: [],
    isLoading: true,
    searchText: '',
    selectedCourseId: null,
    activeId: "",
    activeModuleId: null,
    isPopUp: false,
}

const courseReducer = (state = initialSate, action) => {

    switch (action.type) {
        case SET_COURSES_PAGE: {
            return {
                ...state,
                courses: action.data,
            }
        }
        case SET_IS_LOADING: {
            return {
                ...state,
                isLoading: action.data,
            }
        }
        case SELECT_CARD: {
            return {
                ...state,
                selectedCourseId: action.id,
                activeId: action.activeId,
                activeModuleId: null,
                isPopUp: true,
            }
        }
        case SELECT_MODULE_AND_CARD: {
            return {
                ...state,
                activeModuleId: action.moduleId,
                selectedCourseId: action.cardId,
                activeId: action.activeId,
                isPopUp: true,
            }
        }
        case SELECT_MODULE: {
            return {
                ...state,
                activeModuleId: action.moduleId,
                activeId: "",
            }
        }
        case CLOSING_POP_UP: {
            return {
                ...state,
                isPopUp: false,
            }
        }
        case UPDATE_SEARCH_TEXT: {
            return {
                ...state,
                searchText: action.text,
            }
        }

        default:
            return state;
    }

}

export const selectCardAC = (id, activeId) => ({type: SELECT_CARD, id, activeId,});
export const selectModuleAndCardAC = (moduleId, cardId, activeId) =>{
    return {type: SELECT_MODULE_AND_CARD, moduleId, cardId, activeId};
};
export const selectModuleAC = (moduleId) => ({type: SELECT_MODULE, moduleId});
export const closingPopUpAC = () => ({type: CLOSING_POP_UP});
export const updateSearchText = (text) => ({type: UPDATE_SEARCH_TEXT, text});
export const setCoursesPage = (data) => ({type: SET_COURSES_PAGE, data});
export const setIsLoading = (data) => ({type: SET_IS_LOADING, data});


export default courseReducer;