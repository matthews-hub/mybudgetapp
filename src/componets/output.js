import React from "react";
import '../CSS/OutPut.css'

function OutPut(props){

    return(
        
        <div className="container">
        {props.list.map((item) =>(
                <div key={item.id}>

                    {item.transactionType == "Expense" ?(
                    <div className="transaction-item">
                     
                            <div id="amount">
                                <h3 style={{paddingleft:"12px", paddingTop:'25px'}}>{item.amount}</h3>
                            </div>
                            <div>
                                <h3 style={{paddingLeft:'290px', paddingTop:'25px'}}>{item.item}</h3>
                            </div>
                            <div className="expense-line"></div>
                        
                    </div> 
                )  :   (

                     <div className="transaction-item">
                            <div>
                                <h3 style={{paddingleft:"12px", paddingTop:'25px'}}>{item.amount}</h3>
                            </div>
                        
                            <div>
                                <h3 style={{paddingLeft:"290px", paddingTop:'25px'}}>{item.item}</h3>
                            </div>
                            <div className="income-line"></div>
                     </div>
                )
                }  
                </div>
            ))}
        </div>
    )   
}

export default OutPut;