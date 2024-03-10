import { Button, FileInput, Select, TextInput } from 'flowbite-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function CreateBrew() {
  return (
    <div className='p-3 max-w-3xl mx-auto min-h-screen'>
      <h1 className='text-center text-3xl my-7 font-semibold'>Record a Coffee Brew</h1>
      <form className='flex flex-col gap-4'>
        <TextInput
          type='text'
          placeholder='Coffee Name'
          required
          id='coffeeName'
        />
        <div className='flex gap-4'>
          <Select>
            <option value='select'>Select a Brewing Method</option>
            <option value='aeropress'>Aeropress</option>
            <option value='chemex'>Chemex</option>
            <option value='frenchPress'>French Press</option>
            <option value='pourOver'>Pourover</option>
          </Select>
          <TextInput
            type='number'
            placeholder='Brew Time (minutes)'
            required
            id='brewTime'
            className='flex-1'
          />
          <TextInput
            type='text'
            placeholder='Grind Size'
            id='grindSize'
            className = 'w-24'
        />
        </div>

        <div className='flex gap-4'>
          <TextInput
            type='number'
            placeholder='Water Temperature (°C)'
            id='waterTemperature'
            step='0.1' // Adjust step size as needed
            className='flex-1' // Make the input field take up remaining space
          />
          <TextInput
            type='text'
            placeholder='Coffee to Water Ratio (e.g., 1:15)'
            id='coffeeWaterRatio'
            className='flex-1' // Make the input field take up remaining space
          />
        </div>
        <ReactQuill
          theme='snow'
          placeholder='notes...'
          className='h-72 mb-12'
          required
        />
        <div className='flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3'>
          <FileInput type='file' accept='image/*' />
          <Button
            type='button'
            gradientDuoTone='purpleToBlue'
            size='sm'
            outline
          >
            Upload image
          </Button>
        </div>
        <Button type='submit' gradientDuoTone='greenToYellow'>
          Record Brew
        </Button>
      </form>
    </div>
  );
}
