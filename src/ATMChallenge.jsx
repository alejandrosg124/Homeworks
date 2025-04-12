import { useState } from 'react';

class Queue {
    constructor() {
        this.people = [];
    }
    enqueue(person) {
        this.people.push(person);
    }
    dequeue() {
        return this.people.length > 0 ? this.people.shift() : null;
    }
    peek() {
        return this.people.length > 0 ? this.people[0] : null;
    }
    size() {
        return this.people.length;
    }
    print() {
        return this.people.map((person, index) => 
            `${index + 1}. ${person.name} - Retiro: $${person.amount}`
        );
    }
}

const ATMChallenge = () => {
    const [person, setPerson] = useState({ name: "", amount: "" });
    const [queue, setQueue] = useState(new Queue());
    const [peek, setPeek] = useState(null);
    const handleChange = (event) => {
        setPerson({ ...person, [event.target.name]: event.target.value });
    }

    const añadirPersona = (event) => {
        event.preventDefault();
        queue.enqueue(person);
        setPerson({ name: "", amount: "" });
    }

    const limpiarCola = (event) => {
        event.preventDefault();
        queue.dequeue();
        setQueue(new Queue(...queue.people));
    }
   
    return (
        <>
            <h1>ATM Challenge #9</h1>
            <form onSubmit={añadirPersona}>
                <input type="text" name="name" placeholder="Su nombre" onChange={handleChange} value={person.name} />
                <input type="number" name="amount" placeholder="Monto de retiro" onChange={handleChange} value={person.amount} />
                <button type="submit">Añadir Persona</button>
            </form>
            <div className="queue-display">
                <h3>Cola Actual:</h3>
                <ul>
                    {queue.print().map((item, index) => (
                        <li key={index}>{item}</li>
                        
                    ))}
                </ul>
                <p>Total personas: {queue.size()}</p>
                <button onClick={limpiarCola}>Limpiar Cola</button>
                <button onClick={() => setPeek(queue.peek())}>
                    Ver el primer elemento
                </button>
                {peek && (
                    <p>Primer elemento: {peek.name} - Retiro: ${peek.amount}</p>
                )}
            </div>
        </>
    );
}

export default ATMChallenge;
