import React from "react";
class UserClass extends React.Component{

     constructor(props){
        super(props);
        this.state={
            count:0,
        };

        console.log(props);
     }

    render(){
        
        return <div className="user-card">
            <h1>count:{this.state.count}</h1>
        <h2>name:{this.props.name}</h2>
        <h3>contact:123@gmail.com</h3>
     </div>
    }
}
export default UserClass;