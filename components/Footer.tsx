export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 border-t border-gray-800 text-gray-500 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-white font-bold">
          NextGen <span className="text-brand-500">Websites</span>
        </span>
        <p className="text-sm">© {year} NextGen Websites. All rights reserved.</p>
        <div className="flex gap-6 text-sm">
          <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  )
}
