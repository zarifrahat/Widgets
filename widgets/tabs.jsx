import React from 'react';
import Header from "./header";



class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {selectedTabIndex: 0}
        this.selectedIndex = this.selectedIndex.bind(this);
    };

    selectedIndex(idx) {
        // e.preventDefault();

        this.setState({
            selectedTabIndex: {idx}
        })
    };



    render() {
        // console.log(this.props.array)
        const allTabs = this.props.array.map((tab, index) => {
            // console.log(tab)
            // console.log(index)
            return (
                <Header
                    sentTab={tab}
                    key={index}
                    selectedIndex={this.selectedIndex}
                />

                )
            
        });            

        // console.log(allTabs);

        return (
            
            <ul>
                {allTabs}
            </ul>
        )
    }
}





export default Tabs;