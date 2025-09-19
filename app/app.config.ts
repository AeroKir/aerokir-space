export default defineAppConfig({
  profile: {
    name: 'Kirill Shevtsov',
    position: 'Frontend Developer',
    email: 'shev.kv.1982@gmail.com',
    phone: '+380684479024',
    city: 'Kharkiv, Ukraine',
    // photo: '/photo.jpg',
  },
  // socials: {
  //   github: 'https://github.com/AeroKir',
  //   telegram: 'https://t.me/Kirill_Shevtsov',
  //   linkedin: 'https://www.linkedin.com/in/aerokir-space/'
  // },
  socials: [
    {
      label: 'Email',
      href: 'mailto:shev.kv.1982@gmail.com',
      icon: 'email',
      display: 'shev.kv.1982@gmail.com',
    },
    {
      label: 'Telegram',
      href: 'https://t.me/Kirill_Shevtsov',
      icon: 'telegram',
      display: 'Telegram',
    },
    {
      label: 'Phone',
      href: 'tel:+380684479024',
      icon: 'phone',
      display: '+380684479024',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/AeroKir',
      icon: 'github',
      display: 'GitHub',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/aerokir-space/',
      icon: 'linkedin',
      display: 'Linkedin',
    },
  ],
});
