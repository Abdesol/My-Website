import ContactButton from "./ContactButton";
import Title from "./title";

const contacts = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Abdesol",
  },
  {
    name: "Twitter",
    icon: "twitter",
    link: "https://twitter.com/AbdellaSolomon",
  },
  {
    name: "Fiverr",
    icon: "fiverr",
    link: "https://www.fiverr.com/abdthecoder/",
  },,
  {
    name: "Telegram",
    icon: "telegram",
    link: "https://t.me/abdesol",
  },
  {
    name: "Mail me",
    icon: "mail",
    link: "mailto:abdesoltak@gmail.com",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/abdella-solomon-7070ab213/",
  },
];

const Contacts = ({ id }) => {
  return (
    <div id={id} className="my-14">
      <Title title="Contacts" />
      <div className="flex flex-wrap items-center justify-center mx-auto">
        {contacts.map((link, i) => (
          <div key={i}>
            <ContactButton
              marginLeft={i === 0 ? "ml-0" : "ml-6 md:ml-10"}
              name={link.name}
              icon={link.icon + ".svg"}
              link={link.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
