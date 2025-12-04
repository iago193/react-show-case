export default function Contact() {
  return (
    <section className="w-full min-h-screen">
      <div className="h-screen flex justify-center items-center px-2">
        <form action="" className="flex flex-col md:flex-row md:flex-wrap w-full px-2">
            
          <div className="md:w-[49%] w-full mr-[2%] mb-5">
            <label className="block text-gray-400 px-2" htmlFor="name">
              Nome
            </label>
            <input
              className="w-full bg-blue-700/50 backdrop-blur-md p-3 rounded-2xl shadow-2xl"
              id="name"
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
              type="number"
              placeholder="Digite seu Nuḿeoro de telefone."
            />
          </div>

          <div className="w-[100%]">
            <label className="block text-gray-400 px-2" htmlFor="text">
              Assunto
            </label>
            <textarea
              className="w-full bg-blue-700/50 backdrop-blur-md p-10 rounded-2xl resize-none shadow-2xl"
              id="text"
              placeholder="Fale um pouco sobre o assunto do contato."
            />
          </div>
          <button className="mt-10 bg-blue-500 p-2 rounded-lg text-blue-100 shadow-2xl" type="button">Enviar</button>
        </form>
      </div>
    </section>
  );
}
