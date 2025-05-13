"use client"
import { useRouter } from 'next/navigation';
import { components } from '../../../lib/compoentsMetaData/components'
import { sidebar } from '../../../sidebar.config'
import { use } from 'react'
import Navbar from '@/components/Navbar';

type ComponentType = {
    [key: string]: { name: string; slug: string; preview: React.ReactElement; code: string; };
};

type PageProps = {
    params: { slug: string }
}

const ComponentPage = (props: PageProps) => {
    // unwrap the params object using React.use()
    const resolvedParams = use(props.params) as { slug: string };
    const slug = resolvedParams.slug;

    const router = useRouter();
    const component = (components as ComponentType)[slug];

    //console.log("Slug : ",component.slug)

    if (!component) return (
        <>
            <Navbar />
            <div>Component Not Found</div>
        </>
    )

    return (
        <>
            <Navbar />
            <div className="flex">
                <aside className="w-64 p-4 border-r">
                    {sidebar.map((item) => (
                        <a key={item.slug} href={`/components/${item.slug}`} className="block mb-2">
                            {item.name}
                        </a>
                    ))}
                </aside>

                <main className="flex-1 p-6">
                    <h1 className="text-2xl font-bold">{component.name}</h1>
                    <div className="my-4">{component.preview}</div>
                    <h2 className="mt-6 font-semibold">Installation</h2>
                    <pre className="bg-gray-100 p-2 rounded">npx @curious_ram/craftui add {component.slug} --lang js --dest ./src/components</pre>

                    <h2 className="mt-4 font-semibold">Code</h2>
                    <pre className="bg-gray-900 text-white p-4 rounded text-sm overflow-auto">
                        {component.code}
                    </pre>
                </main>
            </div>
        </>

    );
}

export default ComponentPage;