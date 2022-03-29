import { MdErrorOutline } from 'react-icons/md'
import { Link } from 'react-router-dom';

function Failed() {
  return (
    <div className='text-center mt-5'>

      <MdErrorOutline className='text-danger' size='100' />
      <h1 className='my-2'>
        something went wrong :/
      </h1>

      <h5 className='mb-5'>please select correct dates or parameters</h5>

      <Link to='/' className='mt-5'>
        <button type="button" class="btn btn-outline-dark">Home</button>
      </Link>

    </div>
  )
}

export default Failed