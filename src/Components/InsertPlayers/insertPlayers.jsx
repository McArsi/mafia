import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addPlayer } from "../../store/rolesSlice";
import s from './insertPlayers.module.css'

function InsertPlayers () {
    const state = useSelector( state => state.roles.players );
    let countPlayers = []
    for (let i = 1; i <= state; i++) {
        countPlayers.push(i);
    }
    const dispatch = useDispatch();

  return (
        <div className={s.container}>
            <ul className={s.list}>
            {
                countPlayers.map ((i) => {
                    return <li className={s.item}>
                        <span className={s.num}>{i}</span>
                        <input className={s.name} onChange={(e) => dispatch(addPlayer([i, e.target.value]))}></input>
                    </li>
                })
            }
            </ul>
            <NavLink to="../game"> <button className={s.game}>ИГРА</button></NavLink>
        </div>
  )
};

export default InsertPlayers;