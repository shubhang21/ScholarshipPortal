import React from "react";

import "./button.css";
import CollapsibleTable from './table.jsx';

import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Input,
    Table
} from 'reactstrap';


const studentList = ({id}) => {
    return (
        /*--------------------------------------------------------------------------------*/
        /* Used In Dashboard-4 [General]                                                  */
        /*--------------------------------------------------------------------------------*/
        
        <Card>
            
        <CardBody>
            <div className="fontstyle">
                <div>
                    <CardTitle>STUDENT DETAILS {id}</CardTitle>
                    
                </div>
                
            </div>
            <CollapsibleTable />
          
              <p></p>           
            <input class='but' type="button" value="Submit"></input>
            
        </CardBody>
    </Card >
    );
}


export default studentList;
