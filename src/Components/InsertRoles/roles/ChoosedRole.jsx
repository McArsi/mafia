import React from "react";
import s from '../insertRoles.module.css'

function ChoosedRole ({name, img}) {
    return (
        <label>
            <div className={s.item}>
                <div className={s.pic}>
                    <img className={s.choosed} src={`img/${img}`} alt={name}/>
                    <div className={s.green}></div>
                </div>
                <div className={s.name}>{name}</div>
                <input className={s.check} type="checkbox" />
            </div>
        </label>
    )
}

export default ChoosedRole;