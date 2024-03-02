import Link from "next/link";
import { cache } from "react";
import CreateNote from "./CreateNote";

export default async function PostsPage() {
    const posts = await getPosts();
    return (
        <div>
            <h1>
                Posts
            </h1>
            <div>
                {posts?.map((post) => {
                    return <Post key={post.id} post={post} />;
                })}
            </div>
            <CreateNote/>
        </div>
    )
}

async function getPosts() {
    const res = await fetch('http://127.0.0.1:8090/api/collections/posts/records?page=1&perPage=20',{cache: 'no-store'});
    const data = await res.json();
    return data?.items as any[];
}

function Post({ post }: any) {
    const { id, name, updated, created } = post || {};
    return ( 
        <Link href={`/Posts/${id}`}>
            <div>
                <h2>{name}</h2>
                <h2>{id}</h2>
                <h2>{created}</h2>
                <h2>{updated}</h2>
            </div>
        </Link>
    )
}