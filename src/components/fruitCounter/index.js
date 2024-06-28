import { Component } from "react";
import './index.css'
class FruitCounter extends Component{

    state = {mangoesCount:0, bananaCount:0}


    eatMango = () =>{
        // const {mangoesCount} = this.state
        this.setState(prevState =>({mangoesCount: prevState.mangoesCount + 1}))
    }

    eatBanana = () =>{
        this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
    }

    render(){
        const {mangoesCount} = this.state
        const {bananaCount} = this.state

        return(
            
            <div className="card">
            <h1>Bob ate <span>{mangoesCount}</span> mangoes <span>{bananaCount}</span> Bananas</h1>
                <div className="fruitsContainer">
                    
                    <div className="fruitContainer">
                        <img src="https://assets.ccbp.in/frontend/react-js/mango-img.png" alt="Img"/>
                        <button type="button" onClick={this.eatMango}>Eat Mango</button>
                    </div>
                    <div className="fruitContainer">
                        <img src="https://assets.ccbp.in/frontend/react-js/banana-img.png" alt="" />
                        <button type="button" onClick={this.eatBanana}>Eate Banana</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default FruitCounter