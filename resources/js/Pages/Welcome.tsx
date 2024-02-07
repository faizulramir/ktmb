import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Search } from './Components/Search';
import FindingForm from './Form/FindingForm';
import { Loading } from './Components/Loading';
import { useState } from 'react';

export default function Welcome({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
    
    const [parentLoad, setParentLoad] = useState(false);

    return (
        <>
            <Head />
            <div className="flex h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                {/* <div className="fixed top-0 right-0 p-6 text-end">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <></>
                        // <>
                        //     <Link
                        //         href={route('login')}
                        //         className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        //     >
                        //         Log in
                        //     </Link>

                        //     <Link
                        //         href={route('register')}
                        //         className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        //     >
                        //         Register
                        //     </Link>
                        // </>
                    )}
                </div> */}

                <div className="m-auto p-6 lg:p-8 w-full md:w-fit">
                    <div className="flex justify-center w-1/4 m-auto">
                        <img src="/icon.png" alt="" />
                    </div>

                    <div className="mt-16">
                        {
                            !parentLoad ? 
                                <Loading setParentLoad={setParentLoad}/> 
                            :   <FindingForm />
                        }
                    </div>
                </div>
            </div>

            <style>{`
                .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
            `}</style>
        </>
    );
}
function setState(arg0: { language: any; }) {
    throw new Error('Function not implemented.');
}

