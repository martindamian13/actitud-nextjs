export default function Footer() {
  return (
    <footer className="bg-deep-blue-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="mb-8">
          <p className="text-medium-gray mb-4">
            &copy; {new Date().getFullYear()} Actitud Edificio Corporativo. Todos los derechos reservados.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-sm text-medium-gray leading-relaxed">
            La información, imágenes y descripciones contenidas en este sitio representan la visión y estándares de calidad propuestos para el proyecto. Nos comprometemos a recrear estos elementos al máximo nivel y de la forma más fiel posible, dentro de lo técnicamente viable.
          </p>
        </div>
      </div>
    </footer>
  );
}
