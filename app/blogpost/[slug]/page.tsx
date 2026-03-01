import React from 'react'
import MaxWidthWrapper from "@/components/MaxWidthWrapper";



import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkFrontmatter from "remark-frontmatter"
import remarkParseFrontmatter from "remark-parse-frontmatter"
import remarkRehype from "remark-rehype"
import rehypeRaw from "rehype-raw"
import rehypeStringify from "rehype-stringify"
import rehypeHighlight from "rehype-highlight"
import rehypeSlug from 'rehype-slug';
import matter from 'gray-matter';
import fs from 'fs';
import Onthispage from '@/components/Onthispage';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

export const BlogPost = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;

    const processor = unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeStringify)
        .use(rehypeAutolinkHeadings)
        .use(rehypeSlug)


    const filePath = `content/${slug}.md`
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    const htmlContent = (await processor.process(content)).toString();
    return (
        <>
            <MaxWidthWrapper className='prose dark:prose-invert'>
                <div className='flex'>
                    <div className='px-16'>
                        <h1>{data.title}</h1>
                        <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
                    </div>
                    <Onthispage className="text-sm w-[50%]" htmlContent={htmlContent} />
                </div>
                <div>

                </div>

            </MaxWidthWrapper>
            <div>Blogpost {slug}</div>
        </>
    )
}



export default BlogPost


