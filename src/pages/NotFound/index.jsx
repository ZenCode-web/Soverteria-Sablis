import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    // bg-background (Cor de fundo #FDF8F2)
    <main className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
      
      {/* Título com a cor de destaque (Secondary #E7C477) */}
      <h1 className="text-9xl font-bold text-secondary mb-4 drop-shadow-sm">
        404
      </h1>

      {/* Título do erro (Header #3E2008) */}
      <h2 className="text-header font-secondary text-2xl md:text-3xl font-bold uppercase tracking-widest mb-4">
        Página não encontrada
      </h2>

      {/* Texto de apoio (Accent #915727) */}
      <p className="text-accent max-w-md mb-8 leading-relaxed">
        Ops! Parece que o look que você estava procurando não está mais na nossa vitrine ou o endereço foi digitado incorretamente.
      </p>

      {/* Botão com o Gradient que você pediu (#553212 -> #915727) */}
      <button
        onClick={() => navigate("/")}
        className="bg-golden-gradient text-white font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 active:scale-95"
      >
        VOLTAR PARA A HOME
      </button>

      {/* Detalhe estético no rodapé com cor de componentes (Primary #C9963A) */}
      <div className="mt-12 w-16 h-1 bg-primary rounded-full"></div>
    </main>
  );
};

export default NotFound;