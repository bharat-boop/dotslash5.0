import React, { Component } from 'react'
import {useState} from 'react'
import './CSS/todo.css'


export const Form1 = () => {

const [username, setUserName] = useState("")
const [password, setPassword] = useState("")

const handleSubmit = (e) => {
            e.preventDefault();
            alert(`${username}  Login Successfully !!!!`)
            // console.log(this.state);
            // this.setState({
            //     Name: "",
            //     username: "",
            //     email: "",
            //     password: '',
                
            // })
            
        }


    return (
        <div style = {{justifyContent:'center'}}>
             
            <div style = {{ justifyContent:'center', width:'70vw', alignItems:'center'}}>

                <form onSubmit={e=>{handleSubmit(e)}} >
                    <h1>Login</h1>
                    <label>username :</label> <input type="text" value={username} onChange={e=>{setUserName(e.target.value)}} placeholder="username..." /><br />
                    <label>Password :</label> <input type="password" value={password} onChange={e=>{setPassword(e.target.value)}} placeholder="Password..." /><br />
                    
                    <input type="submit" value="Login" />
                </form>

            </div>
            
        
        </div>
    )
}



// class Form extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             Name: "",
//             username: "",
//             email: "",
//             password: "",


//         }
//         this.handleSubmit=this.handleSubmit.bind(this)
//     }

//     firsthandler = (e) => {
//         this.setState({
//             Name: e.target.value
//         })
//     }
//     userhandler = (e) => {
//         this.setState({
//             username: e.target.value
//         })
//     }
//     emailhandler = (e) => {
//         this.setState({
//             email: e.target.value
//         })
//     }

//     passwordhandler = (e) => {
//         this.setState({
//             password: e.target.value
//         })
//     }
    
//     handleSubmit = (e) => {
//         e.preDefault()
//         alert(`${this.state.Name} ${this.state.username}  Registered Successfully !!!!`)
//         console.log(this.state);
//         this.setState({
//             Name: "",
//             username: "",
//             email: "",
//             password: '',
            
//         })
        
//     }
    



// export default Form
