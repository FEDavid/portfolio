export default function SkillCard({ title, description, Icon }) {
  return (
    <div className="
      relative
      flex-1
      p-5
      rounded-lg
      bg-[var(--theme-light)]/60
      border border-white/10
      overflow-hidden
      transition-all duration-300
      hover:bg-[var(--theme-light)]/70
      hover:-translate-y-1
    ">

      {/* Background Icon */}
      <div className="
        absolute 
        left-[-20px] 
        top-1/2 
        -translate-y-1/2 
        text-white/5
        pointer-events-none
      ">
        <Icon size={120} strokeWidth={1} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="font-semibold text-white mb-2">
          {title}
        </h3>

        <p className="text-sm text-white/70 leading-relaxed">
          {description}
        </p>
      </div>

    </div>
  )
}