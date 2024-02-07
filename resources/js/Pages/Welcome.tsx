import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Search } from './Components/Search';
import FindingForm from './Form/FindingForm';
import { Loading } from './Components/Loading';
import { useState } from 'react';

export default function Welcome({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
    
    const [parentLoad, setParentLoad] = useState(false);
    const [searchDisabled, setSearchDisabled] = useState(true);

    return (
        <>
            <Head />
            <div className="flex h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="m-auto p-6 lg:p-8 w-full lg:w-2/5 md:w-4/5">
                    <div className="flex justify-center w-1/4 m-auto animate-bounce">
                        <img src="/icon.png" alt="" />
                    </div>

                    <div className={`mt-16 ${!parentLoad ? 'mt-60 lg:mt-48 md:mt-48' : ''}`}>
                        {
                            !parentLoad ? 
                                <Loading setParentLoad={setParentLoad}/> 
                            :   <FindingForm searchDisabled={true} setSearchDisabled={setSearchDisabled}/>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

