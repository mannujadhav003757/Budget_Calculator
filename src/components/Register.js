import React from 'react'
import {Button,Form} from 'react-bootstrap'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

export default function Register() {
    const navigate=useNavigate()
    const [fname,setFname]=useState('')
    const [lname,setLname]=useState('')
    const [uname,setUname]=useState('')
    const [email,setEmail]=useState('')
    const [pwd,setPwd]=useState('')
    const [cpwd,setCpwd]=useState('')
    console.log(fname,lname,uname,email,pwd,cpwd)

    const[ferr,setFerr]=useState(false)
    const[lerr,setLerr]=useState(false)
    const[uerr,setUerr]=useState(false)
    const[emailerr,setEmailerr]=useState(false)
    const[pwderr,setpwdErr]=useState(false)
    const[cpwderr,setCpwderr]=useState(false)

    const handleSubmit=(e) =>{
        e.preventDefault()
        var data={fname,lname,uname,email,'password':pwd}
        fetch('http://localhost:4001/record',{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
         }).then((result) =>{
             console.warn("here is result"+result)
             alert("successfully registerd")
             navigate('/login')
             
         })
        

    }

    

    



    return (
        <>
            <div className="App">
                <h1>Register page</h1>
            </div>


            <div style={{widht:"60%",marginLeft:"15%",marginRight:"15%"}}>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control type="text" placeholder="Enter First name.."  onChange={e => {setFname(e.target.value)
                        if(fname.length<=3)
                        {
                            setFerr(true)
                        }
                        else{
                            setFerr(false)
                        }
                        }} />
                    { ferr?<Form.Text className="text-muted" varient="danger">
                           <span style={{color:"red"}}> Enter Proper Name....!! </span>
                        </Form.Text>:null

                    }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Last name.." onChange={(e)=>{setLname(e.target.value)
                        if(lname.length<=3)
                        {
                            setLerr(true)
                        }
                        else
                        {
                            setLerr(false)
                        }
                        
                        
                        }} />
                    { lerr? <Form.Text className="text-muted">
                        <span style={{color:"red"}}> Enter Proper Last name....!! </span>
                        </Form.Text>:null
                    }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>User Name:</Form.Label>
                        <Form.Control type="text" placeholder="Enter User Name.." onChange={(e)=>{
                            setUname(e.target.value)
                            if(uname.length<=6)
                        {
                            setUerr(false)
                        }
                        else
                        {
                            setUerr(true)
                        }

                            } }/>
                        { uerr ? <Form.Text className="text-muted">
                        <span style={{color:"red"}}> you cannot use more than 6 letters as a username....!! </span>
                        </Form.Text>:null
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Email.." onChange={(e)=>{setEmail(e.target.value)
                         if(!email.includes("@"))
                         {
                             setEmailerr(true)
                         }
                         else
                         {
                             setEmailerr(false)
                         }
                        
                        
                        }}/>
                        { emailerr ?<Form.Text className="text-muted">
                        <span style={{color:"red"}}> Enter Proper email include @..!! </span>
                        </Form.Text> :null 
                        }
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e)=>{setPwd(e.target.value)
                        if(pwd.length>4)
                        {
                            setpwdErr(false)
                        }
                        else
                        {
                            setpwdErr(true)
                        }
                        
                        
                        }} />
                        { pwderr ?<Form.Text className="text-muted">
                        <span style={{color:"red"}}>Password have more than 4 characters..!!</span>
                        </Form.Text> :null 
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" onChange={(e)=>{setCpwd(e.target.value)
                        if(pwd.localeCompare(cpwd))
                        {
                            setCpwderr(false)
                        }
                        else
                        {
                            setCpwderr(true)
                        }
                        }} />

                    { cpwderr ?<Form.Text className="text-muted">
                        <span style={{color:"red"}}>Password does not matched..!!</span>
                        </Form.Text> :null 
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>







        </>
    )
}
