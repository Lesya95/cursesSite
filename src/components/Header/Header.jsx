import React from "react";
import {connect} from "react-redux";
import {updateSearchText} from "../../redux/course-reducer";

const Header = (props) => {
    let searchElement = React.createRef();

    const onChangeInputSearch = () => {
        let text = searchElement.current.value;
        props.updateSearchText(text);
    }

    return <header className="App-header">
        <input onChange={onChangeInputSearch}
               ref={searchElement}
               value={props.searchText}
               className="input" type="text" placeholder={"Search"}/>
               <div className="total-items">
                   <div>Total items</div>
                   <div>(83)</div>
               </div>
    </header>
}

const mapStateToProps = (state) => {
    return {
        searchText: state.coursePage.searchText
    }
}

export default connect(mapStateToProps, {updateSearchText})(Header);