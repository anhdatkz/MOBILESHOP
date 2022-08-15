import './Register.css'

function Register() {
    return (
        <>
            <form className='container p-3 register-form'>
                <h3>Sign Up</h3>

                <div className="mb-3">
                    <label>ID</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="ID"
                    />
                </div>

                <div className="mb-3">
                    <label>Your name</label>
                    <input type="text" className="form-control" placeholder="Your name" />
                </div>

                <div className="mb-3">
                    <label>Address</label>
                    <input type="text" className="form-control" placeholder="Address" />
                </div>

                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                    />
                </div>

                <div className="mb-3">
                    <label>Username</label>
                    <input type="text" className="form-control" 
                    placeholder="Username" />
                </div>

                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                    />
                </div>

                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Sign Up
                    </button>
                </div>
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">sign in?</a>
                </p>
            </form>
        </>
    )
}

export default Register;