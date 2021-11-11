
import React from 'react';

import Form from './components/Form';
import Input from './components/Input';

export default function App() {
    return (
        <>
            <h1>Hello Hooks</h1>
            <h4>Exercícios feitos até agora de:</h4>
            <ul style={{ listStyle: 'none' }}>
                <li>useState</li>
                <li>useEffect</li>
                <li>useCallback</li>
            </ul>

            <h1>Using UseCallback in Form</h1>
            <Form>
                <span>Name:</span> <Input name="name" /> 
                <span>Email:</span> <Input name="email" />  
                <span>Password:</span> <Input name="password" /> 
                <button type="submit">Send</button>
            </Form>
        </>
    );
}
