"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  {
    name: "Login",
    href: "/login",
  },
  {
    name: "Register",
    href: "/register",
  },
  {
    name: "Forgot-Password",
    href: "/forgot-password",
  },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const [ name, setName ] = useState('')
  return (
    <div>
      {children}
      <div>
            <input value={name} onChange={e => setName(e.target.value)} />
        </div>
      <div>
        {navLinks.map((el) => {
            const isActive = pathName.includes(el.href);
            const sty = isActive ? {color:'black'} : {color:'blue'}
          return (
            <Link href={el.href} key={el.name} style={sty}>
              {el.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
