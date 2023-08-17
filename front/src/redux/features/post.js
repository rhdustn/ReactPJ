let postinfo={
    id:"",
    images:"",
    title:"",
    content:"",
    writer:"",
    all:""
}

const postreducer =(state=postinfo,action)=>{
const {type,payload}=action;
switch (type) {
    case "ALL":
        return{...state,all:payload}

    default:
        return state;
}
}

export default postreducer