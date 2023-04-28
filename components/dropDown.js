import React, {Component} from 'react';
import getTopic from '../pages/api/createText';

export class DropDown extends Component{
    state = {
        selection:""
    };

    handleChange=(e)=>{
        this.setState({
            selection: e.target.value
        })
        getTopic(e.target.value);

    }
    render(){
        return(
            <div>
                <form>
                    <input type="radio" value="friendship" id="friendship"
                    onChange={this.handleChange} name="selection"/>
                    <label for="friendship">Friendship</label>
                </form>
                <form>
                    <input type="radio" value="death" id="death"
                    onChange={this.handleChange} name="selection"/>
                    <label for="death">Death</label>
                </form>
                <form>
                    <input type="radio" value="breakup" id="breakup"
                    onChange={this.handleChange} name="selection"/>
                    <label for="breakup">Breakup</label>
                </form>
                <p>You selected: {this.state.selection}</p>
            </div>
        )
    }
}