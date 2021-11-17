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
    

        if(n !== '.'){  // Logica calculadora 

        const i = this.state.currentValue // armazeno o valor que está sendo digitado no momento
        const newValue = parseFloat(displayValue)    // converto para float
        const values=[...this.state.values]  // Clono o Array 
        values[i] = newValue // add o valor digitado no momneto em um indice denyto do array values
        this.setState({values}) // atualizado o estado da chave values 
     
        }


    }

    addOperator(operation){ 
        if(this.state.currentValue === 0){
           this.setState({operation, currentValue:1 , clearDisplay: true})
       }else{
             const equals = operation === '='
             const currentOperation = this.state.operation

             const values = [...this.state.values]
           // eslint-disable-next-line no-unused-vars
            try {   
                if (isNaN(values[0]) || !isFinite(values[0])) {
                    this.clearMemory()
                return
                }
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]} `)

            }catch (e){
                values[0] =this.state.values[0]
            }

            values[1] = 0

          
            this.setState({
                displayValue : values[0],
                operation : equals ? null : operation,
                currentValue : equals ? 0 : 1, 
                clearDisplay : !equals,
                values
            })
        }
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