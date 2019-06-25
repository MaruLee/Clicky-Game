import React from "react";

class Card extends React.Component {
    state = {
        memeID: Math.floor(Math.random() * 57) + 1
    };

    passMemeID = () => {
        this.props.onMemeelect(this.state.memeID);
        this.setState({ memeID : Math.floor(Math.random() * 57) + 1 });
    };

    render() {
        return (
            <div className="card text-center" style={{ width:"25%", float:"left"}}>
                <div className="card-body">
                    <img style={{ width:"100%"}} 
                        src={"./images/"+this.state.memeID+".jpg"} 
                        data-memeid={this.state.memeID}
                        onClick = {this.passmemeID}
                    >                   
                    </img>
                </div>
            </div>
        );
    }
}

export default Card;


