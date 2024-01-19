import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addDigit } from '../../store/rolesSlice'
import s from './insertDigit.module.css';

function InsertDigit () {

    const dispatch = useDispatch();

 return (
    <div className={s.container}>
        <div className={s.title}>ВВЕДИТЕ КОЛИЧЕСТВО ИГРОКОВ</div>
            <input onChange={(e) => dispatch(addDigit(e.target.value))} className={s.digit}></input>
            <NavLink to="../roles"><button className={s.enter}>ВВОД</button></NavLink>
    </div>
    )
};

export default InsertDigit;