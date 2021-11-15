import React,{Component}  from 'react'
import './Calculator.css'
import Button from '../componets/Button'
import Display from '../componets/Display'



const stateInitial ={

    displayValue :'0',
    clearDisplay : false,
    operation : null,
    values :[0, 0],
    currentValue :0,

}
export default class Calculator extends Component {
    
     state = {...stateInitial}
    
    constructor(props){

        super(props)

        this.clearMemory = this.clearMemory.bind(this)
        this.addOperator = this.addOperator.bind(this)
        this.addDigit = this.addDigit.bind(this)

    } 

    addDigit(n){

        if (n === '.' && this.state.displayValue.includes('.')) {
            return
        }

        const clearDisplay = this.state.displayValue === '0'
            || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({ displayValue, clearDisplay: false })


    }

    addOperator(operation){ 
       
    
    
    }


    clearMemory(){

       this.setState({...stateInitial})

    }
    render(){
   
        return (
            <div className="calculator">
               <Display value={this.state.displayValue} />
              <Button label ="AC"click ={this.clearMemory} triple/>
              <Button label ="/" click ={this.addOperator} operation/>
              <Button label ="7" click ={this.addDigit}/>
              <Button label ="8" click ={this.addDigit}/>
              <Button label ="9" click ={this.addDigit}/>
              <Button label ="*" click ={this.addOperator} operation/>
              <Button label ="4" click ={this.addDigit}/>
              <Button label ="5" click ={this.addDigit}/>
              <Button label ="6" click ={this.addDigit}/>
              <Button label ="-" click ={this.addOperator} operation/>
              <Button label ="1" click ={this.addDigit}/>
              <Button label ="2" click ={this.addDigit}/>
              <Button label ="3" click ={this.addDigit}/>
              <Button label ="+" click ={this.addOperator} operation/>
              <Button label ="0" click ={this.addDigit} double/>
              <Button label ="." click ={this.addDigit}/>
              <Button label ="=" click ={this.addOperator} operation/>
            </div>
        )

    }   



}