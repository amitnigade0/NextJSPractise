import Link from "next/link";


export default function Product( { params }: { params: { productId: string } }) {
    return <>
    <Link href="/products">Back</Link><h1>Details about product { params.productId }</h1>
    </>
    
  }
  