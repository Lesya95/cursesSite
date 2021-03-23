import React from 'react';
import {Skeleton} from "./LoadingSkeleton";

const Loading = () => {
    let statusBlocks = ["", "", "", ""];
    return <div className="App">
        <header className="App-header">
            <div></div>
            <div className="total-items" >
                <Skeleton/>
            </div>
        </header>
        <div className="App-body">
            <div className="content">
                <div className="cards-wrapper active">
                    { statusBlocks.map((status, id) => {
                        return <div className="cards-block" key={id}>
                            <div className="status loadingStatus"><Skeleton/></div>
                            <div className="cards">
                                {["", "",].map((card, i) => {
                                    return <div className={"card"} key={i}>
                                        <div className="title loadingTitle"><Skeleton/></div>
                                        <div className="card-items">
                                            {["", "", "", ].map((module, index) => {
                                                return <div className={"loadingModule"} key={index}>
                                                    <div className="item-title loading-item-title"><Skeleton/></div>
                                                </div>
                                            })}
                                        </div>
                                    </div>
                                })}
                            </div>
                        </div>
                    })}

                </div>
            </div>
        </div>
    </div>
}

export default Loading;