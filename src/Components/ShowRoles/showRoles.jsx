import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { nextSlide, prevSlide } from "../../store/rolesSlice";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import s from './showRoles.module.css'

function ShowRoles() {
    const state = useSelector(state => state.roles.choosedRoles);
    const slideIndex = useSelector(state => state.roles.slide);
    const dispatch = useDispatch();
    
    const sliderItems = structuredClone(state);

    for (let i = 0; i < sliderItems.length; i++) {
        sliderItems[i].ind = i;
    }

    return (
        <section className={s.container}>
            <button className={s.controlButton} onClick={() => dispatch(prevSlide(slideIndex - 1))}>
                <FaAngleLeft />
            </button>
            <div className={s.slider}>
                {
                    sliderItems.map((item) => {

                        return (

                            <div  key={item.id}>
                                {item.ind === slideIndex && (
                                    <div style={{display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "15px", justifyContent: "center", alignItems: "center", backgroundColor: item.color, width: "1170px", height: "570px", borderRadius: "20px", padding: "15px" }}>
                                        <div className={s.img}>
                                            <img className={s.avatar} src={`img/${item.img}`} />
                                            <div className={s.count}>{item.count}</div>
                                        </div>

                                        <div className={s.text}>
                                            <div className={s.name}>{item.name}</div>
                                            <div className={s.clan}>клан: {item.clan}</div>
                                            <p>ОПИСАНИЕ: </p>
                                            <div className={s.desc}>{item.desc}</div>
                                        </div>
                                    </div>
                                )}
                            </div>

                        )
                    })
                }
            </div>


            <button className={s.controlButton} onClick={() => dispatch(nextSlide(slideIndex + 1))}>
                <FaAngleRight />
            </button>

            <NavLink to="../players"><button className={s.gameButton}>ДАЛЬШЕ</button></NavLink>
        </section>
        
    )
};

export default ShowRoles;