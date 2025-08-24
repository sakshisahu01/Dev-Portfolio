// ✅ Only keeping your skills' icons

import java from '../app/assets/svg/skills/java.svg';
import python from '../app/assets/svg/skills/python.svg';
import html from '../app/assets/svg/skills/html.svg';
import css from '../app/assets/svg/skills/css.svg';
import javascript from '../app/assets/svg/skills/javascript.svg';
import typescript from '../app/assets/svg/skills/typescript.svg';
import react from '../app/assets/svg/skills/react.png';
import tailwind from '../app/assets/svg/skills/tailwind.svg';
import mongoDB from '../app/assets/svg/skills/mongoDB.svg';
import mysql from '../app/assets/svg/skills/mysql.svg';
import git from '../app/assets/svg/skills/git.svg';
import bootstrap from '../app/assets/svg/skills/bootstrap.svg';
import r from '../app/assets/svg/skills/R.png';
import wordpress from '../app/assets/svg/skills/wordpress.svg';
import nodejs from '../app/assets/svg/skills/nodejs.png'; 
import express from '../app/assets/svg/skills/express.png';
import canva from '../app/assets/svg/skills/canva.svg';

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'java':
      return java;
    case 'python':
      return python;
    case 'html':
      return html;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'typescript':
      return typescript;
    case 'react':
      return react;
    case 'tailwind':
      return tailwind;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'git':
      return git;
    case 'bootstrap':
      return bootstrap;
    case 'r':
      return r;
    case 'wordpress':
      return wordpress;
    case 'node.js':
    case 'nodejs':
      return nodejs;
    case 'express.js':
    case 'express':
      return express;
    case 'canva':
      return canva;
    default:
      break;
  }
};
