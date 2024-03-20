import { configureStore } from '@reduxjs/toolkit'
// import AccountSlice from './AccountSlice'
// import RoomSlice from './RoomSlice'
// import ThemeSlice from './ThemeSlice'
// import ParticipantSlice from './ParticipantSlice'
// import idReducer from './CurrentIdSlice'
// import DebtSlice from './DebtSlice'
// import PurchaseSlice from './PurchaseSlice'
// import { logout as accountLogout } from './AccountSlice'
// import { logout as roomLogout } from './RoomSlice'
// import { logout as themeLogout } from './ThemeSlice'
// import { logout as participantLogout } from './ParticipantSlice'
// import { logout as idLogout } from './CurrentIdSlice'
// import { logout as debtLogout } from './DebtSlice'
// import { logout as purchaseLogout } from './PurchaseSlice'

const store = configureStore({
  reducer: {
    // account: AccountSlice,
    // room: RoomSlice,
    // theme: ThemeSlice,
    // participant: ParticipantSlice,
    // currentId: idReducer,
    // debts: DebtSlice,
    // purchase: PurchaseSlice,
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