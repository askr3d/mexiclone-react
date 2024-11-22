
import { createSlice } from '@reduxjs/toolkit';

export const homeSlice = createSlice({
    name: 'home',
    initialState: {
        entrega: '',
        devolucion: '',
        fechaInicio: null,
        fechaFinal: null,
        status: 'active' //no-found - active - found - waiting
    },
    reducers: {
        foundedCars: ( state /*, { payload }*/ ) => {
            state.status = 'found'
        },
        searchingCars: ( state /*, { payload }*/ ) => {
            state.status = 'waiting'
        },
        checkingCars: (state) => {
            state.status = 'waiting';
        }
    }
});


// Action creators are generated for each case reducer function
export const { foundedCars, searchingCars, checkingCars } = homeSlice.actions;