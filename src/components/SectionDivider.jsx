function SectionDivider() {
  return (
    <div className="relative h-20 flex items-center justify-center">
      <span
        className="
          w-[80%]
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent
        "
      />
    </div>
  );
}

export default SectionDivider;
