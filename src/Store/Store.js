import { configureStore } from '@reduxjs/toolkit'
import auditReducer from './AuditSlice'
export const store = configureStore({
    reducer: {
        audit:auditReducer
    },
})