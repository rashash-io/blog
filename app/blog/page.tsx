// import SampleBlogs from "@/config/sampleblogs";
import React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import fs, { readFileSync } from "fs";
import matter from "gray-matter";
import Link from "next/link";
import { Metadata } from "next";

interface BlogType {
    slug: string;
    title: string;
    description: string;
    imageUrl?: string;

};

const dirContent = fs.readdirSync("content", "utf-8")
console.log(dirContent)

const blogs: BlogType[] = dirContent.map(file => {
    const fileContent = readFileSync(`content/${file}`, "utf-8");
    const { data } = matter(fileContent)
    const value: BlogType = {
        slug: data.slug,
        title: data.title,
        description: data.description,
        imageUrl: data?.imageUrl
    }
    return value
})

console.log(blogs)


const BlogList = () => {
    return (
        <>
            <Hero />

            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.map((blog: BlogType, index: number) => (
                        <div
                            key={index}
                            className="shadow-lg rounded-lg overflow-hidden border border-4 border-blue-900/50"
                        >
                            <img
                                className="w-full h-64 object-cover object-top"
                                src={blog.imageUrl ? blog.imageUrl : "/blogimg.jpg"}
                                alt={blog.title}
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                                <p className="mb-4">{blog.description}</p>
                                <Link
                                    href={`/blogpost/${blog.slug}`}
                                    className={buttonVariants({ variant: "default" })}
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};




// export const metadata: Metadata = {
//     title: 'Blogs - ProgrammingWithHarry',
//     description: 'A comprehensive blog for coders of all levels, from beginners to advanced. Explore tutorials, tips, and insights on a wide range of programming languages and technologies. Stay up-to-date with the latest trends in software development, learn best practices, and enhance your coding skills with in-depth articles and guides.',
// }


export function Hero() {
    return (
        <section className="relative py-10 flex items-center justify-center overflow-hidden bg-background ">
            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            {/* Content */}
            <div className="flex flex-wrap px-6 max-w-4xl  w-full">
                <h1 className=" text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                    RA$HASH's Blog
                </h1>
                <p className="mt-6 text-sm md:text-md max-w-2xl border w-full ">
                    This is a blog about programming, web development, and technology. Here you will find articles, tutorials, and insights on various programming languages, frameworks, and tools. Whether you're a beginner or an experienced developer, there's something for everyone to learn and explore in the world of coding.
                </p>
            </div>
        </section>
    );
}



export default BlogList;