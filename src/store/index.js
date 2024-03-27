import { configureStore } from '@reduxjs/toolkit'
import UserSlice from './UserSlice'
import MemberSlice from './MemberSlice'
import ProgramSlice from './ProgramSlice'
import PaymentsSlice from './PaymentsSlice'

const store = configureStore({
  reducer: {
    users: UserSlice,
    members: MemberSlice,
    programs: ProgramSlice,
    payments: PaymentsSlice
  },
})

// export const resetSlices = () => {
//   store.dispatch(accountLogout())
//   store.dispatch(roomLogout())
//   store.dispatch(themeLogout())
//   store.dispatch(participantLogout())
//   store.dispatch(idLogout())
//   store.dispatch(debtLogout())
//   store.dispatch(purchaseLogout())
// }

export default store