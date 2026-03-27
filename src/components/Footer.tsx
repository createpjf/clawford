import type { Translations } from "@/types";

interface Props {
  t: Translations;
}

export default function Footer({ t }: Props) {
  return (
    <footer className="footer">
      <p>{t.footer}</p>
    </footer>
  );
}
