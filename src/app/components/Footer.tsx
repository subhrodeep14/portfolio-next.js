export default function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 py-4">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
      </div>
    </footer>
  )
}

