import { Card } from "@/components/ui/card";
import Logo from "@/app/components/header/Logo";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="relative py-20">
      <Card className="px-10">
        <div className="flex justify-between items-center">
          <Logo location="footer" width={120} height={40} />
          <nav className="flex gap-8 text-sm text-muted-foreground">
            <Link
              href="/o-nas"
              className="hover:text-foreground transition-colors"
            >
              O nas
            </Link>
            <Link
              href="/trasy"
              className="hover:text-foreground transition-colors"
            >
              Trasy
            </Link>
            <Link
              href="/kontakt"
              className="hover:text-foreground transition-colors"
            >
              Kontakt
            </Link>
            <Link
              href="/konto"
              className="hover:text-foreground transition-colors"
            >
              Konto
            </Link>
          </nav>
        </div>

        <Separator className="mt-0 mb-4" />

        <div className="flex items-center pb-5 justify-between gap-5">
          <small className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MotoCrew. Wszystkie prawa zastrzeżone.
          </small>

          <div className="flex gap-8 items-center">
            <Link
              className="text-sm underline text-muted-foreground hover:text-foreground transition-colors"
              href="/"
            >
              Polityka prywatności
            </Link>
            <Link
              className="text-sm underline text-muted-foreground hover:text-foreground transition-colors"
              href="/"
            >
              Regulamin
            </Link>
          </div>
        </div>
      </Card>
    </footer>
  );
};
