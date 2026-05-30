export default function PageHeader({
  title,
  description,
}) {

  return (

    <div
      className="
      flex
      items-center
      gap-5
      mb-8
    "
    >

      {/* Title */}
      <h1
        className="
        text-3xl
        font-semibold
        tracking-tight
        text-white
        leading-none
      "
      >
        {title} {/* = Users */}
      </h1>

      {/* Divider */}
      <div
        className="
        w-px
        h-6
        bg-white/10
      "
      />

      {/* Description */}
      <p
        className="
        text-sm
        text-zinc-500
        font-medium
        leading-none
      "
      >
        {description} {/* = Manage hotspot accounts */}
      </p>

    </div>

  );

}