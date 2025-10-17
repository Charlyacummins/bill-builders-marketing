import { FileText } from "lucide-react";

export default function Footer() {
  return (
     <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{backgroundColor: '#06402B'}}>
              <FileText className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold">Bill Builder</span>
          </div>
          <p className="text-gray-400 mb-4">Invoicing made simple and beautiful</p>
          <p className="text-gray-500 text-sm">© 2025 Bill Builder. All rights reserved.</p>
        </div>
      </footer>
  )
}
