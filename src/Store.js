import {configureStore} from '@reduxjs/toolkit'
import pageSlice from './Store/PageSlice'
import formSlice from './Store/FormSlice'


const store= configureStore(
    reducer:{
        page:pageSlice,
        form:formSlice,
    }
)