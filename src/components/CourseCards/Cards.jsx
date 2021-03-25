import React from "react";

const Cards = ({courses, activeId, selectCard, status, selectModuleAndCard, activeModuleId}) => {

    let filterCourses = [];

    courses.forEach( item => {
        let course = {
            id: item.id,
            name: item.name,
            modules: [],
            activeId: item.id + status,
        }
        item.modules.forEach(module => {
            if(module.status === status) {
                course.modules.push({
                    id: module.id,
                    title: module.title,
                    status: module.status,
                })
            }
        })
        if(course.modules.length !== 0){
            filterCourses.push(course)
        }
    })
    return <div className="cards">
        {filterCourses.map(card => {
            return <div className={activeId === card.activeId ? "card active" : "card"}
                        key={card.id}
                        onClick={() => {selectCard(card.id, card.activeId)}}>
                <div className="title"> {card.name}</div>
                <div className="card-items">
                    {card.modules.map(module => {
                        return <div className={activeModuleId === (module.id + "." + card.id)
                            ? "card-item active"
                            : "card-item"} key={module.id}
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        selectModuleAndCard((module.id + "." + card.id), card.id, card.activeId)
                                    }}>
                            <div className="item-title">{module.title}</div>
                        </div>
                    })}
                </div>
            </div>
        })}
    </div>

}

export default Cards;