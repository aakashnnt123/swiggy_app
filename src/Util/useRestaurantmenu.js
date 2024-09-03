import { useEffect ,useState} from "react";
import { menu_api } from "../Util/Constants";

const useRestaurantmenu = (resid)=>
{
   const[resInfo , setresInfo] = useState(null);

    useEffect(() =>{
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    } ,[]);

    const fetchData = async() =>{
        const data =   await fetch(menu_api + resid);
        const json = await data.json();
        setresInfo(json.data);
    }; 

     return resInfo;
}

export default useRestaurantmenu;