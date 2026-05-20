export default function PageHeader({ title, description, }) {

  return (

    <div
      className="
      flex
      items-center
      gap-5
      mb-2
    "
    >

      {/* Title */}
      <h1
        className="
        text-3xl
        font-semibold
        tracking-tight
        text-white
      "
      >
        {title}
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
"
>
  {description}
</p>
    </div>

  );

}