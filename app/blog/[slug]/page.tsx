type BlogDetailsProps = {
    params: Promise<{ slug: string }>;
}


export default async function BlogDetails({params}: any) {
    const { slug } = await params;
    return (
        <>
            <h1>Blog Details</h1>
            <h2>{slug}</h2>
        </>
    );
}