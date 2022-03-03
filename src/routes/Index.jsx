import { useContext } from "react";
import Context from "../contexts/Context";
import ProtectedRoutes from '../routes/ProtectedRoutes';
import PublicRoutes from "./PublicRoutes";


function Routes(){

    const { signed } = useContext(Context);
    console.log(signed);

    //if signed is true, user may access exlusive routes. Otherwise, only public ones
    return signed ? <ProtectedRoutes /> : <PublicRoutes /> 
}

export default Routes;