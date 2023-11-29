import adobeXd from '../assets/svg/skills/xd.png'
import angular from '../assets/svg/skills/angular.svg'
import aws from '../assets/svg/skills/aws.png'
import bootstrap from '../assets/svg/skills/bootstrap.svg'
import c from '../assets/svg/skills/c.svg'
import cpp from '../assets/svg/skills/cpp.png'
import css from '../assets/svg/skills/css.svg'
import django from '../assets/svg/skills/django.svg'
import docker from '../assets/svg/skills/docker.svg'
import firebase from '../assets/svg/skills/firebase.svg'
import git from '../assets/svg/skills/git.svg'
import html from '../assets/svg/skills/html.svg'
import illustrator from '../assets/svg/skills/illustrator.svg'
import java from '../assets/svg/skills/java.svg'
import javascript from '../assets/svg/skills/javascript.svg'
import kotlin from '../assets/svg/skills/kotlin.svg'
import lightroom from '../assets/svg/skills/lightroom.png'
import materialui from '../assets/svg/skills/materialui.svg'
import mongoDB from '../assets/svg/skills/mongoDB.svg'
import mysql from '../assets/svg/skills/mysql.svg'
import nextJS from '../assets/svg/skills/next.webp'
import nginx from '../assets/svg/skills/nginx.svg'
import photoshop from '../assets/svg/skills/photoshop.svg'
import php from '../assets/svg/skills/php.png'
import postgresql from '../assets/svg/skills/postgresql.svg'
import python from '../assets/svg/skills/python.svg'
import react from '../assets/svg/skills/react.svg'
import selenium from '../assets/svg/skills/selenium.svg'
import tailwind from '../assets/svg/skills/tailwind.svg'
import typescript from '../assets/svg/skills/typescript.svg'
import vue from '../assets/svg/skills/vue.svg'
import wordpress from '../assets/svg/skills/wordpress.png'
import nodeJS from '../assets/svg/skills/node.png'

import azure from '../assets/svg/skills/azure.svg'
import figma from '../assets/svg/skills/figma.svg'
import microsoftoffice from '../assets/svg/skills/microsoftoffice.svg'
import picsart from '../assets/svg/skills/picsart.svg'
import sketch from '../assets/svg/skills/sketch.svg'
import canva from '../assets/svg/skills/canva.svg'
import ubuntu from '../assets/svg/skills/ubuntu.png'


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {

        case 'c':
            return c;
        case 'cpp':
            return cpp;
        case 'python':
            return python;
        case 'java':
            return java;
        case 'kotlin':
            return kotlin;
        

        case 'html':
            return html;
        case 'css':
            return css;
        case 'javascript':
            return javascript;
        case 'typescript':
            return typescript;
        case 'angular':
            return angular;
        case 'react js':
            return react;
        case 'next js':
            return nextJS;
        case 'node js':
            return nodeJS;
        case 'vue':
            return vue;
        case 'bootstrap':
            return bootstrap;
        case 'materialui':
            return materialui;
        case 'tailwind':
            return tailwind;
        case 'php':
            return php;
        case 'mongodb':
            return mongoDB;
        case 'mysql':
            return mysql;
        case 'postgresql':
            return postgresql;
        case 'figma':
            return figma;    

        case 'photoshop':
            return photoshop;
        case 'illustrator':
            return illustrator;
        case 'adobexd':
            return adobeXd;
        case 'lightroom':
            return lightroom;
        case 'picsart':
            return picsart;
        case 'sketch':
            return sketch;
        case 'canva':
            return canva;

        case 'aws':
            return aws;
        case 'django':
            return django;
        case 'firebase':
            return firebase;
        case 'git':
            return git;
        case 'nginx':
            return nginx;
        case 'selenium':
            return selenium;
        case 'wordpress':
            return wordpress;
        case 'azure':
            return azure;
        case 'microsoft office':
            return microsoftoffice;
        case 'docker':
            return docker;
        case 'ubuntu':
            return ubuntu;
        default:
            break;
    }
}
