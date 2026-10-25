interface SectionLabelProps {
  label: string;
  dark?: boolean;
}

export function SectionLabel({ label, dark = false }: SectionLabelProps) {
  return (
    <span
      className={`eyebrow ${
        dark ? "text-text-on-dark/60" : "text-text-muted"
      }`}
    >
      {label}
    </span>
  );
}
