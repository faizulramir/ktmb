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

                    <div className={`${!parentLoad ? 'mt-80 lg:mt-60 md:mt-60' : 'mt-20'}`}>
                        {
                            !parentLoad ? 
                                <Loading setParentLoad={setParentLoad}/> 
                            :   <FindingForm searchDisabled={searchDisabled} setSearchDisabled={setSearchDisabled}/>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

