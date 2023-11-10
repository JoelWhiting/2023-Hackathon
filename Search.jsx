import React,{useState} from "react";
import{collection, query, where} from "firebase/firestore";
import{db} from"../firebase";
import{AuthContext} from"../context/AuthContext"
const Search =()=>{
    const[username,setUsername]=useState("");
    const[user,setUser]=useState(null);
    const[err,setErr]=useState(false);   

    const {currentUser}=useContext(AuthContext)
    
    const handleSearch=async()=>{
        const q=query(
            collection(db,"users"),
            where("displayName","==", username)
        );

        try{   
        const querySnapshot=await getDocs(q);
        querySnapshot.forEach((doc) => {
            setUser(doc.data())
            });
        }catch(err){
             setErr(true)
        }
    };

    const handleKey=(e)=>{  
        e.code==="Enter"&&handleSearch();
    };
    const handleSelect= async()=>{
        const combineId=
        currentUser.uid>user.uid
        ?currentUser.uid+user.uid
        :user.uid+currentUser.uid;
        try{
            const res =await getDoc(doc(db,"chats",combineId));
        if(!res.exists()){
            await setDoc(doc(db,"chats",combineId),{messages:[]});
            await updateDoc(doc(db,"userChats",currentUser.uid),{
                [combineId+"userInfo"]:{
                    uid:user.uid,
                    displayName: user.dispalyName,
                    photoURL:user.photoUrl
                    },
                    [combineId+".date"]: serverTimestamp()
            });
            await updateDoc(doc(db,"userChats",user.uid),{
                [combineId+"userInfo"]:{
                    uid:currentUser.uid,
                    displayName: currentUser.dispalyName,
                    photoURL:currentUser.photoUrl
                    },
                    [combineId+".date"]: serverTimestamp()
            });
         }
        }catch(err){}
        setUser(null);
        setUsername("")


    };
    return(
        <div className='search'>
            <div className="searchForm">
                <input 
                type="text" 
                placeholder="Find a user" 
                onKeyDown={handleKey} 
                onChange={(e)=>setUsername(e.target.value)} 
                value={username}
                />
            </div>
            {err &&<span>User not found</span>}
            {user &&(<div className="userChat" onClick={handleSelect} >
                <img 
                src={user.photoURl}alt="" />
                <div className="userChatInfo">
                    <span>{user.dispalyName}</span>
                </div>
            </div>
            )}
        </div>
    );
};

export default Search;
