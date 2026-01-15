export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-white">
      <div className="container-page py-6">
        <div className="text-center text-sm text-gray-500">
          <div>
            © {year} Rafał Kubowicz. Wszelkie prawa zastrzeżone.
          </div>
        </div>
      </div>
    </footer>
  );
}
