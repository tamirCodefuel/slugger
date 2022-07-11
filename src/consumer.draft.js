import {slugger} from './index.js'

(()=>{
    const slugged = slugger('cons umer', 'draft', 'js')
    console.log(slugged)
})()