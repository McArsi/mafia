import React from "react";
import { chooseRoles } from "../../../store/rolesSlice";
import { useDispatch } from "react-redux";
import s from '../insertRoles.module.css'

function ChoosedRoleCounter ({name, img, count, id}) {
    const dispatch = useDispatch();
    return (
            <div onClick={() => dispatch(chooseRoles(id))} className={s.item}>
                <div className={s.pic}>
                    <img className={s.choosed} src={`img/${img}`} alt={name}/>
                    <div className={s.green}>{count}</div>
                </div>
                <div className={s.name}>{name}</div>
            </div>
    )
}

export default ChoosedRoleCounter;