import React from "react";
import Item from "../Item/Item";

export default class List2 extends React.Component {

    render() {

        return(
            <ol>
                <h2>
                 List 2
                </h2>

                {this.props.items.map(element => {
                    return <Item key={element.id} value={element.item}/>
                })}
            </ol>
        )
    }
}