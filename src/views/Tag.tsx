import React from 'react';
import {useTags} from '../useTags';
import { useParams } from 'react-router-dom';
type Params={
  id:string
}
const Tag:React.FC=(props)=>{
  const {findTags}=useTags()
  let {id}=useParams<Params>()
  const tag=findTags(parseInt(id))
  return(
    <div>
      {tag.name}
    </div>
  )
}
export {Tag}
