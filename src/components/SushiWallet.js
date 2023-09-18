import React, { useState } from "react"

function SushiWallet({onAddMoney}) {
    const [amount, setAmout] = useState(0)

    function handleAmountChange(e) {
        const ant = e.target.value
        if (ant === "" || isNaN(ant)) {
            setAmout("")
        } else {
            setAmout(parseInt(ant))
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        onAddMoney(amount)
        setAmout(0)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="numer" value={amount} onChange={handleAmountChange} />
            <input type="submit" value="Add $$ to Wallet" />
        </form>
  )
}

export default SushiWallet