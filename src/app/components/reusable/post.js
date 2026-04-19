import Link from 'next/link'

export default function Post({title, description, link, category, image}) {
  return (
    <div className={'post border-l pl-5 flex flex-col md:grid md:grid-cols-[min-content_1fr] gap-4 transition-colors duration-300 ' + (category === 'Post' ? 'hover:border-[var(--theme-highlight)] border-[var(--theme-highlight)]/50' : 'hover:border-[var(--theme-primary)] border-[var(--theme-light)]')}>
        {/* Image */}
        <div className="w-full h-[200px] md:w-[200px] md:h-[150px] flex items-center justify-center">
            <img src={image} alt={title} className="w-full h-full object-cover object-top rounded-md" />
        </div>
        {/* Content */}
        <div className='flex flex-col gap-0.5'>
            <h3 className='text-2xl font-bold'>{title}</h3>
            <p className='text-sm text-neutral-400 line-clamp-3 grow'>{description}</p>
            <Link href={link} className='text-[var(--theme-light)] hover:underline'>{link}</Link>
            <div className='flex justify-between align-bottom mt-1'>
              <span className={"text-xs px-4 py-1 rounded-full self-end " + (category === 'Post' ? 'bg-[var(--theme-highlight)] text-[var(--theme-darkest)]' : 'bg-[var(--theme-primary)] text-white')}>{category}</span>
              <a href={link} className='group bg-white text-black px-4 py-1.5 rounded-md text-sm font-sm block text-center hover:bg-[var(--theme-light)] transition'>{category === 'Post' ? 'Read Post' : 'View Project'}<span className='inline-block translate-x-1 transition-transform group-hover:translate-x-2'>→</span></a>
            </div>
        </div>
    </div>
  );
}