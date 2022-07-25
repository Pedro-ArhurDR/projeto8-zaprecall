import React from 'react'
import PG1 from "../PG1/PG1"
import PG2 from "../PG2/PG2"





export default function App(){

    const [visible, setVisible]=React.useState(false)

    return(
        <>
         { !visible?
            <PG1 setVisible={setVisible}/>
            :
            <PG2/>
         }
        </>
    )
}