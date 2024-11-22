import React from 'react'
import s from  "./Header.module.scss"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <section className={s.header}>
     <div className="container">
     <nav className={s.nav}>
       <Link to={"/"} className={s.logo}>Shop.CO</Link>

       <div className={s.menu}></div>
       <Link to={"/"}>Shop⌄</Link>
       <Link to={"/"}>On Sale</Link>
       <Link to={"/"}>New Arrials</Link>
       <Link to={"/"}>Brands</Link>

     <input className={s.search}type="text" />

     <div className={s.box}>
      <img src="/public/icon-1 (2).svg" alt="" />
      <img src="/public/icon-2 (2).svg" alt="" />
     </div>
     </nav>
     </div>

    </section>
    </>
  )
}

export default Header