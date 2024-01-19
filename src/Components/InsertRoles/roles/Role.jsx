import React from "react";
import { chooseRoles } from "../../../store/rolesSlice";
import { useDispatch } from "react-redux";
import s from '../insertRoles.module.css'

function Role ({id, name, img, color}) {

    const dispatch = useDispatch();
    return (

                <div onClick={() => dispatch(chooseRoles(id))} className={s.item}>
                    <img className={s.img} style={{borderColor: color}} src={`img/${img}`} alt={name}/>
                    <div className={s.name}>{name}</div>
                </div>

    )
}

export default Role;
