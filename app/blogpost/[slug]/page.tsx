import React from 'react'

const Blogpost = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;
    return (
        <div>Blogpost {slug}</div>
    )
}

export default Blogpost


