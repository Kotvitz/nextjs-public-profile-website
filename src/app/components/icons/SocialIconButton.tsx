type SocialIconButtonProps = {
  href: string;
  label: string;
  children: React.ReactNode;
};

export default function SocialIconButton({ href, label, children }: SocialIconButtonProps) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className={[
        "inline-flex h-10 w-10 items-center justify-center rounded-md border",
        "text-gray-700 hover:bg-gray-50 hover:text-gray-900",
        "transition-colors",
      ].join(" ")}
    >
      {children}
    </a>
  );
}
