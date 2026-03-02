import Link from 'next/link'
import {FileText} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <div className="mb-4 flex items-center justify-center space-x-2">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-lg"
            style={{backgroundColor: '#06402B'}}
          >
            <FileText className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold">Bill Builder</span>
        </div>
        <p className="mb-4 text-gray-400">Invoicing made simple and beautiful</p>
        <div className="mb-4 flex items-center justify-center gap-6 text-sm">
          <Link className="text-gray-300 transition hover:text-white" href="/privacy">
            Privacy
          </Link>
          <Link className="text-gray-300 transition hover:text-white" href="/terms">
            Terms
          </Link>
          <Link className="text-gray-300 transition hover:text-white" href="/delete-account">
            Delete Account
          </Link>
        </div>
        <p className="text-sm text-gray-500">© 2025 Bill Builder. All rights reserved.</p>
      </div>
    </footer>
  )
}
