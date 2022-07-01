
import React,{useState} from "react";
import "../CSS/Add.css";

//defining state
function AddItems(props){
    console.log(props);
    const [amount, setAmount] = useState("");
    const [item, setItem] = useState("");
    const [transactionType, setTransaction] = useState("");

    const add= (()=>{
      console.log(item)
      console.log(amount)
      console.log(transactionType)

        props.add(amount, item, transactionType);
    })

    return (
        <div className="container">
            <h1 style={{paddingtop:"10px"}}>Add Transaction</h1>
            <input placeholder="Enter Items" onChange={(e) => setItem(e.target.value)}/><br></br>
            <input placeholder="Enter Amount" onChange={(e) => setAmount(e.target.value)}/><br></br>

            <select onChange={(e) => setTransaction(e.target.value)}>
                <option value="Income">Income</option>
                <option value="Expense">Expenses</option>
                
            </select>
            <br></br>
             
            <button id="btn" onClick={add}>Add</button>
        </div>  
     )
}

export default AddItems;