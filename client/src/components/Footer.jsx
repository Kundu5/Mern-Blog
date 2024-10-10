import React from 'react';
import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import {BsFacebook, BsInstagram, BsTwitter, BsGithub} from 'react-icons/bs';


export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-purple-200'>
        <div className="w-full max-w-7xl  mx-auto">
            <div className="grid w-full justify-between sm:flex md:grid-cols-1">
                <div className="mt-5">
                <Link className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
                    <span className='px-2 py-1 bg-gradient-to-r from-indigo-300 via-purple-400 to bg-pink-300 rounded-lg text-white'>CODEVERSE</span>
                </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
                  <div>
                  <Footer.Title title='Follow US'/>
                  <Footer.LinkGroup col>
                    <Footer.Link href='#' target='_blank' rel='noopener noreferrer'>
                      Github
                    </Footer.Link>
                  </Footer.LinkGroup>
                  </div>
                </div>
            </div>
            <Footer.Divider/>
            <div className='w-full sm:flex sm:items-center sm:justify-between'>
              <Footer.Copyright href='#' by='Codeverse' year={new Date().getFullYear()}/>
              <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                <Footer.Icon href='#' icon={BsFacebook}/>
                <Footer.Icon href='#' icon={BsInstagram}/>
                <Footer.Icon href='#' icon={BsTwitter}/>
                <Footer.Icon href='#' icon={BsGithub}/>
              </div>
            </div>
        </div>
    </Footer>
  )
}
