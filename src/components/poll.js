import React, { Component } from 'react';

const URL_TEAMS ='http://localhost:3004/teams';

class Poll extends Component{
    constructor(props){
        super(props);

        this.state={
            pollteams:''
        }
    }

    fetchPoll(){
        fetch(`${URL_TEAMS}?poll=true&_sort=count&_order=desc`,{
            method:'GET'
        }).then(res => res.json())
        .then(json =>{
           console.log(json);
           
            this.setState({
                pollteams:json
            })
        })
    }

    componentDidMount(){
        this.fetchPoll()
    }
    renderPoll(){
        
    }
    render(){
        return(
            <div className="home_poll">
                <h3>Who will be the next champion?</h3>
                    <div className="poll_container">
                        {this.renderPoll}
                    </div>
            </div>
        )
    }
}

export default Poll;

