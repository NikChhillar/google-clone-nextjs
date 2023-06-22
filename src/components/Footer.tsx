import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="absolute bottom-0 w-full bg-neutral-100">
      <p className="py-3 px-8 text-sm text-slate-600">India</p>
      <hr />
      <div className="flex py-3 px-8">
        <ul className="flex [&>*]:mr-6 text-sm text-slate-600">
          <li>
            <Link href={"https://about.google/"}>About</Link>
          </li>
          <li>
            <Link
              href={
                "https://ads.google.com/intl/en_in/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1"
              }
            >
              Advertising
            </Link>
          </li>
          <li>
            <Link href={"https://www.google.com/intl/en_in/business/"}>
              Business
            </Link>
          </li>
          <li>
            <Link href={"https://www.google.com/search/howsearchworks/?fg=1"}>
              How Search works
            </Link>
          </li>
        </ul>
        <ul className="flex ml-auto [&>*]:ml-6 text-sm text-slate-600">
          <li>
            <Link
              href={"https://policies.google.com/privacy?hl=en-IN&fg=1"}
              className="hover:underline text-sm"
            >
              Privacy
            </Link>
          </li>
          <li>
            <Link
              href={"https://policies.google.com/terms?hl=en-IN&fg=1"}
              className="hover:underline text-sm"
            >
              Terms
            </Link>
          </li>
          <li>
            <Link
              href={"https://www.google.com/preferences?hl=en-IN&fg=1"}
              className="hover:underline text-sm"
            >
              Settings
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
