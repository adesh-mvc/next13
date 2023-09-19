import { getServerSession } from "next-auth";
import { AuthOptions } from "@/pages/api/auth/[...nextauth]";
// import { useSession } from "next-auth/react";
import ProductList from "./ProductList";
import ProductForm from "./ProductFrom";
import ProductDetail from "./ProductDetail";
import { getClient } from "@/lib/client"
import "./dragdrop.css"


export default function page({ params }) {
    // const { session } = useSession()

    // if (typeof window === "undefined") return null

    // if (session) {
    const renderPath = params.product;
    const client = getClient();
    const viewTemplate = (currentpath) => {
        // console.log(currentpath[currentpath.indexOf('list') + 1])
        if (currentpath.indexOf('list') !== -1) {
            const page_no = currentpath[currentpath.indexOf('list') + 1] ? currentpath[currentpath.indexOf('list') + 1] : 1
            return <ProductList pagination={page_no} />
        } else if (currentpath.indexOf('add') !== -1) {
            return <ProductForm docId={0} />
        } else if (currentpath.indexOf('edit') !== -1) {
            const id = currentpath[currentpath.indexOf('edit') + 1] ? currentpath[currentpath.indexOf('edit') + 1] : '';
            // await client.query(query:);
            return <ProductForm docId={id} />
        } else if (currentpath.indexOf('detail') !== -1) {

            const id = currentpath[currentpath.indexOf('detail') + 1] ? currentpath[currentpath.indexOf('detail') + 1] : '';
            // await client.query(query:);
            return <ProductDetail docId={id} />
        }
        else {
            return <>Error page going render...</>
        }
    }
    const renderTemplate = viewTemplate(renderPath);
    return (
        <>
            {renderTemplate}
        </>
    )
    // }
    // return <p>Access Denied</p>
}

export async function getServerSideProps(context) {
    return {
        props: {
            session: await getServerSession(
                context.req,
                context.res,
                AuthOptions
            )
        }
    }
}