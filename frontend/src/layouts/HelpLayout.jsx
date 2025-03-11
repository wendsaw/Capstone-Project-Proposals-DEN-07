import { NavLink, Outlet } from "react-router-dom";


import style from './RootLayout.module.css'

import { useAuthContext } from "../hooks/useAuthContext";

const HelpLayout = () => {


    const { user } = useAuthContext()

    return (

        <>

<p> Help:Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Aliquid enim, a eius illo natus cum corrupti quam magnam veritatis voluptas
             facilis aliquam praesentium sapiente nam. Repudiandae tempora illum minus ratione?Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Aliquid enim, a eius illo natus cum corrupti quam magnam veritatis voluptas
             facilis aliquam praesentium sapiente nam. Repudiandae tempora illum minus ratione?Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            A</p>

            <header>
                <nav className={style.navbar}>
                    <ul>



                        {user && (

                            <>

                                <li style={{ marginRight: "50px" }}><NavLink to='faq' className="links">FAQ</NavLink></li>
                                <li style={{ marginRight: "50px" }}><NavLink to='contact' className="links">contact</NavLink></li>

                            </>


                        )}

                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>



        </>
    );
}

export default  HelpLayout