import type { MetaFunction } from "@remix-run/node";
import styles from '../components/styles/header.module.css'
import About from '../components/about.jsx'
import Projects from '../components/Projects.jsx'
import Skills from '../components/Skills.jsx'

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <About/>
      <Projects/>
      <Skills/>
    </>
  );
}
