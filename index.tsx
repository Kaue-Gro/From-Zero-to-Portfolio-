import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Terminal, 
  Database, 
  Server, 
  Code2, 
  User, 
  Briefcase, 
  ChevronRight,
  ExternalLink,
  Menu,
  X
} from 'lucide-react';

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Efeito para mudar a cor da navbar ao rolar a página
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 font-sans selection:bg-emerald-500/30">
      
      {/* Navegação */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-bold text-white tracking-tighter cursor-pointer" onClick={() => scrollToSection('home')}>
            Kaue<span className="text-emerald-400">.dev</span>
          </div>
          
          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <button onClick={() => scrollToSection('sobre')} className="hover:text-emerald-400 transition-colors">Sobre</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-emerald-400 transition-colors">Habilidades</button>
            <button onClick={() => scrollToSection('projetos')} className="hover:text-emerald-400 transition-colors">Projetos</button>
            <button onClick={() => scrollToSection('contato')} className="hover:text-emerald-400 transition-colors">Contato</button>
          </div>

          {/* Menu Mobile Button */}
          <button 
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-800 border-b border-slate-700 shadow-xl py-4 px-6 flex flex-col space-y-4">
            <button onClick={() => scrollToSection('sobre')} className="text-left hover:text-emerald-400">Sobre</button>
            <button onClick={() => scrollToSection('skills')} className="text-left hover:text-emerald-400">Habilidades</button>
            <button onClick={() => scrollToSection('projetos')} className="text-left hover:text-emerald-400">Projetos</button>
            <button onClick={() => scrollToSection('contato')} className="text-left hover:text-emerald-400">Contato</button>
          </div>
        )}
      </nav>

      {/* Seção Hero */}
      <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 text-sm font-medium">
              <Terminal size={16} />
              <span>Desenvolvedor Backend</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Construindo APIs <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Robustas & Escaláveis.
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl mx-auto md:mx-0">
              Olá, eu sou o Kauê Henrique. Especialista em resolver problemas complexos no back-end com Java, Spring Boot e Arquitetura Limpa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <button 
                onClick={() => scrollToSection('projetos')}
                className="px-8 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold transition-all flex items-center justify-center gap-2"
              >
                Ver Projetos <ChevronRight size={18} />
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="px-8 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition-all border border-slate-700"
              >
                Entrar em Contato
              </button>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500 blur-[80px] opacity-20 rounded-full"></div>
              {/* Espaço para a foto de perfil. Usando um gradiente elegante enquanto não há foto. */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-emerald-400/30 p-2 relative z-10">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center overflow-hidden">
                  <User size={64} className="text-slate-600" />
                  {/* Para usar sua foto real, substitua o <User /> por: <img src="SuaFoto.jpg" alt="Kauê Henrique" className="w-full h-full object-cover" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Sobre */}
      <section id="sobre" className="py-20 bg-slate-800/50 border-y border-slate-800 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-1 bg-emerald-400 rounded"></div>
            <h2 className="text-3xl font-bold text-white">Sobre Mim</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 text-lg text-slate-300 leading-relaxed">
            <div className="space-y-6">
              <p>
                Sou um desenvolvedor apaixonado pelos bastidores das aplicações. Minha jornada é focada no ecossistema 
                <strong className="text-white font-semibold"> Java</strong>, criando a ponte segura entre o que o usuário deseja e onde os dados realmente vivem.
              </p>
              <p>
                Tenho estudado intensamente arquitetura de software, mapeamento de banco de dados com JPA/Hibernate, 
                e a construção de APIs REST padronizadas e profissionais usando <strong className="text-white font-semibold">Spring Boot</strong>.
              </p>
            </div>
            <div className="space-y-6">
              <p>
                Meu objetivo é garantir que o sistema não apenas funcione, mas que seja seguro, 
                bem documentado e capaz de lidar com erros graciosamente. 
              </p>
              <p>
                Quando não estou codando ou analisando logs no console do IntelliJ, estou explorando 
                novas formas de deixar o código mais limpo e manutenível.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Habilidades */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-1 bg-emerald-400 rounded"></div>
            <h2 className="text-3xl font-bold text-white">Tecnologias & Ferramentas</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <SkillCard icon={<Code2 />} title="Java" desc="Orientação a Objetos & Regras de Negócio" />
            <SkillCard icon={<Server />} title="Spring Boot" desc="REST APIs, JPA, Validation" />
            <SkillCard icon={<Database />} title="PostgreSQL" desc="Modelagem Relacional & SQL" />
            <SkillCard icon={<Terminal />} title="Git & GitHub" desc="Versionamento & Commits Semânticos" />
            <SkillCard icon={<ExternalLink />} title="Postman" desc="Testes de Integração e JSON" />
            <SkillCard icon={<Briefcase />} title="Arquitetura" desc="MVC, Services, Repositories" />
          </div>
        </div>
      </section>

      {/* Seção Projetos */}
      <section id="projetos" className="py-20 bg-slate-800/50 border-y border-slate-800 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-1 bg-emerald-400 rounded"></div>
            <h2 className="text-3xl font-bold text-white">Projetos em Destaque</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Projeto 1 */}
            <div className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden hover:border-emerald-400/50 transition-colors group">
              <div className="p-8 space-y-6">
                <div className="w-12 h-12 bg-emerald-400/10 rounded-lg flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                  <Server size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Sistema de Clientes API</h3>
                <p className="text-slate-400">
                  Uma API RESTful profissional desenvolvida em Java Spring Boot para gerenciamento de clientes. 
                  Implementa rigorosas regras de negócio para evitar duplicidade de dados no banco PostgreSQL.
                </p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider">Features Principais:</h4>
                  <ul className="text-sm text-slate-300 space-y-1 list-disc list-inside">
                    <li>CRUD completo (POST, GET, PUT, DELETE)</li>
                    <li>Atualização Parcial via verbo HTTP PATCH</li>
                    <li>Tratamento Global de Exceções (@RestControllerAdvice)</li>
                    <li>Respostas padronizadas de erro (400 Bad Request / 404 Not Found)</li>
                    <li>Validação de entrada com Spring Validation (@NotBlank, @Email)</li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 pt-4">
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-xs font-medium border border-slate-700">Java</span>
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-xs font-medium border border-slate-700">Spring Boot</span>
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-xs font-medium border border-slate-700">PostgreSQL</span>
                  <span className="px-3 py-1 bg-slate-800 rounded-full text-xs font-medium border border-slate-700">Postman</span>
                </div>
                <div className="pt-6 border-t border-slate-800 flex gap-4">
                  <a href="#" className="flex items-center gap-2 text-sm font-medium text-emerald-400 hover:text-emerald-300">
                    <Github size={16} /> Ver Repositório
                  </a>
                </div>
              </div>
            </div>

            {/* Placeholder para próximos projetos */}
            <div className="bg-slate-800/30 border border-slate-700/50 border-dashed rounded-xl flex flex-col items-center justify-center p-8 text-center opacity-70">
              <Terminal size={48} className="text-slate-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-400 mb-2">Em Construção...</h3>
              <p className="text-slate-500 text-sm max-w-xs">
                Mais projetos backend estão sendo desenvolvidos, focados em segurança e testes automatizados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Contato */}
      <section id="contato" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-white">Vamos Construir Algo?</h2>
          <p className="text-xl text-slate-400">
            Estou sempre aberto a novas oportunidades para aplicar meus conhecimentos em Backend, resolver problemas e aprender novas arquiteturas.
          </p>
          <div className="flex justify-center gap-6 pt-4">
            <a href="https://github.com/kaue-gro" target="_blank" rel="noreferrer" className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-emerald-500 hover:-translate-y-1 transition-all">
              <Github size={24} />
            </a>
            <a href="#" className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-emerald-500 hover:-translate-y-1 transition-all">
              <Linkedin size={24} />
            </a>
            <a href="mailto:seu-email@exemplo.com" className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center text-slate-300 hover:text-white hover:bg-emerald-500 hover:-translate-y-1 transition-all">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-slate-800 bg-slate-900 text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Kauê Henrique. Desenvolvido com React & Tailwind.</p>
      </footer>
    </div>
  );
}

// Sub-componente de cartão para Habilidades
function SkillCard({ icon, title, desc }) {
  return (
    <div className="p-6 bg-slate-800/30 border border-slate-700 rounded-xl hover:border-emerald-400/50 hover:bg-slate-800/80 transition-all flex flex-col items-center text-center gap-4 group">
      <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-slate-400 group-hover:text-emerald-400 transition-colors shadow-inner">
        {icon}
      </div>
      <div>
        <h3 className="text-white font-bold mb-1">{title}</h3>
        <p className="text-xs text-slate-400">{desc}</p>
      </div>
    </div>
  );
}
