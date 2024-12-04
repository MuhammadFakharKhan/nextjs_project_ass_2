
import Link from 'next/link';
import '../app/globals.css';
import type { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <head>
         <meta name="viewport" content="width=device-width, initial-scale=1"/> 
         </head>
      <body className="min-h-screen flex flex-col">
        <header className="text-f1f1f1 bg-pink-700 text-white p-4 w-full">
          <nav className='flex justify-center'>
            <ul className="flex space-x-12">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              <li><Link href="/blog" className="hover:underline">Blog</Link></li>
            </ul>
          </nav>
        </header>
        <main className="flex-grow container mx-auto p-4">
          {children}
        </main>
        <footer className="bg-pink-700 text-white p-4 text-center">
          <p>© 2024 My Website</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;




// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Document</title>
//   <link href="/path/to/tailwind.css" rel="stylesheet">
// </head>
// <body class="font-sans m-0 p-0">
//   <header class="text-f1f1f1 bg-pink-700 p-0.5 text-center w-full">
//     <nav>
//       <ul class="list-none p-0 flex space-x-12">
//         <li><a href="/" class="no-underline text-f1f1f1 hover:underline">Home</a></li>
//         <li><a href="/about" class="no-underline text-f1f1f1 hover:underline">About</a></li>
//         <li><a href="/contact" class="no-underline text-f1f1f1 hover:underline">Contact</a></li>
//         <li><a href="/blog" class="no-underline text-f1f1f1 hover:underline">Blog</a></li>
//       </ul>
//     </nav>
//   </header>
//   <main class="p-5 bg-white min-h-screen box-border pb-1.25">
//     <div class="max-w-2xl mx-auto p-5">
//       <h1 class="text-7xl font-bold mb-5 text-left mr-105">Title</h1>
//       <h2 class="text-7xl font-bold mt-25 text-left mr-105">Title 2</h2>
//       <h3 class="text-6xl font-bold mt-37.5 mb-5 text-left mr-105">Title 3</h3>
//       <h4 class="text-7xl font-bold mt-25 text-left mr-150">Title 4</h4>
//     </div>
//   </main>
//   <footer class="text-f1f1f1 bg-pink-700 p-0.5 text-center w-full">
//     <p>© 2024 My Website</p>
//   </footer>
// </body>
// </html>
