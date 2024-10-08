import { useState, useEffect } from 'react'
import axios from 'axios';


export default function App() {
  const [data, setData] = useState([]);
  
  const fetchData = async(endpoint)=>{
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/${endpoint}`);
      setData(response.data)
    } catch (error) {
      console.log(error,"Error in Data Fetching")
    }

  }
    return (
      <>
        <div className="bg-white">
          <div className="relative isolate px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-32">
              <div className="text-center">
                <p className=" text-2xl tracking-tight text-gray-900">
                  This app fetching data from api and show in table format, user can fetch multiple endpoint's data with the help of buttons. After this user i also can download that data in xls format.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <button onClick ={()=> fetchData('albums')} className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  > Fetch Data
                  </button>
                  <button onClick ={()=> fetchData('posts')} className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  > Posts
                  </button>
                  <button onClick ={()=> fetchData('users')} className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  > Users
                  </button>
                  <button onClick ={()=> fetchData('comments')} className="rounded-md bg-yellow-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  > Comments
                  </button>                  
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
                {data.length > 0 && (
                  <pre>{JSON.stringify(data, null, 2)}</pre>
                )}
              </div>
        </div>
      </>
    )
  }

