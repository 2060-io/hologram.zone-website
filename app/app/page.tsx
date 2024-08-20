import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="w-full bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-center">
          <Image src="/logo-hologram.svg" alt="Logo" width={150} height={50} />
        </div>
      </header>

      <section className="container mx-auto my-12 md:my-16 lg:my-20 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4 md:text-3xl lg:text-4xl">
          Download our app
        </h2>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          <Link href="https://play.google.com/store/apps/details?id=com.myapp" legacyBehavior>
            <a className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors duration-300 w-full md:w-auto">
              Google Play
            </a>
          </Link>
          <Link href="https://apps.apple.com/us/app/myapp/id12345678" legacyBehavior>
            <a className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors duration-300 w-full md:w-auto">
              App Store
            </a>
          </Link>
          <Link href="https://appgallery.huawei.com/app/C12345678" legacyBehavior>
            <a className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors duration-300 w-full md:w-auto">
              Huawei AppGallery
            </a>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 My App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
