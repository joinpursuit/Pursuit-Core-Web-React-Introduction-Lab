import React from "react";


const postObj = {
    title: "Title",
    notes: "Lorem Ipsem"}
function post(){
  return ( <div>
      {postObj.title}
      {postObj.notes}
    </div>)
}
export default post;