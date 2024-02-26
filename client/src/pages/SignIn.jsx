import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return setErrorMessage("Please fill out all the fields");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if(res.ok) {
        navigate("/");
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  }

  return (
    <div className = 'min-h-screen mt-20'>
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5" >
        
        <div className="flex-1">
          <Link to="/" className="font-semibold dark:text-white text-4xl">
              <span className='px-2 py-1'>BeanNotes</span>
          </Link>
          <p className='text-sm mt-5'>
            Your one-stop coffee application
          </p>
        </div>

        <div className="flex-1">
          <form action="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="your email" />
              <TextInput type="email" placeholder="name@domain.com" id="email" onChange={handleChange}/>
            </div>
            <div>
              <Label value="your password" />
              <TextInput type="password" placeholder="**********" id="password" onChange={handleChange}/>
            </div>
            <Button className="mt-5" type="submit" disabled={loading}>
              {
                loading ? (
                  <>
                  <Spinner size="sm" />
                  <span className ="pl-3">Loading</span>
                  </>
                ) : "Sign In"
              }
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Don't an account?</span>
            <Link to="/sign-up" className='text-blue-500'>Sign Up</Link>
          </div>
          {
            errorMessage && (
              <Alert className="mt-5" color="failure">
                {errorMessage}
              </Alert>
            )
          }
        </div>
      </div>
    </div>
  )
}
