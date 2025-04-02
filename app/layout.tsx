import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Anomaly Detection Dashboard',
  description: 'A dashboard for monitoring and analyzing anomalies in system logs',
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <nav className="bg-white dark:bg-gray-800 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">AnomalyDetect</span>
                  </div>
                  <div className="ml-6 flex space-x-8">
                    <Link href="/" className="text-gray-900 dark:text-gray-100 hover:text-gray-500 dark:hover:text-gray-300 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium">
                      Dashboard
                    </Link>
                    <Link href="/anomalies" className="text-gray-900 dark:text-gray-100 hover:text-gray-500 dark:hover:text-gray-300 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium">
                      Anomalies & Alerts
                    </Link>
                    <Link href="/user-management" className="text-gray-900 dark:text-gray-100 hover:text-gray-500 dark:hover:text-gray-300 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium">
                      User Management
                    </Link>
                    <Link href="/custom-configurations" className="text-gray-900 dark:text-gray-100 hover:text-gray-500 dark:hover:text-gray-300 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium">
                      Custom Configurations
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <main className="py-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}



import './globals.css'