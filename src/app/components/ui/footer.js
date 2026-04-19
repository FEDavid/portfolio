'use client'
import emailjs from '@emailjs/browser'

const serviceId = 'contact_service';
const templateId = 'contact_form';
const publicKey = 'wtfUsb_Qf6KL50Nns';

export default function Footer() {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(serviceId, templateId, e.target, publicKey)
      .then((result) => {
        console.log(result);
        alert("Message sent!");
        e.target.reset();
      }, (error) => {
        console.log(error);
      });
  };

  return (
    <footer id="footer" className="flex flex-col items-center bg-[#0d0d0d] px-6 md:px-12">
      <div className="max-w-6xl w-full pt-6 md:py-12 flex flex-col md:flex-row justify-between gap-6 md:gap-0">
        {/* Column 1 */}
        <div className="text-center md:text-left">
          <p className="font-funnel text-xl whitespace-nowrap">david-mould.<span className="font-[1000] text-[var(--theme-light)]">dev</span></p>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-0.5 md:gap-2 md:text-left text-center">
          <p className="text-sm tracking-widest text-neutral-500">Get in touch with me!</p>
          <a href="mailto:chromedm@live.co.uk" className="text-sm text-neutral-400 hover:text-[var(--theme-light)] transition-colors">Email</a>
          <a href="https://github.com/FEDavid" className="text-sm text-neutral-400 hover:text-[var(--theme-light)] transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/david-t-mould/" className="text-sm text-neutral-400 hover:text-[var(--theme-light)] transition-colors">LinkedIn</a>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-0.5 md:gap-2 md:text-left text-center">
          <p className="text-sm tracking-widest text-neutral-500">More about me</p>
          <a href="#hero" className="text-sm text-neutral-400 hover:text-[var(--theme-light)] transition-colors">Home</a>
          <a href="#about" className="text-sm text-neutral-400 hover:text-[var(--theme-light)] transition-colors">About Me</a>
          <a href="#content" className="text-sm text-neutral-400 hover:text-[var(--theme-light)] transition-colors">Projects</a>
          <a href="#posts" className="text-sm text-neutral-400 hover:text-[var(--theme-light)] transition-colors">Posts</a>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col gap-2 text-center md:text-right">
          <p className="text-sm tracking-widest text-neutral-500">Have a project in mind?</p>
          <form onSubmit={sendEmail} className='flex flex-col'>
            <input name="user_email" type="email" placeholder="Your email" className="text-sm px-2 py-1 rounded-md bg-[#1a1a1a] text-white focus:outline-none focus:ring-2 focus:ring-[var(--theme-primary)] transition-colors mb-2" required />
            <textarea name="user_message" placeholder="Your message" className="text-sm px-2 py-1 rounded-md bg-[#1a1a1a] text-white focus:outline-none focus:ring-2 focus:ring-[var(--theme-primary)] transition-colors mb-2" required></textarea>
            <button type="submit" className="group bg-[var(--theme-primary)] text-white px-2 py-1 rounded-md text-sm font-medium hover:bg-[var(--theme-light)] transition">Let's talk<span className='inline-block translate-x-1 transition-transform group-hover:translate-x-2'>→</span></button>
          </form>
        </div>
      </div>

      <p className="text-sm text-neutral-500 md:col-span-4 text-center my-12">
        &copy; {new Date().getFullYear()} David Mould. All rights reserved.
      </p>

    </footer>
  );
}