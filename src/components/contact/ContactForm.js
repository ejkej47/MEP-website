'use client'
import { useState } from 'react';

export default function ContactForm({ dict }) {
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('loading');

    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    setStatus(res.ok ? 'success' : 'error');
  }

  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={handleSubmit}>
      <div className="space-y-4">
        <input name="name" type="text" placeholder={dict.name} required className="w-full p-4 border border-neutral-300 bg-neutral-50 outline-none focus:border-black" />
        <input name="email" type="email" placeholder={dict.email} required className="w-full p-4 border border-neutral-300 bg-neutral-50 outline-none focus:border-black" />
        <input name="subject" type="text" placeholder={dict.subject} required className="w-full p-4 border border-neutral-300 bg-neutral-50 outline-none focus:border-black" />
      </div>
      <div>
        <textarea name="message" placeholder={dict.message} required className="w-full h-full min-h-[200px] p-4 border border-neutral-300 bg-neutral-50 outline-none focus:border-black resize-none"></textarea>
      </div>

      <div className="md:col-span-2 flex flex-col gap-4">
        <button 
          disabled={status === 'loading'}
          className="bg-black text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors w-full md:w-auto disabled:opacity-50"
        >
          {status === 'loading' ? '...' : dict.btn}
        </button>

        {status === 'success' && <p className="text-green-600 font-medium">Poruka je uspešno poslata!</p>}
        {status === 'error' && <p className="text-red-600 font-medium">Greška, pokušaj ponovo.</p>}
      </div>
    </form>
  );
}