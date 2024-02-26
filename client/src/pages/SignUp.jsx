import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
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
          <form action="flex flex-col gap-4">
            <div>
              <Label value="your username" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div>
              <Label value="your email" />
              <TextInput type="text" placeholder="name@domain.com" id="email" />
            </div>
            <div>
              <Label value="your password" />
              <TextInput type="text" placeholder="Password" id="password" />
            </div>
            <Button className="mt-5" type="submit">
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/sign-in" className='text-blue-500'>Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
