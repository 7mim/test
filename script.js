body {
    font-family: 'Arial', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #f4f4f4;
}

.calculator {
    border-radius: 5px;
    box-shadow: 0px 0px 20px 0px #000;
}

.calculator-screen {
    width: 100%;
    height: 80px;
    border: none;
    background-color: #252525;
    color: #fff;
    font-size: 2.5rem;
    text-align: right;
    padding-right: 20px;
    padding-left: 10px;
}

.calculator-buttons button {
    height: 60px;
    width: 25%;
    font-size: 1.5rem;
    border: 1px solid #252525;
    background-color: #eaeaea;
    cursor: pointer;
}

.calculator-buttons button.operator {
    background-color: #ff9500;
    color: #fff;
}

.calculator-buttons button.all-clear {
    background-color: #ff3b30;
    color: #fff;
}

.calculator-buttons button.equal-sign {
    height: 100%;
    background-color: #ff9500;
    color: #fff;
}
