import React,{Component, useState}  from 'react'
import './Calculator.css'
import Button from '../componets/Button'
import Display from '../componets/Display'

    const stateInitial ={

        displayValue : 10,
        clearDisplay : false,
        operation : null,
        values :[0,0],
        current : 0 ,

    }

export default class Calculator extends Component {
    
    staffffte = {...stateInitial}

    addDigit(techs){


    }

    addOperator(operator){

        console.log(operator)
    }


    clearMemory(){

       this.setState({...stateInitial})

    }
    render(){

        return (
            <div className="calculator">
               <Display  value ={this.staffffte.displayValue}/> 
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