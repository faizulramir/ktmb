import Nav from './Components/Nav';
import { PageProps } from '@/types';
import Hero from './Components/Home/Hero';

export default function Welcome({ auth, laravelVersion, phpVersion }: PageProps<{ laravelVersion: string, phpVersion: string }>) {
    

    return (
        <>
            <div className="flex min-h-screen w-full flex-col">
                <Nav data="home"/>
                <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
                    <Hero/>
                </main>
            </div>
        </>
    );
}

