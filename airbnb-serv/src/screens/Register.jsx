import { useState } from 'react'
import { BrowserRouter as Router, Link, useNavigate } from 'react-router-dom/client'
import { toast } from 'react-toastify'
import { register } from '../Services/admin.js'

function Register() {

const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const navigate = useNavigate()

  const onRegister = async () => {
    if (firstName.length == 0) {
      toast.error('please enter first name')
    } else if (lastName.length == 0) {
      toast.error('please enter last name')
    } else if (email.length == 0) {
      toast.error('please enter email')
    } else if (password.length == 0) {
      toast.error('please enter password')
    } else if (confirmPassword.length == 0) {
      toast.error('please confirm the password')
    } else if (password != confirmPassword) {
      toast.error('password does not match')
    } else {

        const result = await register(firstName, lastName, email, password)
    if (result['status'] == 'success') {
        toast.success('Successfully registered a new user')
        navigate('/login')
      } else {
        toast.error(result['error'])
      }
    }
  }


  return (
    <Router>
      <div>
        <h2 className='page-header'>Register</h2>
        <div className='row'>
          <div className='col'></div>
          <div className='col'>
            <div className='form'>
              {/* ... rest of your form ... */}
              <div className='mb-3'>
                <div>
                  Already have an account ? <Link to='/login'>Login</Link>
                </div>
                <button onClick={onRegister} className='btn btn-success mt-2'>
                  Register
                </button>
              </div>
            </div>
          </div>
          <div className='col'></div>
        </div>
      </div>
    </Router>
  )
}

export default Register;
