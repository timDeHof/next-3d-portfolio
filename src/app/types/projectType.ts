export type ProjectProps = {
  id?: string;
  name: string;
  description: string;
  teamMembers: {
    name: string;
    link: string;
  }[]; // Assuming team members are represented by their names or IDs
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  sourceCodeLink: string;
  demoLink: string;
  features: {
    title: string;
    subtitle: string;
  }[];
  challenges: {
    intro: string;
    points: {
      title: string;
      subtitle: string;
    }[];
    conclusion: string;
  };
};
