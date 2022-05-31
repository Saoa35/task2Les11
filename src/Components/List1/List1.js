import React from "react";
import Item from "../Item/Item";

export default class List1 extends React.Component {

    render() {

        return(
            <ul>
                List 1

                {this.props.items.map(element => {
                    return <Item key={element.id} value={element.item}/>
                })}
            </ul>
        )
    }
}