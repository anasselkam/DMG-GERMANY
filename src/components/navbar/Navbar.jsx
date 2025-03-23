import React from 'react'



const MenuData = [
    {
        id:1,
        title:'Home',
        url:'#',
    },
    {
        id:2,
        title:'Courses',
        url:'#',
    },
    {
        id:3,
        title:'Services',
        url:'#',
    },
    {
        id:4,
        title:'Contact',
        url:'#',
    },
    {
        id:5,
        title:'MyTest',
        url:'#',
    },
]
function Navbar() {
  return <>
    <nav className=' text-white '>
        <div className=" bg-black/20  backrop-blur-sm rounded-full py-3 container flex justify-between ">
            {/* Logo section  */}
            <div>
                <h1 className="text-2xl font-bold max-w-[120px]"> <span className='text-yellow-400'>DMG</span><span className='text-red-600'>GERMANY</span></h1>
            </div>
            {/* Menu section  */}
            <div>
                <ul className="flex items-center gap-4">
                 {MenuData.map((item) => {
                    return (
                        <li key={item.id}>
                        <a href={item.url} 
                        className='uppercasetext-sm'
                        >{item.title}</a>
                      </li> 
                      
                    );
                })}
                <li>
                    <button className='border bordeer-white px-4 py-1 rounded-full'>Login</button>
                </li>
             </ul>
              

            </div>
        </div>
    </nav>
  </>
};


export default Navbar