import { createSlice, current } from '@reduxjs/toolkit';
import roles from './roles.json';

const rolesSlice = createSlice ({
    name: 'roles',
    initialState: {
      roles: roles,
      choosedRoles: [],
      digit: 0,
      players: 0,
      playersNames: [],
      slide: 0
    },
    reducers: {
      chooseRoles (state, action) {
          const choosedRole = current(state).roles.find(i => i.id === action.payload);
          if (state.digit != 0) {
            if (choosedRole.hasOwnProperty('count')) {
              if (choosedRole.count == 0) {
                state.roles[action.payload].count++;
                state.digit--;
                state.choosedRoles.push (state.roles[action.payload]);
                
                state.choosedRoles.sort((x, y) => x.id - y.id);
                state.roles[action.payload].choose = true;
              } else if (choosedRole.count > 0) {
                state.digit--;
                state.roles[action.payload].count++;
                state.choosedRoles.splice (state.choosedRoles.indexOf(state.choosedRoles.find(i => i.id === action.payload)), 1);
                state.choosedRoles.push (current(state).roles.find(i => i.id === action.payload));
                state.choosedRoles.sort((x, y) => x.id - y.id);
                
              }
            } else {
            state.choosedRoles.push (choosedRole);
            state.choosedRoles.sort((x, y) => x.id - y.id);
            state.digit--;
            state.roles[action.payload].choose = true;
            }
          } else {

          }
        },
      
      nextSlide(state, action) {
        state.slide = action.payload > state.choosedRoles.length -1 ? 0 : action.payload;
      },
      prevSlide(state, action) {
        state.slide = action.payload < 0 ? state.choosedRoles.length - 1 : action.payload;
      },

      addDigit (state, action) {
          state.digit = action.payload;
          state.players = action.payload;
      },

      addPlayer (state, action) {
        let player = {
          id: action.payload[0],
          name: action.payload[1]
        }
        if (state.playersNames.find(i => i.id === action.payload[0])){
          state.playersNames.find(i => i.id === action.payload[0]).name = action.payload[1];
        } else {
          state.playersNames.push(player);
        }
      },

      removeRole (state, action) {
        state.choosedRoles.splice (state.choosedRoles.indexOf(state.choosedRoles.find(i => i.id === action.payload)), 1);
      },

      removePlayer (state, action) {
        state.playersNames.splice(state.playersNames.indexOf(state.playersNames.find(i => i.id === action.payload)), 1);
      },

      removeCount (state, action) {
        state.choosedRoles.find(i => i.id === action.payload).count--;
      }
    }

}
)

export const { chooseRoles, nextSlide, prevSlide, addDigit, addPlayer, removeRole, removePlayer, removeCount } = rolesSlice.actions;

export default rolesSlice.reducer
