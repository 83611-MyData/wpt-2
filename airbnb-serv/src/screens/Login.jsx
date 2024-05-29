import { useState } from "react";
import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom/client";
import { toast } from "react-toastify";
import { login } from "../Services/admin.js";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isEmailEmpty, setEmailEmpty] = useState(false);
    const [isPasswordEmpty, setPasswordEmpty] = useState(false);
    const navigate = useNavigate();  // Uncommented useNavigate

    const onLogin = async () => {
        if (email.length === 0) {
            toast.error('Enter email');
            setEmailEmpty(true);
        } else if (password.length === 0) {
            toast.error('Enter password');
            setPasswordEmpty(true);
        } else {
            try {
                const result = await login(email, password);
                if (result['status'] === 'success') {
                    const data = result['data'];
                    sessionStorage.setItem('name', data['name']);
                    sessionStorage.setItem('token', data['token']);
                    navigate('/dashboard');  // Navigate to dashboard on successful login
                } else {
                    toast.error(result['error']);
                }
            } catch (error) {
                toast.error('An error occurred');
            }
        }
    };

    return (
        <Router>
            <div>
                <h2 className='page-header'>Login</h2>
                <div className='row'>
                    <div className='col'></div>
                    <div className='col'>
                        <div className='form'>
                            {/* ... rest of your form ... */}
                            <div className='mb-3'>
                                <div>
                                    Don't have an account? <Link to='/register'>Register Here</Link>
                                </div>
                                <button onClick={onLogin} className='btn btn-success mt-2'>Login</button>
                            </div>
                        </div>
                    </div>
                    <div className='col'></div>
                </div>
            </div>
        </Router>
    );
}

export default Login;
