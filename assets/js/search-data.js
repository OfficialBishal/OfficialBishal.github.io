// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Teaching Experience",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-quantum-teleportation-simplified",
      
        title: 'Quantum Teleportation Simplified <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/quantumcomputingnepal/quantum-teleportation-simplified-98a470b636a4?source=rss-6c6f05285af9------2", "_blank");
        
      },
    },{id: "post-backstory-on-hacking",
      
        title: 'Backstory on Hacking <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@OfficialBishal/backstory-on-hacking-1fe6aafbe0f4?source=rss-6c6f05285af9------2", "_blank");
        
      },
    },{id: "post-how-i-became-executive-member-of-an-undergrad-club",
      
        title: 'How I became Executive Member of an Undergrad Club <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@OfficialBishal/how-i-became-executive-member-of-an-undergrad-club-a63b9304b62d?source=rss-6c6f05285af9------2", "_blank");
        
      },
    },{id: "news-started-my-phd-journey",
          title: 'Started my PhD journey',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1/";
            },},{id: "news-breaking-new-ground-my-first-phd-paper-on-single-cell-gene-expression-prediction",
          title: 'Breaking New Ground - My First PhD Paper on Single-Cell Gene Expression Prediction...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-hic4d-spot-published-in-briefings-in-bioinformatics",
          title: 'HiC4D-SPOT published in Briefings in Bioinformatics',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_3/";
            },},{id: "news-serving-as-a-reviewer-for-ismb-2026-intelligent-systems-for-molecular-biology-the-flagship-conference-of-the-international-society-for-computational-biology",
          title: 'Serving as a reviewer for ISMB 2026 (Intelligent Systems for Molecular Biology), the...',
          description: "",
          section: "News",},{id: "news-new-paper-in-embo-molecular-medicine-on-cited2",
          title: 'New paper in EMBO Molecular Medicine on CITED2',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_6/";
            },},{id: "news-arc-submitted-to-proteins-for-casp16",
          title: 'ARC submitted to PROTEINS for CASP16',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_5/";
            },},{id: "news-scw-published-in-bmc-bioinformatics",
          title: 'SCW published in BMC Bioinformatics',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_7/";
            },},{id: "news-protein-rna-quality-assessment-paper-in-bioinformatics",
          title: 'Protein–RNA quality assessment paper in Bioinformatics',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_8/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%62%69%73%68%61%6C%73%68%72%65%73%74%68%61@%6D%69%61%6D%69.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/OfficialBishal", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/OfclBishal", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0004-8330-4348", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=2YM52zEAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
