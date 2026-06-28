'use client'
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function ContactForm({ dict }) {
  const [status, setStatus] = useState(null);

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

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('success');
        toast.success(dict.successMsg, { duration: 4000 });
        form.reset();
      } else {
        setStatus('error');
        toast.error(dict.errorMsg, { duration: 4000 });
      }
    } catch (error) {
      setStatus('error');
      toast.error(dict.errorMsg, { duration: 4000 });
    }
  }

  return (
    <>
      <Toaster position="bottom-right" />
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

          {/* OVO JE NOVI DEO ZA STATUS ISPIS */}
          {status === 'success' && (
            <div className="flex items-center gap-2 text-green-600 font-medium animate-in fade-in duration-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span>{dict.successMsg}</span>
            </div>
          )}

          {status === 'error' && (
            <div className="flex items-center gap-2 text-red-600 font-medium animate-in fade-in duration-500">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              <span>{dict.errorMsg}</span>
            </div>
          )}
        </div>
      </form>

      
    </>
  );
}