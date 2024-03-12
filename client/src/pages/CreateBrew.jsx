import { Alert, Button, FileInput, Select, TextInput } from 'flowbite-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { app } from '../firebase';
import { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from 'react-router-dom';


export default function CreateBrew() {
  const [file, setFile] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("reached")
      const res = await fetch('/api/post/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        setPublishError(data.message);
        return;
      }

      if (res.ok) {
        setPublishError(null);
        navigate(`/post/${data.slug}`);
      }
    } catch (error) {
      setPublishError('Something went wrong');
    }
  };

  return (
    <div className='p-3 max-w-3xl mx-auto min-h-screen'>
      <h1 className='text-center text-3xl my-7 font-semibold'>Record a Coffee Brew</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <TextInput
          type='text'
          placeholder='Coffee Name'
          required
          id='coffeeName'
          onChange={(e) =>
            setFormData({ ...formData, coffeeName: e.target.value })
          }
        />
        <div className='flex gap-4'>
          <Select
            onChange={(e) =>
              setFormData({ ...formData, brewingMethod: e.target.value })
            }
          >
            <option value='uncategorized'>Select a Brewing Method</option>
            <option value='aeropress'>Aeropress</option>
            <option value='chemex'>Chemex</option>
            <option value='frenchPress'>French Press</option>
            <option value='pourOver'>Pourover</option>
          </Select>
          <TextInput
            type='number'
            placeholder='Brew Time (minutes)'
            id='brewTime'
            className='flex-1'
            onChange={(e) =>
              setFormData({ ...formData, brewTime: e.target.value })
            }
          />
          <TextInput
            type='text'
            placeholder='Grind Size'
            id='grindSize'
            className = 'w-24'
            onChange={(e) =>
              setFormData({ ...formData, grindSize: e.target.value })
            }
        />
        </div>

        <div className='flex gap-4'>
          <TextInput
            type='number'
            placeholder='Water Temperature (°C)'
            id='waterTemperature'
            step='0.1' // Adjust step size as needed
            className='flex-1' // Make the input field take up remaining space
            onChange={(e) =>
              setFormData({ ...formData, waterTemperature: e.target.value })
            }
          />
          <TextInput
            type='text'
            placeholder='Coffee to Water Ratio (e.g., 1:15)'
            id='coffeeWaterRatio'
            className='flex-1' // Make the input field take up remaining space
            onChange={(e) =>
              setFormData({ ...formData, coffeeWaterRatio: e.target.value })
            }
          />
        </div>
        <ReactQuill
          theme='snow'
          placeholder='notes...'
          className='h-72 mb-12'
          required
          onChange={(value) => {
            setFormData({ ...formData, notes: value });
          }}
        />
        
        <Button type='submit' >
          Record Brew
        </Button>
      </form>
    </div>
  );
}

