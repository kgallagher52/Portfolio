
const TECH_DATA = [
  {
    id: "2",
    title: 'React Hooks',
    slug: 'f-react-hooks',
    def: 'React Hooks are functions that let us hook into the React state and lifecycle features from function components. By this, we mean that hooks allow us to easily manipulate the state of our functional component without needing to convert them into class components.',
    resources: { title: 'Hook Documentaion', url: 'https://reactjs.org/docs/hooks-intro.html' },
    image: 'https://i.udemycdn.com/course/240x135/2227364_2d77.jpg',
  },
  {
    id: "3",
    title: 'React Patterns',
    slug: 'f-react-patterns',
    def: 'Different patterns to use to create a smooth react application.',
    resources: { title: 'Patterns', url: 'https://reactpatterns.com/' },
    image: 'https://svgsilh.com/svg/145559.svg',
  },
  {
    id: "4",
    title: 'React HOCs',
    slug: 'f-Higher-Order-Components',
    def: 'A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature.',
    resources: { title: `React Documentation HOC'S`, url: 'https://reactjs.org/docs/higher-order-components.html' },
    image: 'https://cdn.pixabay.com/photo/2017/06/23/10/48/code-2434271_960_720.jpg',
  },
  {
    id: "5",
    title: 'React Portal',
    slug: 'f-react-portal',
    def: 'Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.',
    resources: { title: 'React Documentation Portals', url: 'https://reactjs.org/docs/portals.html' },
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Spirit_portal.jpg',
  },
  {
    id: "6",
    title: 'React Redux',
    slug: 'f-react-redux',
    def: 'Simply put, Redux is a state management tool',
    resources: { title: 'React Redux Documentation', url: 'https://react-redux.js.org/introduction/quick-start' },
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png',
  },
  {
    id: "7",
    title: 'Redux Sagas',
    slug: 'f-redux-sagas',
    def: 'Redux-saga is a redux middleware library, that is designed to make handling side effects in your redux app nice and simple. It achieves this by leveraging an ES6 feature called Generators, allowing us to write asynchronous code that looks synchronous, and is very easy to test.',
    resources: { title: 'Tutorial for Redux Sagas', url: 'https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html' },
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Redux_Logo.png',
  },
  {
    id: "8",
    title: 'Data Retrieval',
    slug: 'f-rest-vs-graphQL-vs-GRCP',
    def: '1. REST stands for Representational State Transfer. (It is sometimes spelled "ReST".) It relies on a stateless, client-server, cacheable communications protocol -- and in virtually all cases, the HTTP protocol is used. REST is an architecture style for designing networked applications. 2.gRPC (gRPC Remote Procedure Calls) is an open source remote procedure call (RPC) system initially developed at Google. 3.GraphQL stands for Graph Query Language. At its core, this is what GraphQL actually is: a language for writing standardized data queries. Though the name is used to refer to a collection of conventions, during lunchtime nerd conversations were talking about this: Example GraphQL Query { documents { title body } }',
    resources: { title: 'Artical Comparison', url: 'https://nordicapis.com/when-to-use-what-rest-graphql-webhooks-grpc/' },
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Data.jpg',
  },
  {
    id: "9",
    title: 'Dom Tree & Browsers',
    slug: 'f-dom-tree',
    def: 'The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated.',
    resources: { title: 'DOM Tutorial', url: 'https://www.youtube.com/watch?v=FIORjGvT0kk' },
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Dom_tree.png',
  },
  {
    id: "11",
    title: 'CSS Box Model',
    slug: 'f-box-model',
    def: 'Every element that can be displayed is comprised of one or more rectangular boxes. CSS box model typically describes how these rectangular boxes are laid out on a web page. These boxes can have different properties and can interact with each other in different ways, but every box has a content area and optional surrounding margin, padding, and border.',
    resources: { title: 'Documentation on css box model', url: 'https://www.tutorialrepublic.com/css-tutorial/css-box-model.php' },
    image: 'https://www.tutorialrepublic.com/lib/images/css-box-model.jpg',
  },

  {
    id: "12",
    title: 'SQL',
    slug: 'b-sql-data-schemas',
    def: 'SQL (pronounced "ess-que-el") stands for Structured Query Language. SQL is used to communicate with a database. According to ANSI (American National Standards Institute), it is the standard language for relational database management systems.',
    resources: { title: 'Video Tutorial', url: 'https://www.youtube.com/watch?v=HXV3zeQKqGY' },
    image: 'https://www.sqlshack.com/wp-content/uploads/2018/11/word-image-388.png',
  },
  {
    id: "13",
    title: 'NoSQL',
    slug: 'b-nosql-data-schemas',
    def: 'NoSQL, which stand for "not only SQL," is an alternative to traditional relational databases in which data is placed in tables and data schema is carefully designed before the database is built.',
    resources: { title: 'Video Tutorial', url: 'https://www.youtube.com/watch?v=2yQ9TGFpDuM' },
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Nosql.gif',
  },
  // {
  //   id:14,
  //   title:'goLang',
  //   slug:'b-go',
  //   def:'',
  //   resources:{title: '', url:''},
  //   image:'',
  // },
  // {
  //   id:15,
  //   title:'Dockers',
  //   slug:'b-docker',
  //   def:'',
  //   resources:{title: '', url:''},
  //   image:'',
  // },
  // {
  //   id:16,
  //   title:'Kubernetes',
  //   slug:'b-kubernetes',
  //   def:'',
  //   resources:{title: '', url:''},
  //   image:'',
  // },
  // {
  //   id:17,
  //   title:'Helm',
  //   slug:'b-helm',
  //   def:'',
  //   resources:{title: '', url:''},
  //   image:'',
  // },
  // {
  //   id:18,
  //   title:'GCP',
  //   slug:'b-Cloud-Computing-Services',
  //   def:'',
  //   resources:{title: '', url:''},
  //   image:'',
  // },
];

export const getTechData = () => {
  return new Promise((resolve, reject) => {
    resolve(TECH_DATA);
    reject("Cannot fetch data on Tech Data"); // Error handling
  })
}

export const getTechBySlug = (slug) => {
  return new Promise((resolve, reject) => {
    const techMatch = TECH_DATA.filter(technology => technology.slug === slug)
    resolve(techMatch[0]);
    reject("Cannot fetch data on getTechById"); // Error handling
  })
}