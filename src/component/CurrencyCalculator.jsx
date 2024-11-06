import { useState } from "react"

const CurrencyCalculator = ()=>{
    const [amount,setAmount] = useState(0);
    const [fromCurrency,setFromCurrency] = useState('USD')
    const [toCurrency,setToCurrency] = useState('INR')
    const [convertedAmount,setConvertedAmount] = useState(0);

    const handleInput = (e)=>{
        console.log(e.target.value);
        setAmount(e.target.value)
    }

    return(
        <>
            <section className="container display-Flex">
                <div className="card display-Flex">
                    <div className="calculator displayFlex-Column">
                        <h2>Currency Covertor</h2>
                        <hr />
                        <div>
                            <label htmlFor="Amount">Amount : </label>
                            <input type="number" 
                                name="amountField"
                                value={amount<0 ? 0 : amount}
                                onChange={handleInput}
                                className="amountInputField"
                            />
                        </div>
                        <div className="currency-selector display-Flex">
                            <div>
                                <label htmlFor="From">From : </label>
                                <select value={fromCurrency} onChange={(e)=> setFromCurrency(e.target.value)}>
                                    <option value="USD">USD</option>
                                    <option value="EUR">EUR</option>
                                    <option value="INR">INR</option>
                                    <option value="GBP">GBP</option>
                                    <option value="AUD">AUD</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="To">To : </label>
                                <select>
                                    <option value="INR">INR</option>
                                    <option value="USD">USD</option>
                                    <option value="EUR">EUR</option>
                                    <option value="GBP">GBP</option>
                                    <option value="AUD">AUD</option>
                                </select>
                            </div>
                        </div>
                        <button className={`convertBtn`} onClick={()=>alert('ok')} disabled={amount==0 ? true : false}>Convert</button>
                        <hr />
                        <h2 className="convertedAmount">CA</h2>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CurrencyCalculator