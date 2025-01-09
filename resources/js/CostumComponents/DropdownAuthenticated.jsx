import Dropdown from "@/Components/Dropdown";

export default function DropdownAuthenticated({children,navAuth}){
    
    return (
        <>
            <Dropdown>
                    <Dropdown.Trigger>
                        <span className="inline-flex rounded-md">
                            <button
                                type="button"
                                className="inline-flex items-center rounded-md border border-transparent bg-transparent px-3 py-2 text-sm font-medium leading-4 text-white transition duration-150 ease-in-out hover:text-yellow-500 focus:outline-none hover:border-b-2 hover:border-s-0 hover:border-black"
                            >
                                {children &&
                                    <div>
                                        {children}
                                    </div>
                                }

                                <svg
                                    className="-me-0.5 ms-2 h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </span>
                    </Dropdown.Trigger>

                    <Dropdown.Content contentClasses="py-1 bg-slate-50">
                        {navAuth.map((item,index)=>{
                            return(
                                    <Dropdown.Link
                                        href={route(item.link)}
                                        key={index}
                                        
                                        method={item.method||'get'}
                                        as={item.as || 'a'}
                                        
                                    >
                                        {item.text} 
                                    </Dropdown.Link>

                            )

                        })}
                    </Dropdown.Content>
            </Dropdown>
        </>
    )
}
