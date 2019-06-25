import React from "react";
import Card from "../Card"

class CardContainer extends React.Component {
    state = {
        currentScore: 0,
        statusMessage: "",
        highScore: 0,
        memeArray: []
    };

    handleClick = (id) => {
        let gameLost = false;
        for (let i=0; i < this.state.memeArray.length; i++){
            if (id === this.state.memeArray[i])
            {
                gameLost = true;
            }
        }
        if (gameLost === true){
            if (this.state.highScore < this.state.currentScore){
                this.setState({ highScore : this.state.currentScore});
            }
            this.setState({ statusMessage : "Sorry, you lost!" });
            this.setState({ memeArray: [] });
            this.setState({ currentScore : 0 });
        }
        else{
            var newArray = this.state.memeArray.slice();    
            newArray.push(id);   
            this.setState({ memeArray:newArray });
            this.setState({ statusMessage : "Nice!" });
            this.setState({ currentScore : this.state.currentScore + 1 });
        }
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <p className="col-4">Current Score: {this.state.currentScore}</p>
                    <p className="col-4">{this.state.statusMessage} </p>
                    <p className="col-4">High Score: {this.state.highScore}</p>
                </div>
                <div className="">
                    <Card onMemeSelect={this.handleClick}/>
                    <Card onMemeSelect={this.handleClick}/>
                    <Card onMemeSelect={this.handleClick}/>
                    <Card onMemeSelect={this.handleClick}/>
                    <Card onMemeSelect={this.handleClick}/>
                    <Card onMemeSelect={this.handleClick}/>
                    <Card onMemeSelect={this.handleClick}/>
                    <Card onMemeSelect={this.handleClick}/>
                    <Card onMemeSelect={this.handleClick}/>
                    <Card onMemeSelect={this.handleClick}/>
                    <Card onMemeSelect={this.handleClick}/>
                    <Card onMemeSelect={this.handleClick}/>
                </div>
                
            </div>
        );
    }
}

export default CardContainer;
