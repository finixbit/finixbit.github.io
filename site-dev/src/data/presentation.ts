type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
};

const presentation: Presentation = {
  twitter_handle: "@finixbit",
  twitter_link: "https://twitter.com/finixbit",
  title: "Hi, I’m Finixbit 👋",
  description:
    "I'm Samuel, a *Senior Software Engineer & Security Researcher* with *several years* of experience in Ghana.",
  socials: [
    {
      label: "Twiiter",
      link: "https://twitter.com/finixbit",
    },
    {
      label: "Calendly",
      link: "https://calendly.com/finixbit",
    },
    {
      label: "Github",
      link: "https://github.com/finixbit",
    },
  ],
};

export default presentation;
