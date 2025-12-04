import { useState, useEffect } from 'react'
import './App.css'

function App() {
    const [message, setMessage] = useState('')

    useEffect(() => {
        // Example of fetching from backend to verify proxy/CORS
        fetch('/api/hello')
            .then(res => res.text())
            .then(data => setMessage(data))
            .catch(err => console.error('Error fetching from backend:', err))
    }, [])

    return (
        <>
            <h1>Frontend + Backend</h1>
            <div className="card">
                <p>
                    Backend says: {message || 'Loading... (Ensure backend is running)'}
                </p>
            </div>
        </>
    )
}

export default App
