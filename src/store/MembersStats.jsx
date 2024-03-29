
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosInstance } from '../config/axiosInstance';


export const getAlumnosStats = createAsyncThunk('alumnos/getAlumnosStats', async () => {
  const response = await axiosInstance.get('reporte/alumnosStats');
  return response.data;
});

const initialState = {
  totalAlumnos: 0,
  alumnosConVencimientoMayor: 0,
  alumnosActivosProximoVencimiento: 0,
  isLoading: false,
  isError: false,
};

const alumnosStatsSlice = createSlice({
  name: 'alumnos',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAlumnosStats.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getAlumnosStats.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.totalAlumnos = action.payload.totalAlumnos;
        state.alumnosConVencimientoMayor = action.payload.alumnosConVencimientoMayor;
        state.alumnosActivosProximoVencimiento = action.payload.alumnosActivosProximoVencimiento;
      })
      .addCase(getAlumnosStats.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        console.log('Error al obtener los estadísticos de alumnos');
      });
  },
});

export default alumnosStatsSlice.reducer;
