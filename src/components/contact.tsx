import { TbBrandWhatsappFilled } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";

export default function Contact() {
  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Captura automática dos dados
    const data = Object.fromEntries(new FormData(e.currentTarget));

    const name = data.name as string;
    const email = data.email as string;
    const number = data.number as string;
    const text = data.textarea as string;

    // Monta a mensagem formatada
    const mensagem = `
Olá Iago! Estou entrando em contato pelo seu portfólio.

👤 *Nome:* ${name}
📧 *Email:* ${email}
📱 *Telefone:* ${number}

💬 *Mensagem:*
${text}
`;

    // Seu número de WhatsApp
    const numero = "558491454957";

    // URL final
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    // Abre no WhatsApp
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="w-full min-h-screen md:mt-20">
      <div className="h-screen flex flex-col justify-center items-center px-2">
        <div className="w-full flex justify-baseline flex-col px-4 mb-6">
          <h2>Contato</h2>
          <p>Teste</p>
        </div>
        <form
          onSubmit={sendMessage}
          className="flex flex-col md:flex-row md:flex-wrap w-full px-2"
        >
          <div className="md:w-[49%] w-full mr-[2%] mb-5">
            <label className="block text-gray-400 px-2" htmlFor="name">
              Nome
            </label>
            <input
              className="w-full bg-blue-700/50 backdrop-blur-md p-3 rounded-2xl shadow-2xl"
              id="name"
              name="name"
              type="text"
              placeholder="Digite seu nome."
            />
          </div>

          <div className="md:w-[49%] w-full mb-10">
            <label className="block text-gray-400 px-2" htmlFor="email">
              E-mail
            </label>
            <input
              className="w-full bg-blue-700/50 backdrop-blur-md p-3 rounded-2xl shadow-2xl"
              id="email"
              name="email"
              type="email"
              placeholder="Digite seu Email."
            />
          </div>

          <div className="w-[100%] mb-10">
            <label className="block text-gray-400 px-2" htmlFor="number">
              Número
            </label>
            <input
              className="w-full bg-blue-700/50 backdrop-blur-md p-3 rounded-2xl shadow-2xl"
              id="number"
              name="number"
              type="number"
              placeholder="Digite seu Nuḿero de telefone."
            />
          </div>

          <div className="w-[100%]">
            <label className="block text-gray-400 px-2" htmlFor="textarea">
              Assunto
            </label>
            <textarea
              className="w-full bg-blue-700/50 backdrop-blur-md p-10 rounded-2xl resize-none shadow-2xl"
              id="textarea"
              name="textarea"
              placeholder="Fale um pouco sobre o assunto do contato."
            />
          </div>
          <button
            className="mt-10 bg-blue-500 p-2 rounded-lg text-blue-100 shadow-2xl"
            type="submit"
          >
            Enviar
          </button>
        </form>

        <div className="text-center w-full mt-10">
          <h3 className="text-gray-400 mt-5">Entre em contato direto.</h3>
          <div className="text-blue-500 flex justify-center gap-5 mt-5">
            {/* WhatsApp */}
            <a
              href="https://wa.me/558491454957"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TbBrandWhatsappFilled size={40} />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/iago193"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub size={40} />
            </a>

            {/* Email */}
            <a
              href="mailto:iago.silva6969@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdMarkEmailUnread size={40} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
