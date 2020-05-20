import React from "react"
import Clock from "./clock"
import Tabs from "./tabs"
import Header from "./header"

export const Root = () => {
    const propsArr = [{ title: 'one', content: "I am the first" , index: 0 },
    { title: "two", content: "Second pane here", index: 1 },
    { title: "three", content: "Third pane here", index: 2 }]

    return (
        <div>
            <Clock />
            <Tabs 
                array = {propsArr}
            />
            <Header />
           
        </div>
    )

}

