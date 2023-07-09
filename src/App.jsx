import 'tailwindcss/tailwind.css';
import { SingleBar } from './components/SingleBar';
import { categories } from './assets/data';
import { TreeView } from './components/TreeView';



function App() {
  return (
    <>
      <div className="bg-slate-100 min-h-screen w-screen py-5 flex items-center justify-center ">

        <div className='bg-white  w-11/12 shadow-xl rounded p-4 overflow-x-hidden overflow-y-hidden '>
          <h1 className='font-semibold text-3xl my-4'>Select Category</h1>

          {/* {categories?.map((category) => (
            <SingleBar key={category.id} data={category}/> 
          ))} */}

          <TreeView/>

          <button type='button' className='bg-indigo-500 py-1 px-2 rounded-md text-white'>Save Changes</button>
        </div>
      </div>
    </>
  )
}

export default App
