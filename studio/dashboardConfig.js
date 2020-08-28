export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f48c9c19865849f7465e163',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-qtfer6hm',
                  apiId: '86db43fc-cb9a-47c1-8b64-74573f096dd4'
                },
                {
                  buildHookId: '5f48c9c16a9028443ff17f31',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-mbkd2uiz',
                  apiId: '1afd5f90-edfe-4ed3-83ef-0b5d08bc8ca3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Armageddonas/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-mbkd2uiz.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
