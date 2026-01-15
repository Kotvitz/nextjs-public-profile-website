import {
  FacebookIcon,
  InstagramIcon,
  XIcon,
  TikTokIcon,
  SocialIconButton
} from "@/app/components/icons";

export default function Contact() {
  return (
    <div className="container-page">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight">
            Kontakt
          </h2>

          <p className="mt-4 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="mt-8 space-y-6 text-gray-700">
            <div>
              <div className="text-sm font-medium text-gray-900">
                Adres e-mail
              </div>
              <a
                href="mailto:kontakt@example.pl"
                className="mt-1 inline-block text-blue-700 hover:underline"
              >
                kontakt@example.pl
              </a>
            </div>

            <div>
              <div className="text-sm font-medium text-gray-900">
                Media społecznościowe
              </div>
              <div className="mt-3 flex items-center gap-3">
                <SocialIconButton href="https://www.facebook.com/KubowiczR" label="Facebook">
                  <FacebookIcon />
                </SocialIconButton>

                <SocialIconButton href="https://instagram.com/rafal_kubowicz" label="Instagram">
                  <InstagramIcon />
                </SocialIconButton>

                <SocialIconButton href="https://x.com/KubowiczR" label="X">
                  <XIcon />
                </SocialIconButton>

                <SocialIconButton href="https://www.tiktok.com/@kubowiczr" label="TikTok">
                  <TikTokIcon />
                </SocialIconButton>
              </div>
            </div>
          </div>
        </div>

        <div>

          <form className="mt-6 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                Imię i nazwisko <span className="text-gray-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                Adres e-mail <span className="text-gray-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-900">
                Temat
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                Wiadomość
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 w-full rounded-md border px-3 py-2 text-sm"
              />
            </div>

            <div className="pt-2">
              <label className="flex items-start gap-3 text-sm text-gray-700">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border"
                />
                <span>
                  Wyrażam zgodę na przetwarzanie moich danych osobowych wysłanych za pomocą
                  formularza kontaktowego<span className="text-gray-500">*</span>.
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="btn-submit inline-flex items-center justify-center cursor-pointer rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-(--brand-primary)/20"
            >
              Wyślij
            </button>

            <p className="text-xs text-gray-500">
              Pola oznaczone <span className="text-gray-500">*</span> są wymagane.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
