import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="w-full bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-center">
          <Image src="/logo-hologram.svg" alt="Logo" width={300} height={100} />
        </div>
      </header>

      <section className="container mx-auto my-12 md:my-16 lg:my-20 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4 md:text-3xl lg:text-4xl">
          Download our app
        </h2>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          <Link href="https://play.google.com/store/apps/details?id=com.myapp" legacyBehavior>
            <a className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors duration-300 w-full md:w-auto">
              <Image src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Google Play" width={100} height={100} className="mr-2" />
              Google Play
            </a>
          </Link>
          <Link href="https://apps.apple.com/us/app/myapp/id12345678" legacyBehavior>
            <a className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors duration-300 w-full md:w-auto">
              <Image src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg" alt="App Store" width={100} height={100} className="mr-2" />
              App Store
            </a>
          </Link>
          <Link href="https://appgallery.huawei.com/app/C12345678" legacyBehavior>
            <a className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors duration-300 w-full md:w-auto">
              <Image src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDBweCIgaGVpZ2h0PSI0MHB4IiB2aWV3Qm94PSIwIDAgNDAgNDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDY0ICg5MzUzNykgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+aWNfYWc8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjUwJSIgeTE9IjAlIiB4Mj0iNTAlIiB5Mj0iMTAwJSIgaWQ9ImxpbmVhckdyYWRpZW50LTEiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkI2MzYxIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNFRDNFNDUiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iaWNfYWciIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLnvJbnu4QiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIuMDAwMDAwLCAyLjAwMDAwMCkiPgogICAgICAgICAgICA8cGF0aCBkPSJNMTAuMTAwOTk5NSwwIEMyLjcwNTExMjc3LDAgMCwyLjcwNDY0MDk4IDAsMTAuMDk5MDI4NiBMMCwyNS45MDA5NzE0IEMwLDMzLjI5NTM1OSAyLjcwNTExMjc3LDM2IDEwLjEwMDk5OTUsMzYgTDI1Ljg5NDE4NiwzNiBDMzMuMjg5ODYzNCwzNiAzNiwzMy4yOTUzNTkgMzYsMjUuOTAwOTcxNCBMMzYsMTAuMDk5MDI4NiBDMzYsMi43MDQ2NDA5OCAzMy4yOTQ4ODcyLDAgMjUuODk5MDAwNSwwIEwxMC4xMDA5OTk1LDAgWiIgaWQ9IkZpbGwtMSIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMTUuNzAzMDUxNSwyMC44NzkyNTEgTDE3LjE0ODMxOTIsMjAuODc5MjUxIEwxNi40MjMyMjYsMTkuMTkyOTYwNyBMMTUuNzAzMDUxNSwyMC44NzkyNTEgWiBNMTUuMzQ3MTU5OCwyMS43MjkwNTExIEwxNC45MTgzNTM2LDIyLjcxMDIxMjggTDEzLjk0MjExMDgsMjIuNzEwMjEyOCBMMTYuMDE4MTQ1OSwxOC4wMDAyODkzIEwxNi44NjE4Njk4LDE4LjAwMDI4OTMgTDE4LjkyOTUxNCwyMi43MTAyMTI4IEwxNy45MjcyMzAzLDIyLjcxMDIxMjggTDE3LjUwMzkyMTYsMjEuNzI5MDUxMSBMMTUuMzQ3MTU5OCwyMS43MjkwNTExIFogTTMxLjA1NjQ1MjksMjIuNzA2NzQwNyBMMzIsMjIuNzA2NzQwNyBMMzIsMTggTDMxLjA1NjQ1MjksMTggTDMxLjA1NjQ1MjksMjIuNzA2NzQwNyBaIE0yNy4zMDEwNzE2LDIwLjY4NDgxMjYgTDI5LjA0MDMxMTcsMjAuNjg0ODEyNiBMMjkuMDQwMzExNywxOS44MjY2MjE2IEwyNy4zMDEwNzE2LDE5LjgyNjYyMTYgTDI3LjMwMTA3MTYsMTguODYxOTUyNCBMMjkuODI1ODc3NiwxOC44NjE5NTI0IEwyOS44MjU4Nzc2LDE4LjAwMzQ3MjEgTDI2LjM1NzgxMzgsMTguMDAzNDcyMSBMMjYuMzU3ODEzOCwyMi43MDk5MjM0IEwyOS45MTY3MzEzLDIyLjcwOTkyMzQgTDI5LjkxNjczMTMsMjEuODUxNDQzMSBMMjcuMzAxMDcxNiwyMS44NTE0NDMxIEwyNy4zMDEwNzE2LDIwLjY4NDgxMjYgWiBNMjMuNTUyMDU1OSwyMS4yNDA5Mjk2IEwyMi40ODIzNTUzLDE4IEwyMS43MDE3MDgyLDE4IEwyMC42MzIwMDc1LDIxLjI0MDkyOTYgTDE5LjU5MDk1MTgsMTguMDAyNjA0MSBMMTguNTczMDQzNiwxOC4wMDI2MDQxIEwyMC4yMTU5MzI1LDIyLjcxMjgxNjkgTDIxLjAwNzI4NTIsMjIuNzEyODE2OSBMMjIuMDc4NzIxOSwxOS42MTg4NzM0IEwyMy4xNTAxNTg2LDIyLjcxMjgxNjkgTDIzLjk0ODQ1NTYsMjIuNzEyODE2OSBMMjUuNTg3MDA0NCwxOC4wMDI2MDQxIEwyNC41OTU0MjYzLDE4LjAwMjYwNDEgTDIzLjU1MjA1NTksMjEuMjQwOTI5NiBaIE0xMi41MDE3NjE5LDIwLjY5NzgzMyBDMTIuNTAxNzYxOSwyMS40NjQwMTMgMTIuMTIxMjc2LDIxLjg3MzQzMzIgMTEuNDMwMzI1MiwyMS44NzM0MzMyIEMxMC43MzU2MTI5LDIxLjg3MzQzMzIgMTAuMzUzMTAxNywyMS40NTIxNDk5IDEwLjM1MzEwMTcsMjAuNjY1MTM3MyBMMTAuMzUzMTAxNywxOC4wMDMxODI4IEw5LjM5NjgyMzQzLDE4LjAwMzE4MjggTDkuMzk2ODIzNDMsMjAuNjk3ODMzIEM5LjM5NjgyMzQzLDIyLjAyMzMxMjggMTAuMTMzNDkwNCwyMi43ODM0MTY1IDExLjQxNzMwNDgsMjIuNzgzNDE2NSBDMTIuNzEzODUwMiwyMi43ODM0MTY1IDEzLjQ1NzE3MjEsMjIuMDA4ODQ1NiAxMy40NTcxNzIxLDIwLjY1ODQ4MjQgTDEzLjQ1NzE3MjEsMTguMDAwMjg5MyBMMTIuNTAxNzYxOSwxOC4wMDAyODkzIEwxMi41MDE3NjE5LDIwLjY5NzgzMyBaIE03LjExNTM1NDgxLDE4LjAwMDI4OTMgTDguMDcxMDU0MzQsMTguMDAwMjg5MyBMOC4wNzEwNTQzNCwyMi43MTMxMDYyIEw3LjExNTM1NDgxLDIyLjcxMzEwNjIgTDcuMTE1MzU0ODEsMjAuNzk5MTAzIEw0Ljk1NjI3ODIyLDIwLjc5OTEwMyBMNC45NTYyNzgyMiwyMi43MTMxMDYyIEw0LDIyLjcxMzEwNjIgTDQsMTguMDAwMjg5MyBMNC45NTYyNzgyMiwxOC4wMDAyODkzIEw0Ljk1NjI3ODIyLDE5LjkwMTI3MjEgTDcuMTE1MzU0ODEsMTkuOTAxMjcyMSBMNy4xMTUzNTQ4MSwxOC4wMDAyODkzIFoiIGlkPSJGaWxsLTEiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICAgICAgPHBhdGggZD0iTTE4LDEyIEMxNC42OTEyNjE2LDEyIDEyLDkuMzA4NDQ5MDcgMTIsNiBMMTIuODQ3NTExNiw2IEMxMi44NDc1MTE2LDguODQwODU2NDggMTUuMTU5MTQzNSwxMS4xNTIxOTkxIDE4LDExLjE1MjE5OTEgQzIwLjg0MDg1NjUsMTEuMTUyMTk5MSAyMy4xNTI0ODg0LDguODQwODU2NDggMjMuMTUyNDg4NCw2IEwyNCw2IEMyNCw5LjMwODQ0OTA3IDIxLjMwODQ0OTEsMTIgMTgsMTIiIGlkPSJGaWxsLTMiIGZpbGw9IiNGRkZGRkYiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==" alt="Huawei AppGallery" width={40} height={40} className="mr-2" />
              Huawei AppGallery
            </a>
          </Link>
        </div>
      </section>

      <footer className="w-full bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 My App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}