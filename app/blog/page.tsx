
import Link from 'next/link';
import {loader} from './loader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";


export default async function Blog() {
    const { posts } = await loader();

return (
    <div>
        <h1 className="text-3xl font-bold text-center text-white mt-24">Blog</h1>
        <div className='text-white text-center mt-3'>Writings about AI, Biology, Academia, and more</div>
        <div className="absolute top-12 left-0 m-4">
            <Link href="/">
                <button className="outlint-white border-2 text-white px-4 py-2 rounded hover:bg-white hover:text-black">Go Home</button>
            </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 mt-12">
            {posts.map((post, index) => (
                <Card key={index} className="transform transition duration-500 hover:scale-105">
                    <Link href={`/blog/${post.filename.replace(/\.md$/, '')}`}>
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold text-gray-900 mb-4">{post.data.title}</CardTitle>
                            <CardDescription className="text-gray-500 text-sm mb-4">{post.data.date}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-700 text-base flex-1">{post.content.substring(0, 200)}...</p>
                        </CardContent>
                    </Link>
                </Card>
            ))}
        </div>
    </div>
);
}

