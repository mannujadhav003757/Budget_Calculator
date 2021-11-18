import React from 'react'
import { InputGroup, FormControl,Button,ListGroup } from 'react-bootstrap'
import { useState } from 'react'

export default function Budget() {

const [budget,setBudget]=useState('')
const [expense,setExpense]=useState('')
const[amount,setAmount]=useState('')
const [balance,setBalance]=useState()


const[items,setItems]=useState([])
const[items1,setItems1]=useState([])


console.log(budget,expense,amount)
var budget1=Number(budget)
var amount1=Number(items)
var totExpense=items.reduce((a, b) => a + b, 0)
console.log("totexpense"+totExpense)

function AddItem()
{
setItems1((oldItems1)=>{
        return [...oldItems1,expense]
    })
setItems((oldItems)=>{
    return [...oldItems,Number(amount)]
})
}

function calculate(bal)
{
    setBalance(budget1-totExpense)
}





    return (
        <>
            <div className="container" style={{background:"lightgray"}}>
                <h1> BUDGET APP</h1>
            </div>
            <div className="container" style={{ border: "solid black", background:"lightgray" }}>
                <div className="row">
                    <div className="col-sm-5" style={{ border: "solid green",marginTop:"10px",marginBottom:"10px",marginLeft:"10px"}}>
                        <h4 style={{marginTop:"10px"}}>Please Enter Your Budget</h4>
                        <InputGroup className="mb-3">

                            <FormControl
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                onChange={(e)=>setBudget(e.target.value)}
                            />
                        </InputGroup>
                        <Button variant="light" style={{border:"solid  green" , marginBottom:"15px", marginTop:"10px"}} onClick={calculate}>Calculate</Button>

                    </div>
                    <div className="col-sm-2" style={{border:"solid thin blue"  ,marginTop:"10px",marginBottom:"10px", marginLeft:"20px"}}>
                        <h4 style={{marginLeft:"25px"}}>BUDGET</h4>
                        <img src="./img/money.png" style={{marginLeft:"35px"}} alt="money image"/>
                        <h3 style={{marginLeft:"25px",marginTop:"10px"}}>{budget}</h3>
                        
                        

                    </div>
                    <div className="col-sm-2" style={{border:"solid thin blue"  ,marginTop:"10px",marginBottom:"10px", marginLeft:"20px"}}>
                        <h4 style={{marginLeft:"25px"}}>EXPENSES</h4>
                        <img src="./img/credit-card.png" style={{marginLeft:"35px"}} alt="money image"/>
                        <h3 style={{marginLeft:"25px",marginTop:"10px"}}>{totExpense}</h3>
                        
                    </div>
                    <div className="col-sm-2" style={{border:"solid thin blue"  ,marginTop:"10px",marginBottom:"10px",marginLeft:"20px"}}>
                        <h4 style={{marginLeft:"25px"}}>BALANCE</h4>
                        <img src="./img/rupee-indian.png" style={{marginLeft:"35px"}} alt="money image"/>
                        <h3 style={{marginLeft:"25px",marginTop:"10px"}}>{balance}</h3>
                        
                    </div>

                </div>
            </div>
            <div className="container" style={{marginTop:"10px",border:"solid black",background:"lightgray"}}>
                <div className="row" style={{marginTop:"10px"}}>
                    
                <div className="col-sm-4" style={{ border: "solid green",marginTop:"10px",marginBottom:"10px", marginLeft:"10px" }}>
                        <h4 style={{marginTop:"10px"}}>Please Enter Your Expense</h4>
                        <InputGroup className="mb-3">

                            <FormControl
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                onChange={(e)=>setExpense(e.target.value)}
                            />
                        </InputGroup>
                        

                        <h4 style={{marginTop:"10px"}}>Please Enter Your Expense Amount</h4>
                        <InputGroup className="mb-3">

                            <FormControl
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                                onChange={(e)=>setAmount(e.target.value)}
                            />
                        </InputGroup>
                        <Button variant="light" style={{border:"solid  green" , marginBottom:"15px", marginTop:"10px"}} onClick={AddItem}>Add Expense</Button>


                    </div>
                    <div className="col-sm-3" style={{border:"solid thin blue"  ,marginTop:"10px",marginBottom:"10px", marginLeft:"20px"}}>
                        <h4 style={{marginLeft:"25px"}}>EXPENSE TITLE</h4>
                        <ListGroup>
                            {
                            items1.map((itemval)=>{
                                return <ListGroup.Item>{itemval}</ListGroup.Item>
                            })
                        }
                        </ListGroup>
                        
                        
                        
                        
                    </div>
                    <div className="col-sm-4" style={{border:"solid thin blue"  ,marginTop:"10px",marginBottom:"10px", marginLeft:"20px"}}>
                        <h4 style={{marginLeft:"25px"}}>EXPENSE VALUE</h4>
                        <ListGroup>
                            {
                                items.map((itemVal)=>{
                                    return <ListGroup.Item style={{color:"red"}}>Rs.{itemVal}/- <span style={{marginLeft:"180px"}}><img src="./img/writing.png" /><img src="./img/bin.png" style={{marginLeft:"20px"}}/></span></ListGroup.Item>
                                })
                            }
                        </ListGroup>
                       
                        
                        
                        
                    </div>
                    
                    

                </div>
                </div>
        </>
    )
}
