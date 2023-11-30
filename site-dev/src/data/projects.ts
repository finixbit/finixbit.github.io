export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "PHP Bytecode Security Framework",
    techs: ["C", "Python", "Program Analysis", "Static Analysis"],
    link: "https://github.com/finixbit/php-bytecode-security-framework",
  },
  {
    title: "print-function-args-debugger",
    techs: ["C/C++", "Debugger"],
    link: "https://github.com/finixbit/print-function-args-debugger",
  },
  {
    title: "async-graph-data-flow",
    techs: ["Python", "Async", "Graph Executor"],
    link: "https://github.com/civisanalytics/async-graph-data-flow"
  },
];

export default projects;
