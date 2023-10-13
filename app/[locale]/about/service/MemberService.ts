export const MemberService = {
  getMembersData() {
    return [
      {
        id: "1",
        name: "Cristina Andrés",
        role: "UX Designer",
        photo: "/cristina.png",
        linkedin: "https://www.linkedin.com/in/cristinaandrs/",
        portfolio: "/Portfolio_cristina.pdf",
      },
      {
        id: "2",
        name: "Thomas Moser",
        role: "Web Developer",
        photo: "/thomas.png",
        linkedin: "https://www.linkedin.com/in/thomas-moser67/",
        portfolio: "https://thomas-moser-portfolio.vercel.app/",
      },
    ];
  },
  getMembers() {
    return Promise.resolve(this.getMembersData());
  },
};
