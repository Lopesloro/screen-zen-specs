import { Glasses, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl amber-gradient flex items-center justify-center">
                <Glasses className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="text-xl font-bold">BlueShield Pro</span>
            </div>
            <p className="text-primary-foreground/70 max-w-sm">
              Proteção profissional contra luz azul para quem passa horas em frente às telas. 
              Cuide da sua visão com tecnologia de ponta.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><a href="#" className="hover:text-accent transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Produtos</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <span>contato@blueshieldpro.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span>São Paulo, SP</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center text-primary-foreground/50 text-sm">
          <p>© 2025 BlueShield Pro. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
