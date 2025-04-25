import { useState } from 'react';

import './App.css'

function App() {
	const [calc, setCalc] = useState("");
	const [result,setResult] = useState("");

	const ops =['/' ,'*','+','-','.'];

	// an arrow function to update calculated values
	const updateCalc =value =>{
		//this if statement prevents multiple operators next to each other
		if (
			ops.includes(value) && calc ===" "||		//we are checking for a case where the last value is an operator and the calculation has nothing
			ops.includes(value) && ops.includes(calc.slice(-1))		//we are checking if the value is an operator and the last value is also an operator
			
		)
			{
				return ;
			}
		
		setCalc (calc + value);

		if (!ops.includes(value)){
			setResult(eval(calc +value).toString()) // this solves the string passedd in
		}

	}
	
	/* creating an function that returns an array of 1-9* then  we call te function in the div with class name digits (thats where we need the values)*/ 
	const createDigits = () => {
		// creating the array of digits to store our elements
		const digits =[]
		for(let i =1; i<10 ;i++){

			//using array method of .push to return the button digits ,cpass i in curly braces for responsiveness
			digits.push(
				<button
					 onClick={() => updateCalc(i.toString())}
					  key={i} >
						{i}
				</button>
			);
		}
		return digits;  // always return after writing a function
	}
	//this is to make the equal to button functional
	const calculate =() =>{
		setCalc(eval(calc).toString());
	}
	//a function to delete values in a calculator then we callthe function in click effect of delete button
	const deleteLast = () =>{
		if (calc ==''){
			return;
		}
		 const value = calc.slice(0,-1);

		 setCalc(value);
			
	}
	return(
		<div className="App">
			<div className="calculator">
				<div className="display">
					{result ? <span>({result})</span> : ''}
					{calc || "0"}
				</div>
				
				<div className="operators">
					<button onClick ={() => updateCalc('/')}>/</button>
					<button onClick ={() => updateCalc('*')}>*</button>
	 				<button onClick ={() => updateCalc('+')}>+</button>
					<button onClick ={() => updateCalc('-')}>-</button>

					<button onClick={deleteLast}>C</button>
				</div>
				<div className="digits">  
					{ createDigits()}  
					<button onClick ={() => updateCalc('0')}>0</button>
					<button onClick ={() => updateCalc('.')}>.</button>
					
					<button onClick={calculate}>=</button>
				</div>
			</div>
			
		</div>
	);
}

export default App
