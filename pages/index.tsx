import Head from 'next/head'
import { useCallback, useState } from 'react';
import {CTA} from '../components/CTA'
export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  const handleOnPhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const { value } = target
    setPhone(value)
  }
  const handleOnNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const { value } = target
    setName(value)
  }
  const handleOnEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    const { value } = target
    setEmail(value)
  }

    const validateEmail = (email: string) => {
      const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      return re.test(email);
    };
  const handleOnSubmit = () => {
    try {
      setIsLoading(true)
      if (email.length === 0 || name.length === 0 || phone.length === 0) {
        return
      }
      if (!validateEmail(email)) {
        return
      }

      alert('Muito obrigado, logo entraremos em contato.')
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <div className="w-full h-full min-h-screen bg-gradient-to-b from-white to-background flex justify-center">
      <Head>
        <title>Re9Piscinas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full h-full flex flex-col justify-center items-center">
        <header className="flex w-full lg:w-2/3 justify-between items-center mx-auto">
        <img src="/images/logo.png" className="w-52"/>
         <CTA />
        </header>
        <section className="w-full lg:w-2/3 flex flex-col lg:flex-row justify-between items-center mt-40">
          <div className="flex flex-col items-center lg:items-start lg:w-1/2">
            <h1 className="font-bold text-3xl text-center lg:text-left lg:text-5xl">Tenha momentos maravilhosos em familia</h1>
            <p className="my-3 w-2/3 text-xl text-gray-600 font-medium text-center lg:text-left">Deixe que cuidamos da sua piscina para você, para que você possa ter os melhores momentos com quem ama.</p>
            <CTA />
          </div>
          <div className="mt-10 lg:mt-0 lg:w-1/2 relative">
            <img src="/images/pool.jpg" className="filter blur-xl opacity-50 absolute inset-y-4" />
            <img src="/images/pool.jpg" className="w-full h-full relative rounded-md" />
          </div>
        </section>
        <section className="w-full flex flex-col justify-center items-center mt-40 bg-primary py-10">
          <h2 className="font-bold text-white text-3xl lg:text-4xl ">Serviços</h2>
          <div className="flex flex-col lg:flex-row w-2/3 justify-between items-center mt-6">
            <div className="flex flex-col items-center jutify-start w-40 h-44">
              <p className="font-bold text-white text-2xl text-center">Limpeza</p>
              <p className="text-white opacity-70 text-lg text-center mt-4">Eliminamos impurezas e sujeiras</p>
            </div>
            <div className="flex flex-col items-center jutify-start w-40 h-44">
              <p className="font-bold text-white text-2xl text-center">Manutenção</p>
              <p className="text-white opacity-70 text-lg text-center mt-4">Utilizamos os melhores produtos pelo bem estar de sua familia</p>
            </div>
            <div className="flex flex-col items-center jutify-start w-40 h-44">
              <p className="font-bold text-white text-2xl text-center">Tratamento</p>
              <p className="text-white opacity-70 text-lg text-center mt-4">Mantemos a água de sua piscina sempre azul</p>
            </div>
          </div>
        </section>
        <section className="w-full lg:w-2/3 flex flex-col justify-between items-center mt-40">
            <h1 className="font-bold text-4xl">Faça um orçamento</h1>
            <form className="mt-10 py-10 w-80 flex flex-col items-center justify-between space-y-5" id="form">
             <input placeholder="Nome" className="w-full h-16 rounded-md pl-3 font-bold shadow" type="name" onChange={handleOnNameChange}></input> 
             <input placeholder="Email" className="w-full h-16 rounded-md pl-3 font-bold shadow" type="email" onChange={handleOnEmailChange}></input> 
             <input placeholder="Telefone" className="w-full h-16 rounded-md pl-3 font-bold shadow" onChange={handleOnPhoneChange}></input> 
             <div className="relative w-full">
                <button className="w-full h-16 font-bold  bg-primary rounded-md absolute filter blur-lg opacity-80 inset-y-3"></button>
                <button disabled={isLoading} onClick={handleOnSubmit} type="button" className="w-full h-16 font-bold  bg-primary text-white rounded-md cursor-pointer relative disabled:bg-gray-400">
                    Solicite um orçamento
                </button>
              </div>
            </form>
        </section>
        <footer className='w-full bg-primary flex flex-col items-center justify-center py-5'>
          <p className="font-bold text-white">© 2021 - Re9Piscinas</p>
        </footer>
      </main>
    </div>
  )
}
