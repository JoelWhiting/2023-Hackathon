import{doc,onSnapshot} from "firebase/firestore";
import React,{useEffect,useState} from "react";
import{db}from"../firebase";

const Chats =()=>{

    const[chats,setChats]=useState([]);
    const{currentUser}=useContext(AuthContext);

    useEffect(()=>{
        const getChats=()=>{
            const unsub =onSnapshot(doc(db,"userChats",currentUser.uid),(doc)=>{
                setChats(doc.data());
            });

            return()=>{
                unsub();
            };
        };
        currentUser.uid&&getChats()
    },  [currentUser.uid]);


    console.log(Object.entries(chats));
    return(
        <div className="chats">
            <div className="userChat">
                <img 
                src="" 
                alt="" 
                />
                <div className ="userChatInfo">
                    <span> Jane</span>
                    <p>Hello</p>
                </div> 
            </div>
        <div className="userchat">
            <img 
            src="" 
            alt="" 
            />
            <div>
                <span>Jane</span>
                <p>Hello</p>
            </div>
        </div>
        <div className="userChat">
            <img 
                src="" 
                alt="" 
            />
            <div className="userChatInfo">
                <span>Jane</span>
                <p>Hello</p>
            </div>
        </div>
    </div>
    );
};
export default Chats;