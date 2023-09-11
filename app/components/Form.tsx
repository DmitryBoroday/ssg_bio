export default function Form() {
  return (
     <form
        className='sm:mx-auto flex flex-col gap-2 text-lg p-3 rounded-md border border-gray-400'
        action='https://getform.io/f/1c527796-b655-4c54-9733-f66e31760f69'
        method='POST'
        >
      <input
        className='border-b border-gray-400 outline-none bg-transparent text-sm font-bold'
        type='text'
        name='name'
        placeholder='Enter your name' />
      <input
        className='border-b border-gray-400 outline-none bg-transparent text-sm font-bold'
        type='text'
        name='email'
        placeholder='Enter your email' />
      <textarea
          className='border-b border-gray-400 outline-none bg-transparent text-sm font-bold'
          name='message'
          rows={10}
          placeholder='Enter your message here...'
          />
          <button className='rounded-md  hover:bg-gray-800 hover:text-teal-300 font-bold text-sm text-gray-400 transition-all py-2'><h6>Submit</h6></button>
    </form>
  )
}