import React from "react"
import Tabs from "./tabs"

class Header extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        // console.log(props);
        this.state = {
            title: this.props.sentTab.title,
            content: this.props.sentTab.content,
            index: this.props.sentTab.index
        }

        // props = {{title: "", content: ""}, indexedDB, selectedIndex}
    }


    render() {
        return (
            <li onClick={this.props.selectedIndex(this.state.index)}>
                <h1>{this.state.title}</h1>
                <article>{this.state.content}</article>
            </li>
        )
    };
}

export default Header;