import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';


export default function Login() {
    const responseFacebook = (response) => {
        console.log("Log in result here:" + response)
        navigate('/budget')
    }
    const componentClicked = (data) => {
        console.log("here is data:" + data)
    }
    const responseGoogle = (response) => {
        console.log("Here is Gooogle response data:"+response)
        navigate('/budget')
      }
    
    const navigate = useNavigate()
    //states for inputs
    const [uname, setUname] = useState('')
    const [email, setEmail] = useState('')
    const [pwd, setpwd] = useState('')
    const [state, setState] = useState([])

    //states for errror display
    const [uerr, setUerr] = useState(false)
    const [emailerr, setEmailerr] = useState(false)

    // async function validate(e)
    // {
    //     e.preventDefault()
    //     var item={uname,email,pwd}
    //     var result=await fetch('http://localhost:4001/record',{
    //         method:'GET',
    // headers:{
    //     'Accept':'application/json',
    //     'content-type':'application/json'
    //         },
    // body:JSON.stringify(item)
    //     });
    //     result = await result.json();
    //     localStorage.setItem('user-info',JSON.stringify(result))
    //     console.log("here is the result of log in"+result)
    //     alert("log in successfull");

    // }
    // useEffect(() => {
    //     axios.get('http://localhost:4001/record').then(resp => {
    //       //console.log(JSON.stringify(resp))
    //       console.log("here is original response"+resp)
    //       const temp=resp.data
    //       console.log("Here is the COnsole"+resp.data)
    //       setState([resp])
    //       console.log("here is the exact resposnse"+state)
    //     }).catch(err => {
    //       console.log(err)
    //     })
    //   }, [])
    useEffect(() => {
        axios.get('http://localhost:4001/record').then(resp => {
            console.log(resp)
            setState(resp.data)
            console.log(state)
        }).catch(err => {
            console.log(err)
        })
    },[])



    function validate(e) {
        e.preventDefault()
        console.log("email" + email)
        console.log("uname" + uname)
        console.log("pass" + pwd)

        state.forEach(el => {
            if (el.email === email && el.uname === uname) {
                if (el.password === pwd) {
                    alert("log in suceessfull")
                    navigate('/budget')
                } else {
                    alert("invalid credentials")
                }
            }
        })
        // const temp = state.filter(key =>  key.uname === uname && key.email === email )
        // console.log(temp)

        // if(temp.length>0)
        // {
        //     console.log("temp"+temp[0])
        //     if(temp[0].pwd===pwd)
        //     {
        //         alert("log in suceessfull")
        //         console.log(pwd)

        //             navigate('/budget')
        //     }
        //     else{
        //          //alert("invalid credentials")
        //          console.log(pwd)
        //     }
        // }

        // state.map(key =>{
        //     console.log("here is the exact resposnse"+state.uname)
        //     if(key.uname===uname)
        //     {
        //         if(key.email===email)
        //         {
        //             if(key.password===pwd)
        //             {
        //                 alert("log in suceessfull")
        //                 navigate('/budget')
        //             }
        //         }
        //     }
        //     else
        //     {
        //         //alert("invalid credentials")
        //     }
        // })

        //navigate('/budget')

    }




    return (
        <>
            <div className="App">
                <h1>This is login page</h1>
            </div>
            <div style={{ widht: "60%", marginLeft: "15%", marginRight: "15%" }}>
                <Form onSubmit={validate}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>User Name:</Form.Label>
                        <Form.Control type="text" placeholder="Enter User Name..." onChange={(e) => {
                            setUname(e.target.value)
                            if(uname.length<8)
                        {
                            setUerr(false)
                        }
                        else
                        {
                            setUerr(true)
                        }

    
                        }} />
                        {
                            uerr ? <Form.Text className="text-muted">
                                <span style={{ color: "red" }}> you cannot use more than 8 letters as a username....!! </span>
                            </Form.Text> : null
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => {
                            setEmail(e.target.value)
                            if (!email.includes("@")) {
                                setEmailerr(true)
                            }
                            else {
                                setEmailerr(false)
                            }


                        }} />
                        {
                            emailerr ? <Form.Text className="text-muted">
                                <span style={{ color: "red" }}> Enter Proper email include @..!! </span>
                            </Form.Text> : null
                        }
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => {
                            setpwd(e.target.value)
                        }} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>

                    {/* <SocialButton /> */}

                </Form>
                <div className="App" style={{ marginTop: "30px" }}>
                    <FacebookLogin
                        appId="1119805995512513"
                        autoLoad={true}
                        fields="name,email,picture"
                        onClick={componentClicked}
                        callback={responseFacebook} />
                </div>
                <div className="App" style={{ marginTop: "10px" }}>
                    <GoogleLogin 
                        clientId="549841564156-qibnmoc418bj0ndrdv4fia6ne7vmbufq.apps.googleusercontent.com"
                        buttonText="Log In from google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>
            </div>
        </>
    )
}
