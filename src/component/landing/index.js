import React from 'react'
// import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Landing() {
    return (
        <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh" }} className="Landing-info">
            <div>
                <h1>Welcome to our Database</h1>
                <p>This database is about Facebook users</p>
                <Link to="/database"><button>Click Me</button></Link>
            </div>

        </div>

    )
}

export default Landing