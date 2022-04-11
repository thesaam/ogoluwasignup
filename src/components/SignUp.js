import image from '../images/image 2.png'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='container'>
      <div className="left">
        <p className="image-text">
          Building exceptional services with Back Office Support and Business Perfomance
        </p>
      </div>
      <div className="right">
        <h2 className="form-title">
          Create Account
        </h2>
        <p className="form-text">
          Build an exceptional business
        </p>
        <form action="">
          <div className="top form-group">
            <div className="fname">
              <div className='label'>
                <label htmlFor="firstname">
                  First Name
                </label>
              </div>
              <input type="text" className="form-input" placeholder='Enter your first name'/>
            </div>
            <div className="lname">
              <div className='label'>
                <label htmlFor="lastname">
                  Last Name
                </label>
              </div>
              <input type="text" className="form-input" placeholder='Enter your last name'/>
            </div>
          </div>
          <div className="form-group">
            <div className='label'>
              <label htmlFor="number">
                Phone Number
              </label>
            </div>
            <input type="text" className="form-input" placeholder='Enter your phone number'/>
          </div>
          <div className="form-group">
            <div className='label'>
              <label htmlFor="email">
                Email Address
              </label>  
            </div>
            <input type="email" className="form-input" placeholder='Enter your email'/>
          </div>
          <div className="form-group">
            <div className='label'>
              <label htmlFor="password">
                Password
              </label>
            </div>
            <input type="text" className="form-input" placeholder='Enter your password'/>
          </div>
          <div className="form-bottom">
            <div>
              <input type="checkbox" className="remember" />
              <span className='checktext'>Remember me</span>
            </div>
            <Link to={"/"} className="blue">
              Forgot Password ?
            </Link>

          </div>
          <button className='btn'>Sign Up</button>
          <p className='btm'>
            Got an Account? 
            <Link to={'/'} className="blue">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default SignUp