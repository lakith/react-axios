import React,{Component} from 'react'

const asyncComponent = (importentComponent) =>{

    return class extends Component {


        state ={
            component : null
        }

        componentDidMount(){
            importentComponent()
                .then((cmp)=>{
                    this.setState({component:cmp.default});
                })
        }

        render() {

            const C = this.state.component;

            return C ? <C {...this.props}/>: null;
        }d
    }

}

export default asyncComponent;