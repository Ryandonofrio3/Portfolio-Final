import Link from 'next/link';


export default function PostLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
                    <div className="absolute top-0 left-0 m-4">
                <Link href="/blog">
                    <div className="text-white underline">Go Back</div>
                </Link>
            </div>

            <div className="flex flex-col items-center justify-center h-screen">
               
                {children}
            </div>
        </>
    );
}