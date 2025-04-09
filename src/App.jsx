import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, incrementPorValor, decrement } from './store/slices/counterSlice'
import { push, pop, peek, isEmpty, size } from './store/slices/stackSlice'

function App() {
  const dispatch = useDispatch();
  const {count} = useSelector((state) => state.counter)
  const { stack, valorPeek, valorIsEmpty, valorSize } = useSelector((state) => state.stack);
  const [valorIncremento, setValorIncremento] = useState("");
  const [valorPush, setValorPush] = useState("");

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrementPorValor = () => {
    dispatch(incrementPorValor(valorIncremento));
    setValorIncremento("");
  };

  const handlePush = () => {
    if (valorPush) {
      dispatch(push(valorPush));
      setValorPush('');
    }
  };

  const handlePop = () => {
    dispatch(pop());
  };

  const handlePeek = () => {
    dispatch(peek());
    console.log(`El elemento peek es: ${valorPeek}`);
  };

  const handleIsEmpty = () => {
    dispatch(isEmpty());
    alert(`El stack ${valorIsEmpty ? 'está vacío' : 'NO está vacío'}`);
  };

  const handleSize = () => {
    dispatch(size());
    console.log(`El tamaño del stack es: ${valorSize}`);
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Challenge #10</h1>
      <h3>Incrementar o Decrementar Por 1</h3>
      <p>Contador: {count}</p>

      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>

      <h3>Qué valor desea incrementar?</h3>
      <input type="number" value={valorIncremento} 
        onChange={(e) => setValorIncremento(Number(e.target.value))}
        placeholder="Ingrese valor a incrementar"></input>
      <button onClick={handleIncrementPorValor}>+</button>

      <h2>Métodos del Stack</h2>
      <p>(Peek y Size salen como console logs, y da el valor actualizado en el segundo click)</p>
      <div>
        <input type="number" value={valorPush} 
          onChange={(e) => setValorPush(e.target.value)}
          placeholder="Ingrese un número para el stack"
        />
        <button onClick={handlePush}>Push</button>
        <button onClick={handlePop}>Pop</button>
        <button onClick={handlePeek}>Peek</button>
        <button onClick={handleIsEmpty}>Is Empty</button>
        <button onClick={handleSize}>Size</button>
      </div>

      <div>
        <p>Stack:</p>
        <ul>
          {stack.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>
      </div>
    </>
  )
}

export default App
