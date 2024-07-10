import Link from "next/link"


export default function Products() {
    return <>
        <Link href="/">Back</Link>
        <h1>Product List</h1>
        <h1><Link href='/products/1'>Product 1</Link></h1>
        <h2>Product 2</h2>
        <h2>Product 3</h2>
    </>
  }
  