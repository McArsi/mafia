import React from "react";
import { useSelector } from "react-redux";

import Role from "./roles/Role";
import ChoosedRole from "./roles/ChoosedRole";
import ChoosedRoleCounter from "./roles/ChoosedRoleCounter";
import s from './insertRoles.module.css'
import { NavLink } from "react-router-dom";

function InsertRoles () {

    const state = useSelector( state => state.roles );

        return ( 
            <div className={s.container}>
                {   state.roles.map((role) => {

                    if (role.choose == false) {
                        return <Role key={role.id} {...role} />
                        } else if (role.choose == true && 'count' in role) {
                        return <ChoosedRoleCounter key={role.id} {...role} />
                        } else if (role.choose == true) {
                        return <ChoosedRole key={role.id} {...role} />
                        } 
                    }
                )}
                <div className={s.manual}>
                    <div className={s.counter}>{state.digit}</div>
                    <NavLink to="../show"><button className={s.gameButton}>ДАЛЬШЕ</button></NavLink>
                </div>
            </div>
            )
};

export default InsertRoles;