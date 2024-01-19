import { useSelector, useDispatch } from "react-redux";
import { removePlayer, removeRole, removeCount } from "../../store/rolesSlice";
import s from './game.module.css'

function Game () {

    const roles = useSelector (state => state.roles.choosedRoles);
    const players = useSelector (state => state.roles.playersNames);
    const dispatch = useDispatch ();

    let clansTmp = [];
    roles.map((role) => {
        clansTmp.push(role.clan)
    });
    let clans = clansTmp.filter((item, index) => {
        return clansTmp.indexOf(item) === index
    });

    console.log(roles);

 return (
    <div className={s.container}>
        <div className={s.roles}>
            {clans.map ((clan) => {
                return <div className={s.clanContainer}>
                    <div className={s.title}>{clan}</div>
                    <div className={s.roleContainer}>
                        { roles.map((role) => {
                            if (role.clan === clan && role.hasOwnProperty('count') && role.count != 1) {
                                return <div onClick={() => dispatch(removeCount(role.id))} className={s.pers}>
                                <img className={s.img} style={{borderColor: role.color}} src={`img/${role.img}`} />
                                <span className={s.count}>{role.count}x</span>
                            </div>
                            } else if (role.clan === clan && role.hasOwnProperty('count') && role.count === 1){
                                return <div onClick={() => dispatch(removeRole(role.id))} className={s.pers}>
                                <img className={s.img} style={{borderColor: role.color}} src={`img/${role.img}`} />
                                <span className={s.count}>{role.count}x</span>
                            </div>
                            } else if (role.clan === clan){
                                return <div onClick={() => dispatch(removeRole(role.id))} className={s.pers}>
                                <img className={s.img} style={{borderColor: role.color}} src={`img/${role.img}`} />
                            </div>
                            }
                        })}
                    </div>
                </div>
            })}
        </div>
        <ul className={s.players}>
            { players.map ((player) => {
                return <li onClick={() => dispatch(removePlayer(player.id))} className={s.player}>{player.id} {player.name}</li>
            })}

        </ul>
    </div>
    )
};

export default Game;