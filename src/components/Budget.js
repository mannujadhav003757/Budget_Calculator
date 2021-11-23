import React from 'react'
import { InputGroup, FormControl, Button, ListGroup, Form } from 'react-bootstrap'
import { useState, useEffect } from 'react'

export default function Budget() {

    const [budget, setBudget] = useState(0)
    const [balance, setBalance] = useState(0)
    const [totalExpense, setTotalExpense] = useState(0)
    const [expense, setExpense] = useState('')
    const [amount, setAmount] = useState('')
    const [updateIndex, setUpdateIndex] = useState(0)
    const [isUpdate, setIsupdate] = useState(true)



    const expenseInput = React.useRef()
    const amountInput = React.useRef()
    const budgetInput = React.useRef()



    const [items, setItems] = useState([])

    useEffect(() => {
        let tempExpense = 0;

        items.forEach((el) => {
            tempExpense += Number(el.value)
        })
        setTotalExpense(tempExpense)


        let tempBalance = 0;

        items.forEach((el) => {
            tempBalance = tempBalance + Number(el.value)
        })

        setBalance(budget - tempBalance)
    })


    function AddItem(e) {

        e.preventDefault()

        setItems([
            ...items,
            {
                title: expense,
                value: Number(amount)
            }
        ]);
        expenseInput.current.value = ''
        amountInput.current.value = ''
    }

    function calculate() {
        setBudget(budgetInput.current.value)
        setBalance(budgetInput.current.value)
        budgetInput.current.value = ''
    }
    
    function deleteRecord(itemVal) {
        let filteredArray = items.filter(item => item !== itemVal)
        setItems(filteredArray);
        setBalance(balance + Number(itemVal.value))

    }
    function updateRecord(itemVal, index) {
        expenseInput.current.value = itemVal.title
        amountInput.current.value = itemVal.value
        setUpdateIndex(index)
        setIsupdate(false)
    }

    function updateItem() {
        items[updateIndex].title = expenseInput.current.value
        items[updateIndex].value = amountInput.current.value
        expenseInput.current.value = ''
        amountInput.current.value = ''
        setIsupdate(true)
    }
    return (
        <>
            <div className="container" style={{ background: "lightgray" }}>
                <h1> BUDGET APP</h1>
            </div>
            <div className="container" style={{ border: "solid black", background: "lightgray" }}>
                <div className="row">
                    <div className="col-sm-5" style={{ border: "solid green", marginTop: "10px", marginBottom: "10px", marginLeft: "10px" }}>

                        <h4 style={{ marginTop: "10px" }}>Please Enter Your Budget</h4>

                        <InputGroup className="mb-3">

                            <FormControl
                                aria-label="Default"
                                type="number"
                                aria-describedby="inputGroup-sizing-default"
                                ref={budgetInput}
                            />
                        </InputGroup>
                        <Button variant="light" style={{ border: "solid  green", marginBottom: "15px", marginTop: "10px" }} onClick={calculate}>Add Budget</Button>

                    </div>
                    <div className="col-sm-2" style={{ border: "solid thin blue", marginTop: "10px", marginBottom: "10px", marginLeft: "20px" }}>
                        <h4 style={{ marginLeft: "25px" }}>BUDGET</h4>
                        <img src="./img/money.png" style={{ marginLeft: "35px" }} alt="money image" />
                        <h3 style={{ marginLeft: "25px", marginTop: "10px" }}>{budget}</h3>



                    </div>
                    <div className="col-sm-2" style={{ border: "solid thin blue", marginTop: "10px", marginBottom: "10px", marginLeft: "20px" }}>
                        <h4 style={{ marginLeft: "25px" }}>EXPENSES</h4>
                        <img src="./img/credit-card.png" style={{ marginLeft: "35px" }} alt="money image" />
                        <h3 style={{ marginLeft: "25px", marginTop: "10px" }}>{totalExpense}</h3>

                    </div>
                    <div className="col-sm-2" style={{ border: "solid thin blue", marginTop: "10px", marginBottom: "10px", marginLeft: "20px" }}>
                        <h4 style={{ marginLeft: "25px" }}>BALANCE</h4>
                        <img src="./img/rupee-indian.png" style={{ marginLeft: "35px" }} alt="money image" />
                        <h3 style={{ marginLeft: "25px", marginTop: "10px" }}>{balance}</h3>

                    </div>

                </div>
            </div>
            <div className="container" style={{ marginTop: "10px", border: "solid black", background: "lightgray" }}>
                <div className="row" style={{ marginTop: "10px" }}>

                    <div className="col-sm-4" style={{ border: "solid green", marginTop: "10px", marginBottom: "10px", marginLeft: "10px" }}>
                        <h4 style={{ marginTop: "10px" }}>Please Enter Your Expense</h4>
                        <Form>
                            <InputGroup className="mb-3">

                                <FormControl
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    name={expense}
                                    onChange={(e) => setExpense(e.target.value)}
                                    ref={expenseInput}
                                />
                            </InputGroup>


                            <h4 style={{ marginTop: "10px" }}>Please Enter Your Expense Amount</h4>
                            <InputGroup className="mb-3">

                                <FormControl
                                    aria-label="Default"
                                    type="number"
                                    name={amount}
                                    aria-describedby="inputGroup-sizing-default"
                                    onChange={(e) => setAmount(e.target.value)}
                                    ref={amountInput}
                                />
                            </InputGroup>
                            {isUpdate ? <Button variant="light" style={{ border: "solid  green", marginBottom: "15px", marginTop: "10px" }} onClick={AddItem}>Add Expense</Button> :
                                <Button variant="light" style={{ border: "solid  green", marginBottom: "15px", marginTop: "10px" }} onClick={updateItem} >Update Expense</Button>}
                        </Form>

                    </div>


                    <div className="col-sm-7" style={{ border: "solid thin blue", marginTop: "10px", marginBottom: "10px", marginLeft: "20px" }}>
                        <h4 style={{ marginLeft: "25px" }}>EXPENSE VALUE</h4>
                        <ListGroup>
                            {
                                items.map((itemVal, index) => {
                                    return <ListGroup.Item style={{ color: "red" }}>{itemVal.title} - Rs.{itemVal.value}/- <span style={{ marginLeft: "180px" }}><img src="./img/writing.png" onClick={() => updateRecord(itemVal, index)} /><img src="./img/bin.png" style={{ marginLeft: "20px" }} onClick={() => deleteRecord(itemVal)} /></span></ListGroup.Item>
                                })
                            }
                        </ListGroup>





                    </div>



                </div>
            </div>
        </>
    )
}