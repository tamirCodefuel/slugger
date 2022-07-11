import {slugger} from './index.js'

(()=>{
    const slugged = slugger('consumer', 'draft', 'js')
    console.log(slugged)
})()