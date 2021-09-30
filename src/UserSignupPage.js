import React from "react";

class UserSignupPage extends React.Component{
    state = {
        username: null,
        displayName: null
    };
    onChangeUsername = event=>{
        this.setState({
            username:event.target.value
        });
    }

    onChangeDisplayName = event =>{
        this.setState({
            displayName:event.target.value
        })
    }

    render(){
        return(
            <form>
                <h1>Sign Up</h1>        
                <div>
                    <label>Username</label>
                    <input onChange={this.onChangeUsername}></input>
                </div>
                <div>
                    <label>Display Name</label>
                    <input onChange={this.onChangeDisplayName}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password"></input>
                </div>
                <div>
                    <label>Password Repeat</label>
                    <input type="password"></input>
                </div>          
                <button>Sign Up</button>
            </form>        
        );
    }
}
export default UserSignupPage;