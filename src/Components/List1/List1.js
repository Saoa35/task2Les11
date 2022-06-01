import React from "react";
import Item from "../Item/Item";

export default class List1 extends React.Component {

    shouldComponentUpdate(currProps, currState) {
        console.log(currProps, currState);

        return this.props.items.length !== currProps.items.length
    }

    render() {

        return(
            <ul>
                <h2>
                    List 1
                </h2>

                {this.props.items.map(element => {
                    return <Item key={element.id} value={element.item}/>
                })}
            </ul>
        )
    }
}